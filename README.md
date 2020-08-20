# easy-coding



This package contains utilities written in the TypeScript language. They help you to write your code faster as they are functionalities that commonly take some time from programmers to create.

## Installation

`npm i easy-coding`

## Usage

### Functions

#### `createElement(tag, options)`

Create a new element with custom options and return it.

#### `makeGlobal(set)`

Add the properties of the object `set` to `globalThis`.

#### `getRandomValueFromArray(arr)`

Return a random index value from `arr`.

#### `randomValueBetween(min, max)`

Return a random number between `min`and `max`.

#### `randomDateBetween(date1, date2)`

Return a random date between two other dates.


#### `removeSpecialChars(str)`

Return `str` without special chars.

### Decorators

#### `Global`

Decorator function that add the given class to `globalThis`.

```ts
@Global
class SomeType { }
```

It is helpful when you are wrapping the class inside a function (as when exporting a module to a version supported by browsers) and want to make it available from anywhere.

### Classes

#### `Cookie`

Basic cookie handler for setting and reading cookies.

Methods:

- `get(cookieName)`: Return cookie value
- `set(cookieName, value, exdays)`: Set a cookie