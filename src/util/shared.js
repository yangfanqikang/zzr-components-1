/**
 * 是否定义
 * @param val
 * @returns {boolean|boolean}
 */
export function isDef(val) {
  return val !== undefined && val !== null;
}

/**
 * 判断是否韩文
 * @param text
 * @returns {boolean}
 */
export function isKorean(text) {
  const reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
  return reg.test(text);
}
