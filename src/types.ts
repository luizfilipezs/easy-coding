/**
 * Type representing a class.
 */
export type Type<T = any> = new (...args: any[]) => T;

export interface NewElementOptions {
  /**
   * Element's ID.
   */
  id?: string;
  /**
   * Array of CSS classes.
   */
  classes?: string[];
  /**
   * Array of arrays that contain an attribute name and its value.
   *
   * @example
   * // Sets a source
   * createElement('img', {
   *   // ...
   *   attributes: [
   *     ['src', '/path/to/img.png'],
   *     ['alt', 'Some alternative text']
   *   ]
   * });
   */
  attributes?: [string, string][];
  /**
   * Content that will be appended to the element using its `innerHTML` property.
   *
   * @example
   * // Adds a listener for the click event
   * createElement('div', {
   *   // ...
   *   content: `
   *    <p>Hi there! I am the element's content!</p>
   *    <p>Yeah! I am too!</p>
   *   `
   * });
   */
  content?: string;
  /**
   * Array of event listeners to be bound to the element.
   * It is possible to add listeners to the same event type multiple times.
   *
   * @example
   * // Adds a listener for the click event.
   * createElement('button', {
   *   // ...
   *   listeners: [
   *     ['click', (e) => doSomething(e)],
   *   ]
   * });
   */
  listeners?: [keyof HTMLElementEventMap, EventListenerOrEventListenerObject][];
  /**
   * Parent to which the new element must be appended to.
   *
   * @example
   * createElement('button', {
   *   // ...
   *   childOf: document.querySelector('#button-wrapper')
   * });
   */
  childOf?: Element;
}
