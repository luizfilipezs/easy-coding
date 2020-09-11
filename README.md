# easy-coding

[![npm](https://img.shields.io/npm/v/easy-coding.svg)](https://www.npmjs.com/package/easy-coding)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

This package contains utilities written in the TypeScript language. They help you to write your code faster as they are functionalities that commonly take some time from programmers to create.

## Installation

`npm i easy-coding`

## Usage

### Functions

#### `createElement(tag, options)`

Creates a new element with custom options and returns it.

Usage:

```js
const button = createElement('button', {
  id: 'my-image',
  classes: ['cover'],
  attributes: [['src', '/path/to/img.png']],
  content: 'Click me!',
  listeners: [['click', e => doSomething(e)]],
  childOf: document.querySelector('#button-wrapper')
});
```

#### `handleBindingAttr(attr, callback)`

Gets all DOM elements with the specified attribute and runs a callback function for each one, passing the element and its attribute value as arguments.

Example:

```html
<div clickAndGo="/some-route">Click me</div>
<img clickAndGo="/another-route" src="path/to/img" alt="Some image">
```
```js
handleBindingAttr('clickAndGo', (element, value) =>
  element.addEventListener('click', () => window.location.href = value)
);
```

Once the function is called it starts listening to template changes, that is, you can add new elements anytime and the proper callback for them and their attributes will run.

#### `makeGlobal(key, value)`

Adds a new property to the `window` object.

#### `addGlobalEntries(set)`

Adds the properties of `set` to the `window` object.

#### `ruleOfThree(a, b, c)`

Returns x where `a` is equivalent to `b` and `c` is equivalent to x.

Example:

```
a --- b
c --- x
```

Let's say you want to turn mililiters to litters:

```
1000ml --- 1L
10000ml --- ?
```

The code:

```js
const x = ruleOfThree(1000, 1, 10000); // 10
```

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
