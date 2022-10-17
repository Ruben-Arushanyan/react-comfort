
export const eq = (x, y) => x === y || (x !== x && y !== y)
export const isFunction = (x) => typeof x === 'function'
export const isObject = (x) => x !== null && (typeof x === 'object' || typeof x === 'function')
export const has = (x, key) => x !== null && Object.prototype.hasOwnProperty.call(x, key)
export const isArray = x => Array.isArray(x)