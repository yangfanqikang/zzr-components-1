/**
 * 判断是否为字符串
 * @param obj
 * @returns {boolean}
 */
export function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
}

/**
 * 判断是否为对象
 * @param obj
 * @returns {boolean}
 */
export function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 判断是否为htmlElement节点类型
 * @param node
 * @returns {*|boolean}
 */
export function isHtmlElement(node) {
  return node && node.nodeType === Node.ELEMENT_NODE;
}

/**
 * 判断是否为function
 * @param functionToCheck
 * @returns {*|boolean}
 */
export const isFunction = (functionToCheck) => {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};

/**
 * 判断是否为undefined
 * @param val
 * @returns {boolean}
 */
export const isUndefined = (val)=> {
  return val === void 0;
};

/**
 * 判断是否已定义
 * @param val
 * @returns {boolean|boolean}
 */
export const isDefined = (val) => {
  return val !== undefined && val !== null;
};
