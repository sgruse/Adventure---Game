'use strict';
// class SimpleDate {
//   constructor(year, month, day) {
//     this._year = year;
//     this._month = month;
//     this._day = day;
//   }
//
//   this.addDays = function(nDays) {
//
//   }
//
//   this.getDay = function() {
//     return _day
//   }
// }
//
// let today = new SimpleDate(2000, 2, 28)
//
// today.addDays(1)

let SimpleDate = (function() {
    let _yearKey = Symbol();
    let _monthKey = Symbol();
    let _dayKey = Symbol();

  class SimpleDate {
    constructor(year, month, day) {
      this[_yearKey] = year;
      this[_monthKey] = month;
      this[_dayKey] = day;
    }

  addDays() {
  }

  getDay() {
    return this[_dayKey]
  }
}
return SimpleDate
}());
