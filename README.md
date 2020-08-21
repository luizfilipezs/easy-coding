# easy-coding

![[npm](https://img.shields.io/npm/v/easy-coding.svg)](https://www.npmjs.com/package/easy-coding)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

This package contains utilities written in the TypeScript language. They help you to write your code faster as they are functionalities that commonly take some time from programmers to create.

## Installation

`npm i easy-coding`

## Usage

### Functions

#### `createElement(tag, options)`

Creates a new element with custom options and returns it.

#### `makeGlobal(set)`

Adds the properties of the object `set` to `globalThis`.

#### `getRandomValueFrom(arr)`

Returns a random index value from `arr`.

#### `randomNumberBetween(min, max)`

Returns a random number between `min`and `max`.

#### `randomDateBetween(date1, date2)`

Returns a random date between two other dates.


#### `removeSpecialChars(str)`

Returns `str` without special chars.

### Decorators

#### `Global`

Decorator function that adds the given class to `globalThis`.

```ts
@Global
class SomeType { }
```

It is helpful when you are wrapping the class inside a function (like when exporting a module to a version supported by browsers) and want to make it available from anywhere.

### Classes

#### `Cookie`

Basic handler for reading and setting cookies.

Methods:

- `get(cookieName)`: Returns cookie value
- `set(cookieName, value, exdays)`: Sets a cookie
