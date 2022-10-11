const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = []
  let str = n.toString().split('');
  for(let i = 0; i< str.length; i++) {

      str.splice(i, 1)

      arr.push(str)

      str = n.toString().split('');

  }

  arr = arr.map(item => {
    return item.join('')
  })

  arr = arr.map(item => +item)

  return Math.max.apply(null, arr);
}


module.exports = {
  deleteDigit
};
