'use strict';

Date.prototype.formatRFC3339 = function() {
  return "{0}-{1}-{2}T{3}:{4}:{5}Z{6}".format(
    this.getFullYear().leadingZero(),
    this.getMonth().leadingZero(),
    this.getDate().leadingZero(),
    this.getHours().leadingZero(),
    this.getMinutes().leadingZero(),
    this.getSeconds().leadingZero(),
    "{0}:{1}".format(
      (-this.getTimezoneOffset() / 60).leadingZero(), (-this.getTimezoneOffset() %
        60).leadingZero()
    )
  );
}
