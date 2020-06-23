// Exercise 3
// ----------

let mostPopularFood = [
  "bean burritos",
  "poke bowl",
  "chicken sliders",
  "pork baby back ribs",
  "chicken burritos",
  "chicken sandwich",
  "cauliflower rice bowl",
  "chicken and waffle sliders",
  "parmesan chicken",
  "buffalo-flavored cauliflower",
];

const rankList = (arr) => {
  let rank = 0;
  let newArr = arr.map((meal) => {
    rank++;
    return (meal = `${meal} (${rank})`);
  });
  return newArr;
};

const sortByLetter = (arr) => {
  let finalList = arr.sort().join("\n");
  console.log(finalList);
};
sortByLetter(rankList(mostPopularFood));
