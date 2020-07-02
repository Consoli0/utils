# Boolean

## Usage

```ts
let { Toggler } = utils.bool;
let myToggler = new Toggler();
```

---

## Class instance

### `define(key)`

Type: `function`  
Parameters: `key: string`  
Returns: `this`

Make sure that `key` is defined in the Toggler's memory

---

### `set(key, value)`

Type: `function`  
Parameters: `key: string, value: boolean`  
Returns: `this`

Define `key` if it does not exist, then set the value of `key` to `value`

---

### `get(key)`

Type: `function`  
Parameters: `key: string`  
Returns: `boolean`

Get the value of `key`, defining it and returning false if it does not exist

---

### `useEnterExit(key)`

Type: `function`  
Parameters: `key: string`  
Returns: `EnterFunction`

Returns an enter-exit function that controls the value of `key`, example:

```ts
let enter = myToggler.useEnterExit('test');
let exit = enter(); // Sets to true, can call several time to set to true, returns an exit function
exit(); // Sets back to false, can call several times to reset to false, returns an enter function

utils.assert(enter._ === myToggler);
utils.assert(exit._ === myToggler);
```

_On both enter and exit functions, you can access the `_` property to reference the Toggler object\_

---

### `useToggle(key)`

Type: `function`  
Parameters: `key: string`  
Returns: `ToggleFunction`

Returns a function that toggles the value of `key`, example:

```ts
let toggle = myToggler.useToggle('test');
let toggle2 = toggle(); // Returns the toggle function, toggles value
toggle(); // Back to false
toggle(); // True
toggle(); // False

utils.assert(toggle === toggle2);
utils.assert(toggle._ === myToggler);
```

---

### `toggle(key)`

Type: `function`  
Parameters: `key: string`  
Returns: `this`

Toggle the value of `key`

---
