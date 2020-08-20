import { Type } from './types';

/**
 * Decorator function that add the given class to `globalThis`
 * @param type {Type} Class that will be added to `globalThis`
 */
export const Global = <T extends Type>(type: T): T => (globalThis[type.name] = type);