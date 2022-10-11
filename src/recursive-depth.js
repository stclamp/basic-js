const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  count = 0;
  calculateDepth( arr ) {

   arr.map(item => {
     if(Array.isArray(item)) {
       this.calculateDepth(item)
       arr.pop()
       this.count++
       return this.count
     }
   })
    return this.count
  }


}
let calc = new DepthCalculator()
console.log(calc.calculateDepth([[[]]]))

module.exports = {
  DepthCalculator
};
