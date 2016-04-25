//
// This is only a SKELETON file for the 'Gigaseconds' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

function Gigasecond(dateOfBirthday) {
    this.dateOfBirthday = function() {
        var gigaBirthday = new Date(dateOfBirthday.getTime() + 1000000000000);
        gigaBirthday.setSeconds(0);
        gigaBirthday.setMinutes(0);
        gigaBirthday.setHours(0);
        return gigaBirthday;
    };
}

module.exports = Gigasecond;
