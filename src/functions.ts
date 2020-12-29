import { NewElementOptions } from './types';

/**
 * Creates a new element with custom options and returns it.
 *
 * @param {keyof HTMLElementTagNameMap} tag Element tag.
 * @param {NewElementOptions} [options] Options for the new element, such as id, classes and event listeners.
 *
 * @returns {HTMLElement} New HTMLElement.
 */
export const createElement = (
  tagName: keyof HTMLElementTagNameMap,
  { id, classes, style, attributes, content, listeners, childOf }: NewElementOptions = {},
): HTMLElement => {
  const element = document.createElement(tagName);

  if (id) element.id = id;
  if (classes) element.classList.add(...classes);
  if (content) element.innerHTML = content;
  if (style) {
    for (const [key, value] of Object.entries(style)) {
      if (key in element.style) element.style[key] = value;
    }
  }

  attributes?.forEach(([key, value]) => element.setAttribute(key, value));
  listeners?.forEach((listener) => element.addEventListener(...listener));
  childOf?.appendChild(element);

  return element;
};

/**
 * Gets DOM elements with the specified attribute and runs a callback
 * function for each one, passing the element and its attribute value as
 * arguments.
 *
 * @param {string} attribute Element attribute.
 * @param {(element: Element, value: string) => any} callback Callback function
 * that runs for each element with the specified attribute. The element and its
 * attribute value are the arguments for the function.
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
          if (node instanceof Element) {
            const element = node as HTMLElement;
            const attr = element.getAttribute(attribute);
            if (attr) callback(element, attr);
          }
        });
    });
  }).observe(document, {
    childList: true,
    subtree: true,
  });
};

/**
 * Receives an object and adds its properties to the `window` object.
 *
 * @param {object} set Object with properties that will be added to the `window` object.
 */
export const addGlobalEntries = (set: object): void =>
  Object.entries(set).forEach(([key, value]) => (window[key] = value));

/**
 * Adds a new property to the `window` object.
 *
 * @param {string} key Property name.
 * @param {any} value Property value.
 */
export const makeGlobal = (key: string, value: any) => (window[key] = value);

/**
 * Returns x where `a` is equivalent to `b` and `c` is equivalent to x.
 */
export const ruleOfThree = (a: number, b: number, c: number): number => (b * c) / a;

/* tslint:disable:no-bitwise */

/**
 * Returns a random value from the given array.
 *
 * @param {T[]} arr Any type of array.
 *
 * @returns {T} Random index value from the given array.
 */
export const getRandomValueFrom = <T>(arr: T[]) => arr[~~(Math.random() * arr.length)];

/* tslint:enable:no-bitwise */

/**
 * Returns a random number between the two given parameters.
 *
 * @param {number} min Minimum value.
 * @param {number} max Maximum value.
 *
 * @returns {number} Random number between min and max.
 */
export const randomNumberBetween = (min: number, max: number) => Math.random() * (max - min) + min;

/**
 * Returns a random date between two other dates.
 *
 * @returns {string} Random date.
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
 * Returns the given string without special chars.
 *
 * @param {string} str Initial string.
 *
 * @returns {string} The given string without special chars.
 */
export const removeSpecialChars = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
