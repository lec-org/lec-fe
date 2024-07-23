/**
 * 正则 -> 手机号码 「严格验证」
 */
const STRICT_TELEPHONE_NUMBER = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/

/**
 * 正则 -> 手机号码 「宽松验证」
 */
const LOOSE_TELEPHONE_NUMBER = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/

/**
 * 正则 -> 手机号码 「模糊验证」
 */
const FUZZY_TELEPHONE_NUMBER = /^1\d{2,12}$/


export {
  STRICT_TELEPHONE_NUMBER,
  LOOSE_TELEPHONE_NUMBER,
  FUZZY_TELEPHONE_NUMBER
}
