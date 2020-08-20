export type Type<T = any> = new (...args: any[]) => T;

export interface NewElementOptions {
  /**
   * ID of the element
   */
  id?: string;
  /**
   * Array with CSS classes
   */
  classes?: string[];
  /**
   * Content that will be appended to the element using its `innerHTML` property
   */
  content?: string;
  /**
   * It is possible to add listeners to the same event type multiple times
   */
  listeners?: [keyof HTMLElementEventMap, EventListenerOrEventListenerObject][];
  /**
   * Parent to which the new element must be appended to
   */
  childOf?: Element;
}