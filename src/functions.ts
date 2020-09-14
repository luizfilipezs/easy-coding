import { NewElementOptions } from './types';

/**
 * Create a new element with custom options and return it
 * @param tag {keyof HTMLElementTagNameMap} Element tag
 * @param options {NewElementOptions} Options for the new element, such as id, classes and event listeners
 * @returns New HTMLElement
 */
export const createElement = (tag: keyof HTMLElementTagNameMap, options?: NewElementOptions): HTMLElement => {
  const element = document.createElement(tag);
  const { id, classes, attributes, content, listeners } = options;

  if (id) element.id = id;
  if (classes) element.classList.add(...classes);
  if (content) element.innerHTML = content;

  attributes?.forEach((arr) => element.setAttribute(arr[0], arr[1]));
  listeners?.forEach((listener) => element.addEventListener(...listener));
  options.childOf?.appendChild(element);

  return element;
};

/**
 * Get DOM elements with the specified attribute and run a callback
 * function for each one, passing the element and its attribute value as
 * arguments
 * @param attribute {string} Element attribute
 * @param callback {(element: Element, value: string) => any} Callback function
 * that runs for each element with the specified attribute. The element and its
 * attribute value are the arguments for the function
 */
export const handleBindingAttr = (attribute: string, callback: (element: HTMLElement, value: string) => void): void => {
  // Get elements instantly generated
  const bindingElements = [...document.querySelectorAll(`[${attribute}]`)] as HTMLElement[];

  bindingElements.forEach((element) => {
    const attr = element.getAttribute(attribute);
    if (attr) callback(element, attr);
  });

  // Get elements dinamically generated
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList')
        mutation.addedNodes.forEach((node) => {
          const element = node as HTMLElement;
          const attr = element.getAttribute(attribute);

          if (attr) callback(element, attr);
        });
    });
  }).observe(document, {
    childList: true,
    subtree: true,
  });
};

/**
 * Receive an object and add its properties to the `window` object
 * @param set {object} Object with properties that will be added to the `window` object
 */
export const addGlobalEntries = (set: object): void =>
  Object.entries(set).forEach((entry) => (window[entry[0]] = entry[1]));

/**
 * Add a new property to the `window` object
 * @param key {string} Property name
 * @param value {any} Property value
 */
export const makeGlobal = (key: string, value: any) => (window[key] = value);

/**
 * Return x where `a` is equivalent to `b` and `c` is equivalent to x
 */
export const ruleOfThree = (a: number, b: number, c: number): number => (b * c) / a;

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
