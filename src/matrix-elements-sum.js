const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(/*matrix*/) {
  throw new NotImplementedError('Not implemented');
  // let sum = 0;
  // matrix.map((item) => {
  //   item.map((m) => {
  //     if (m > 0) {
  //       sum += m;
  //     }
  //   });
  // });

  // return sum;
}

// console.log(
//   getMatrixElementsSum([
//     [0, 1, 1, 2],
//     [0, 5, 0, 0],
//     [2, 0, 3, 3],
//   ])
// );

module.exports = {
  getMatrixElementsSum,
};
