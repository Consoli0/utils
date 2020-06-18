# Command Parser

Intended to parse commands, mainly on Discord

## Usage

```ts
let parseCommand = utils.commands;
```

### `parseCommand(prefix, message)`

Type: `function`  
Parameters: `prefix: string, message: string`  
Returns:

```ts
{
  success: boolean;
  command: string;
  args: Array<string>;
  flags: {
    [name: string]: string | boolean;
  };
  eval: string;
}
```

Parse a command and return an object that contains command data  
`success` :: True when the command starts with the prefix  
`command` :: The word directly after the prefix  
`args` :: Space seperated words, not including prefix, command, and flags  
`flags` :: _Refer to below_  
`eval` :: Raw text after command

## Flags

---

Short flags:  
`-a`  
`-ab`

Short value flags:  
`-a=b`  
`-ab=c`

Short quoted value flags:  
`-a="quoted arguments that support spaces"`  
`-ab="quoted arguments that support spaces"`

---

Long flags:  
`--flag`

Long value flags:  
`--flag=value`

Long quoted value flags:  
`--long-flag="quoted arguments that support spaces"`

---
