// Exercise 7
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

// createRecommendations function
const createRecommendations = (obj) => {
  let meals = Object.keys(obj);
  let sides = Object.values(obj);
  let finish = meals.map((dish) => {
    return `With ${dish}, it is best to have ${obj[dish]}.`;
  });
  return finish;
};

// printRecommendations function
const printRecommendations = (arr) => {
  console.log(arr.join("\n"));
};

// function call (done)
// printRecommendations(createRecommendations(foodPairings));
printRecommendations(createRecommendations(foodPairings));
