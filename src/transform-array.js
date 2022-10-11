const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/*arr*/) {
  // let transformedArr = [];
  // let subTransform = [];
  // let idx = 0;
  // if (Array.isArray(arr)) {
  //   arr.forEach((item, i) => {
  //     if (item === "--double-next") {
  //       idx = arr.indexOf(item);

  //       arr.splice(idx + 1, 0, arr[i + 1]);
  //       transformedArr = arr.slice(0, idx);
  //       // subTransform = arr.slice(idx + 1, arr.length);

  //       // transformedArr = transformedArr.concat(subTransform);
  //     } else if (item === "--double-prev") {
  //       idx = arr.indexOf(item);

  //       arr.splice(idx, 0, arr[i - 1]);
  //       transformedArr = arr.slice(0, idx - 1);
  //       subTransform = arr.slice(idx + 2, arr.length);

  //       transformedArr = transformedArr.concat(subTransform);
  //     } else if (item === "--discard-next") {
  //       idx = arr.indexOf(item);

  //       transformedArr = arr.slice(0, idx - 1);
  //       subTransform = arr.slice(idx + 1, arr.length);

  //       transformedArr = transformedArr.concat(subTransform);
  //     } else if (item === "--discard-prev") {
  //       idx = arr.indexOf(item);

  //       if (idx > 0) {
  //         transformedArr = arr.slice(0, idx);
  //         subTransform = arr.slice(idx + 2, arr.length);

  //         transformedArr = transformedArr.concat(subTransform);
  //       } else if (idx === 0) {
  //         transformedArr = arr.shift();
  //       }
  //     } else {
  //       transformedArr = arr;
  //     }
  //   });
  // } else {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }

  // return subTransform;

  throw new NotImplementedError("Not implemented");
}

module.exports = {
  transform,
};
