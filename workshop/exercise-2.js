// Exercise 2
// ----------

const lateComers = ["Felicia", "Charles", "Terry"];
const earlyBirds = ["Ellen", "Jerry", "Jasmine"];

const printGuessOrder = (earlyArr, lateArr) => {
  finalArr = earlyArr.concat(lateArr);
  guestList = finalArr.join("\n");
  console.log(guestList);
};

printGuessOrder(earlyBirds, lateComers);
