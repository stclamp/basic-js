const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = []

  let count=1;
  for (let i=0;i<str.length;i++){
    if (str[i]!==str[i+1]){
      arr.push([count,str[i]]);
      count=1;
    } else {
      count++;
    }
  }
  return arr.join('').split(',').join('').replace(/1/g, '')
}


module.exports = {
  encodeLine
};
