import { types, conditions } from '.';
import * as doken from 'doken';

const tokenize = doken.createTokenizer({
  rules: [
    // Short Flags //
    doken.regexRule('quotedShortFlag', /-([a-zA-Z0-9]{1,2})=(?<!\\)["']((?:[^"']|\\"|\\')+)(?<!\\)["']/y, {
      lineBreaks: true,
      value: (match: RegExpExecArray) => ({ flag: match[1], value: match[2] }),
    }),
    doken.regexRule('valueShortFlag', /-([a-zA-Z0-9]{1,2})=([^ ]+)/y, {
      value: (match: RegExpExecArray) => ({ flag: match[1], value: match[2] }),
    }),
    doken.regexRule('shortFlag', /-([a-zA-Z0-9]{1,2})/y, {
      value: (match: RegExpExecArray) => ({ flag: match[1], value: true }),
    }),

    // Long Flags //
    doken.regexRule('quotedLongFlag', /--([a-zA-Z0-9-]+)=(?<!\\)["']((?:[^"']|\\"|\\')+)(?<!\\)["']/y, {
      lineBreaks: true,
      value: (match: RegExpExecArray) => ({ flag: match[1], value: match[2] }),
    }),
    doken.regexRule('valueLongFlag', /--([a-zA-Z0-9-]+)=([^ ]+)/y, {
      value: (match: RegExpExecArray) => ({ flag: match[1], value: match[2] }),
    }),
    doken.regexRule('longFlag', /--([a-zA-Z0-9-]+)/y, {
      value: (match: RegExpExecArray) => ({ flag: match[1], value: true }),
    }),

    // Arguments //
    doken.regexRule('argument', /[^"' ]+/y, {
      condition: (match: RegExpExecArray) => !/['"]/.test(match[0]),
    }),
    doken.regexRule('quotedArgument', /(?<!\\)["']((?:[^"']|\\"|\\')+)(?<!\\)["']/y, {
      lineBreaks: true,
      value: (match: RegExpMatchArray) => {
        return match[1];
      },
    }),
  ],
  strategy: 'first',
});

export default (
  prefix: string,
  message: string
): {
  success: boolean;
  command: string;
  args: Array<string>;
  flags: {
    [name: string]: string | true;
  };
  eval: string;
} => {
  if (!message.startsWith(prefix))
    return {
      success: false,
      command: '',
      args: [],
      flags: {},
      eval: '',
    };

  let iter = tokenize(message.substr(prefix.length));

  let ret: {
    success: boolean;
    command: string;
    args: Array<string>;
    flags: {
      [name: string]: string | true;
    };
    eval: string;
  } = {
    success: true,
    command: '',
    args: [],
    flags: {},
    eval: '',
  };

  for (let token of iter) {
    if (conditions.oneOf(token.type, ['argument', 'quotedArgument'])) ret.args.push(token.value.trim());
    else if (
      conditions.oneOf(token.type, [
        'shortFlag',
        'valueShortFlag',
        'quotedShortFlag',
        'longFlag',
        'valueLongFlag',
        'quotedLongFlag',
      ])
    )
      ret.flags[token.value.flag] = token.value.value;
  }

  if (types.isType(ret.args[0], 'string')) {
    ret.command = <string>ret.args.shift();
    ret.eval = message.substr(prefix.length + ret.command.length + 1);
  }

  return ret;
};

console.log(exports.default('exprt ', 'exprthi there -f'));
