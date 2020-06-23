// Exercise 1
// ----------

let mostPopularFood = [
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  undefined,
];

const fixList = function (arr, first, last) {
  newArr = arr.filter(function (meal) {
    return meal !== undefined;
  });
  newArr.unshift(first);
  newArr.push(last);
  return newArr;
};

const printList = function (arr) {
  let ranking = 0;
  let numArr = arr.map((element) => {
    ranking++;
    return (element = `${ranking}. ${element}`);
  });
  console.log(numArr.join("\n"));
};

printList(
  fixList(mostPopularFood, "bean burrito", "buffalo-flavored-cauliflower")
);
