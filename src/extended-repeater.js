const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let newArr = [];
  let veryNewArr = []
  let newStr = ''

  if('addition' in options) {
    options.addition = options.addition + ''
    for(let i = 0; i < (options.additionRepeatTimes ? options.additionRepeatTimes : 1); i++) {
      newArr.push(options.addition)

      newArr = newArr.map(item => item + '')

      newStr = newArr.join(options.additionSeparator ? options.additionSeparator : '|')
    }
  }

  let goodStr = str + '' + newStr

  for(let i = 0; i < (options.repeatTimes ? options.repeatTimes : 1); i++) {
    veryNewArr.push(goodStr)
  }

  return veryNewArr.join(options.separator ? options.separator : '+')
}


module.exports = {
  repeater
};
