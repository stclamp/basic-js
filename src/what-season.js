const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  let month;

  if (date === undefined) {
    return "Unable to determine the time of year!";
  } else {
    if (date[Symbol.toStringTag] === "Date") {
      throw new Error("Invalid date!");
    }

    if (typeof date === "object" && "getMonth" in date) {
      month = date.getMonth();

      if (month >= 0 && month <= 1) {
        return "winter";
      } else if (month === 11) {
        return "winter";
      } else if (month > 1 && month <= 4) {
        return "spring";
      } else if (month > 4 && month <= 7) {
        return "summer";
      } else if (month > 7 && month <= 10) {
        return "autumn | fall";
      }
    } else if (
      typeof date === "function" ||
      Array.isArray(date) ||
      typeof date === "number" ||
      typeof date === "string" ||
      (typeof date === "object" && !("getMonth" in date))
    ) {
      throw new Error("Invalid date!");
    }
  }
}


module.exports = {
  getSeason,
};
