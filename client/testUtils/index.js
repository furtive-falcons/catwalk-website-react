/**
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */

const findByTestAtrr = (wrapper, val) => wrapper.find(`[data-test=${val}]`);

export default findByTestAtrr;
