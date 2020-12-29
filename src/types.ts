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
   * Object with CSS properties and their corresponding values.
   *
   * @example
   * style: {
   *   color: '#fafafa',
   *   backgroundColor: '#1a1a1a'
   * }
   */
  style?: {
    [P in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[P];
  };
  /**
   * Array of CSS classes.
   */
  classes?: string[];
  /**
   * Array of arrays that contain an attribute name and its value.
   *
   * @example
   * attributes: [
   *   ['src', '/path/to/img.png'],
   *   ['alt', 'Some alternative text']
   * ]
   */
  attributes?: [string, string][];
  /**
   * Content that will be appended to the element through its `innerHTML` property.
   *
   * @example
   * content: `
   *   <p>Hi there! I am the element's content!</p>
   *   <p>Yeah! I am too!</p>
   * `
   */
  content?: string;
  /**
   * Array of event listeners to be bound to the element.
   * It is possible to add listeners to the same event multiple times.
   *
   * @example
   * // Adds a listener for the click event.
   * listeners: [
   *   ['click', (e) => doSomething(e)],
   * ]
   */
  listeners?: [keyof HTMLElementEventMap, EventListenerOrEventListenerObject][];
  /**
   * Parent to which the new element must be appended to.
   *
   * @example
   * childOf: document.querySelector('#content-wrapper')
   */
  childOf?: Element;
}
