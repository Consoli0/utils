import chalk from 'chalk';

export var mode = 'development';
export var projectName: string | null = null;

export const log = (data: unknown): boolean => {
  process.stdout.write(`${chalk.bgWhiteBright.black(`[ LOG${projectName ? ` :: ${chalk.bgBlue.white(projectName)}` : ''} ]`)}: ${chalk.white(data)}
`);
  return true;
};

export const error = (error: string | Error): boolean => {
  process.stderr.write(
    `${chalk.bgRedBright.black(`[ ERROR${projectName ? ` :: ${chalk.bgBlue.white(projectName)}` : ''} ]`)}: ${chalk.red.italic(
      error instanceof Error ? error.message : error
    )}${error instanceof Error ? '\n' + chalk.red(error.stack) + '\n' : '\n'}`
  );
  return true;
};

export const warn = (warning: string, more?: string): boolean => {
  process.stderr.write(`${chalk.bgYellowBright.black(
    `[ WARNING${projectName ? ` :: ${chalk.bgBlue.white(projectName)}` : ''} ]`
  )}: ${chalk.yellow.bold(warning)}${typeof more === 'string' ? `: ${chalk.yellow.italic(more)}` : ''}
`);
  return true;
};

export const debug = (data: unknown): boolean => {
  if (mode === 'development') {
    process.stdout.write(`${chalk.bgRgb(155, 0, 255).white(`[ DEBUG${projectName ? ` :: ${chalk.bgBlue.white(projectName)}` : ''} ]`)}: ${chalk.rgb(
      155,
      0,
      255
    )(data)}
`);
    return true;
  }
  return false;
};

export const verbose = (data: unknown): boolean => {
  if (mode === 'development') {
    process.stdout.write(`${chalk
      .bgRgb(100, 100, 100)
      .black(`[ VERBOSE${projectName ? ` :: ${chalk.bgBlue.white(projectName)}` : ''} ]`)}: ${chalk.rgb(100, 100, 100)(data)}
`);
    return true;
  }
  return false;
};

export const setProduction = (isProduction: boolean, silent?: boolean): void => {
  mode = isProduction ? 'production' : 'development';
  if (!silent) log(`Logger: Mode set to ${mode}, debug and verbose logs will${mode === 'development' ? '' : ' not'} be logged`);
};

export const setProjectName = (pn: string | null, silent?: boolean): void => {
  projectName = pn;
  if (!silent) log(`Logger: Project name set to "${projectName}"`);
};
