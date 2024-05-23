// DON'T USE ABSOLUTE PATHS
const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
  myName: myOtherName,
  myFriendsName,
  myGreatHobbies,
} = require('./export-and-import');
const greetingFn = require('./my-modules/single-export');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

// mutates array in the multiple-exports module!
myHobbies.push('climbing');

// Import from single-export
console.log(greetingFn);
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
