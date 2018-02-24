/**
 * Functional alternative to a switch/case declaration.
 *
 * Pass it a string and a map (object), and it will return the value found at
 * the key which matches the supplied string.
 *
 * Falls back to object's `regular` key if present.
 *
 * @param {String} prop
 * @param {Object} map
 * @returns {*}
 *
 * @example
 *
 *    pick("danger", {
 *      regular: "gray",
 *      action: "green",
 *      danger: "red",
 *    })
 *    // Returns "red"
 *
 *    pick("foo", {
 *      regular: "gray",
 *      action: "green",
 *      danger: "red",
 *    })
 *    // Returns "gray"
 *
 */

export const pick = (prop, map) => map[prop] || map.regular;

/**
 * An alternative to IIFE (Immediately Invoked Function Expressions)
 *
 * Pass it a any value and a function and it will immediately call that
 * function with the supplied argument
 *
 * @param {*}
 * @param {Function}
 * @returns {*}
 *
 * @example
 *
 *    apply({foo: 1, bar: 2}, (o) => o.foo + o.bar)
 *    // Returns 3
 *
 */

export const apply = (prop, func) => func(prop);
