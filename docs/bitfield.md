# BitField

## Usage

```ts
let bf = new utils.BitField();
```

## Static

### `from(value)`

Type: `function`  
Parameters: `value: number | Array<number> | BitField | Array<BitField>`  
Returns: `BitField`

Create a BitField from the given value/BitField

---

## Class instance

### `val`

Type: `number`  
Initial value: `0`

---

### `flip(index)`

Type: `function`  
Parameters: `index: number | Array<number>`  
Returns: `this`

Flip a bit or a collection of bits

---

### `set(index, value)`

Type: `function`  
Parameters: `index: number | Array<number>, value: boolean = true`  
Returns: `this`

Set a bit or collection of bits to `value`

---

### `on(index)`

Type: `function`  
Parameters: `index: number | Array<number>`  
Returns: `this`

Turn a bit or collection of bits to `1`

---

### `off(index)`

Type: `function`  
Parameters: `index: number | Array<number>`  
Returns: `this`

Turn a bit or collection of bits to `0`

---

### `clear()`

Type: `function`  
Parameters: none  
Returns: `this`

Reset all bits to 0

---

### `toArray()`

Type: `function`  
Parameters: none  
Returns: `Array<number>`

Return an array of all of the components of the BitField value

---

### `toString()`

Type: `function`  
Parameters: none  
Returns: `string`

Get the string value of the BitField value

---

### `toBinaryString()`

Type: `function`  
Parameters: none  
Returns: `string`

Get the binary string value of the BitField value

---

### `toString()`

Type: `function`  
Parameters: none  
Returns: `string`

Equivalent to `.toString()`

---
