// Exercise 4
// ----------

let foodPairings = {
  burgers: "beer",
  fish: "white wine",
  beef: "red wine",
  strawberries: "cream",
};

const converter = (obj) => {
  // do something
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  return [keys, values];
};

console.log(converter(foodPairings));
