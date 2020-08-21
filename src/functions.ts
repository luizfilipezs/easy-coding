import { NewElementOptions } from './types';

/**
 * Create a new element with custom options and return it
 * @param tag {keyof HTMLElementTagNameMap} Element tag
 * @param options {NewElementOptions} Options for the new element, such as id, classes and event listeners
 * @returns New HTMLElement
 */
export const createElement = (tag: keyof HTMLElementTagNameMap, options: NewElementOptions): HTMLElement => {
  const element = document.createElement(tag);
  const { id, classes, content, listeners } = options;

  if (id) element.id = id;
  if (classes) element.classList.add(...classes);
  if (content) element.innerHTML = content;

  listeners?.forEach((listener) => element.addEventListener(...listener));
  options.childOf?.appendChild(element);

  return element;
};

/**
 * Receive an object and add its properties to `globalThis`
 * @param set {object} Object with properties that will be added to `globalThis`
 */
export const makeGlobal = (set: object): void =>
  Object.entries(set).forEach((entry) => (globalThis[entry[0]] = entry[1]));

/* tslint:disable:no-bitwise */

/**
 * Return an index value from the given array
 * @param arr {T[]} Any type of array
 * @returns {T} Random index value from the given array
 */
export const getRandomValueFrom = <T>(arr: T[]) => arr[~~(Math.random() * arr.length)];

/* tslint:enable:no-bitwise */

/**
 * Returns a random number between the two given parameters
 * @param min {number}
 * @param max {number}
 * @returns {number} Random number between min and max
 */
export const randomNumberBetween = (min: number, max: number) => Math.random() * (max - min) + min;

/**
 * Returns random date between two other dates
 * @returns {string} Random date
 */
export const randomDateBetween = (date1: string | number, date2: string | number) => {
  date1 = date1 || '01-01-1970';
  date2 = date2 || new Date().toLocaleDateString();

  date1 = new Date(date1).getTime();
  date2 = new Date(date2).getTime();

  return date1 > date2
    ? new Date(randomNumberBetween(date2, date1)).toLocaleDateString()
    : new Date(randomNumberBetween(date1, date2)).toLocaleDateString();
};

/**
 * Returns the given string without special chars
 * @param str {string} Initial string
 * @returns {string} The given string without special chars
 */
export const removeSpecialChars = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
