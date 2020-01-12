import Vue from 'vue'
import { isString, isObject } from './types'

/**
 * 是否包含属性
 * @type {(v: PropertyKey) => boolean}
 */
const hasOwnProperty = Object.prototype.hasOwnProperty

export function noop () {};

export function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
};

/**
 * 拓展对象
 * @param to
 * @param _from
 * @returns {*}
 */
function extend (to, _from) {
  for (let key in _from) {
    to[key] = _from[key]
  }
  return to
};

/**
 * 数组转对象
 * @param arr
 * @returns {{}}
 */
export function toObject (arr) {
  var res = {}
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
};

/**
 * 根据路径获取属性值
 * @param object
 * @param prop
 * @returns {null}
 */
export const getValueByPath = function (object, prop) {
  prop = prop || ''
  const paths = prop.split('.')
  let current = object
  let result = null
  for (let i = 0, j = paths.length; i < j; i++) {
    const path = paths[i]
    if (!current) break

    if (i === j - 1) {
      result = current[path]
      break
    }
    current = current[path]
  }
  return result
}

/**
 * 根据路径获取属性
 * @param obj
 * @param path
 * @param strict
 * @returns {{v: (*|null), k: *, o: *}}
 */
export function getPropByPath (obj, path, strict) {
  let tempObj = obj
  path = path.replace(/\[(\w+)\]/g, '.$1')
  path = path.replace(/^\./, '')

  let keyArr = path.split('.')
  let i = 0
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break
    let key = keyArr[i]
    if (key in tempObj) {
      tempObj = tempObj[key]
    } else {
      if (strict) {
        throw new Error('please transfer a valid prop path to form item!')
      }
      break
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null
  }
};

/**
 * 0-10000的随机数
 * @returns {number}
 */
export const generateId = function () {
  return Math.floor(Math.random() * 10000)
}

/**
 * 判断两个数组是否相等
 * @param a
 * @param b
 * @returns {boolean}
 */
export const valueEquals = (a, b) => {
  // see: https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
  if (a === b) return true
  if (!(a instanceof Array)) return false
  if (!(b instanceof Array)) return false
  if (a.length !== b.length) return false
  for (let i = 0; i !== a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

/**
 * 字符串创建正则表达式
 * @param value
 * @returns {string}
 */
export const escapeRegexpString = (value = '') => String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')

/**
 * 查找索引
 * @param arr
 * @param pred
 * @returns {number}
 */
// TODO: use native Array.find, Array.findIndex when IE support is dropped
export const arrayFindIndex = function (arr, pred) {
  for (let i = 0; i !== arr.length; ++i) {
    if (pred(arr[i])) {
      return i
    }
  }
  return -1
}

/**
 * 查找对应值
 * @param arr
 * @param pred
 * @returns {*}
 */
export const arrayFind = function (arr, pred) {
  const idx = arrayFindIndex(arr, pred)
  return idx !== -1 ? arr[idx] : undefined
}

/**
 * 强制返回数组
 * @param val
 * @returns {*[]|*}
 */
// coerce truthy value to array
export const coerceTruthyValueToArray = function (val) {
  if (Array.isArray(val)) {
    return val
  } else if (val) {
    return [val]
  } else {
    return []
  }
}

/**
 * 是否为IE浏览器
 * @returns {boolean|boolean}
 */
export const isIE = function () {
  return !Vue.prototype.$isServer && !isNaN(Number(document.documentMode))
}

/**
 * 判断是否为Edge
 * @returns {boolean|boolean}
 */
export const isEdge = function () {
  return !Vue.prototype.$isServer && navigator.userAgent.indexOf('Edge') > -1
}

/**
 * 判断是否为火狐
 * @returns {boolean|boolean}
 */
export const isFirefox = function () {
  return !Vue.prototype.$isServer && !!window.navigator.userAgent.match(/firefox/i)
}

/**
 * css3,三种属性添加前缀
 * @param style
 * @returns {*}
 */
export const autoprefixer = function (style) {
  if (typeof style !== 'object') return style
  const rules = ['transform', 'transition', 'animation']
  const prefixes = ['ms-', 'webkit-']
  rules.forEach(rule => {
    const value = style[rule]
    if (rule && value) {
      prefixes.forEach(prefix => {
        style[prefix + rule] = value
      })
    }
  })
  return style
}

/**
 * 中横线转为小驼峰
 * @param str
 * @returns {string}
 */
export const kebabCase = function (str) {
  const hyphenateRE = /([^-])([A-Z])/g
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
}

/**
 * 首字符大写
 * @param str
 * @returns {string|*}
 */
export const capitalize = function (str) {
  if (!isString(str)) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 判断是对象是否相等
 * @param a
 * @param b
 * @returns {boolean}
 */
export const looseEqual = function (a, b) {
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    return JSON.stringify(a) === JSON.stringify(b)
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * 判断数组是否相等
 * @param arrayA
 * @param arrayB
 * @returns {boolean}
 */
export const arrayEquals = function (arrayA, arrayB) {
  arrayA = arrayA || []
  arrayB = arrayB || []

  if (arrayA.length !== arrayB.length) {
    return false
  }

  for (let i = 0; i < arrayA.length; i++) {
    if (!looseEqual(arrayA[i], arrayB[i])) {
      return false
    }
  }

  return true
}

/**
 * 判断两个值是否相等
 * @param value1
 * @param value2
 * @returns {boolean}
 */
export const isEqual = function (value1, value2) {
  if (Array.isArray(value1) && Array.isArray(value2)) {
    return arrayEquals(value1, value2)
  }
  return looseEqual(value1, value2)
}

/**
 * 判断变量是否为空
 * @param val
 * @returns {boolean}
 */
export const isEmpty = function (val) {
  // null or undefined
  if (val == null) return true

  if (typeof val === 'boolean') return false

  if (typeof val === 'number') return !val

  if (val instanceof Error) return val.message === ''

  switch (Object.prototype.toString.call(val)) {
    // String or Array
    case '[object String]':
    case '[object Array]':
      return !val.length

    // Map or Set or File
    case '[object File]':
    case '[object Map]':
    case '[object Set]': {
      return !val.size
    }
    // Plain Object
    case '[object Object]': {
      return !Object.keys(val).length
    }
  }

  return false
}

/**
 * 节流: 是否执行某函数 ?
 * @param fn
 * @returns {function(...[*]=)}
 */
export function rafThrottle (fn) {
  let locked = false
  return function (...args) {
    if (locked) return
    locked = true
    window.requestAnimationFrame(_ => {
      fn.apply(this, args)
      locked = false
    })
  }
}

/**
 * 对象转数组
 * @param obj
 * @returns {*[]|*}
 */
export function objToArray (obj) {
  if (Array.isArray(obj)) {
    return obj
  }
  return isEmpty(obj) ? [] : [obj]
}
