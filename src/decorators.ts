import { Type } from './types';

/**
 * Decorator function that adds the given class to `globalThis`.
 *
 * @param {Type} type Class to be added to `globalThis`.
 */
export const Global = <T extends Type>(type: T): T => (globalThis[type.name] = type);
