# Assert

## Usage

```ts
let { assert, assure } = utils.assert;
```

### `assert(value, message)`

Type: `function`  
Parameters: `value: any, message?: string | Error`  
Returns: `void`

If `value` is falsy, throw `message`, if message isn't provided, throw `Expected truthy value, instead got <value>.`.

---

### `assure<Type>(value)`

Type: `function`  
Parameters: `value: any`  
Type arguments: `Type`  
Returns: `value`

Only intended for TypeScript, assures TypeScript that the input value is `Type`, returns it's input.
