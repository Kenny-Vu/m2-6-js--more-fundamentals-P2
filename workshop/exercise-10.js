// Exercise 10
// -----------

let inputData = {
  name: "Will Byers",
  age: 9,
  status: "upside down",
  superpower1: "can-blink-lights",
  superpower2: null,
  address1: "123 Whatever street",
  addressCity: "Hawkins",
  addressState: "Indiana",
  addressCountry: "United States",
  motherName: "Joyce Byers",
  motherAge: 35,
  motherStatus: "worried",
  motherSuperpower1: null,
  motherSuperpower1: null,
  bestFriendName: "Mike Wheeler",
  bestFriendAge: 9,
  bestFriendStatus: "frenetic",
  bestFriendSuperpower1: null,
  bestFriendSuperpower1: null,
  girlfriendName: "Eleven",
  girlfriendAge: 9,
  girlfriendStatus: "angry",
  girlfriendSuperpower1: "telepathy",
  girlfriendSuperpower2: "multiverse portal sealing",
};

// We want a function that can transform it from that shape to this shape:
//
// {
//   "name": "Will Byers",
//   "age": 9,
//   "status": "upside down",
//   "address": {
//     "streetAddress": "123 Whatever street",
//     "city": "Hawkins",
//     "state": "Indiana",
//     "country": "United States"
//   },
//   "superpowers": [
//     "can-blink-lights"
//   ],
//   "relationships": [
//     {
//       "type": "mother",
//       "name": "Joyce Byers",
//       "age": 35,
//       "status": "worried",
//       "superpowers": []
//     },
//     {
//       "type": "girlfriend",
//       "name": "Eleven",
//       "age": 9,
//       "status": "angry",
//       "superpowers": [
//         "telepathy",
//         "multiverse portal sealing"
//       ]
//     }
//   ]
// }

// Specifically:

// - Address becomes nested in an object
// - Instead of `superpower1` and `superpower2`, an array is used
// - Instead of having a "flat" structure for relationships, a new `relationships`
//   array is added, which holds objects for each relationship.
// - Each relationship has a `type`, like mother/best-friend/girlfriend
// - Each relationship also has an array of super powers, same logic as the main
//   `superpowers` array

// NOTE: For superpowers, you should only have as many items as are available.
// For example, the main superpowers array should be:
// ✅ ['can-blink-lights']
// ⛔️ ['can-blink-lights', null]

//logic to handle superpowers
const combinePowers = (power1, power2) => {
  let allPowers = [];
  if (power1) {
    allPowers.push(power1);
  }
  if (power2) {
    allPowers.push(power2);
  }
  return allPowers;
};

function transformData(data) {
  // Your code here
  let { name, age, status } = data;
  // //add 3 unchanged key-value pairs
  let newData = {
    name,
    age,
    status,
  };
  //add address object
  newData.address = {
    streetAddress: data.address1,
    city: data.addressCity,
    state: data.addressState,
    country: data.addressCountry,
  };
  //add superpowers
  newData.superpowers = combinePowers(data.superpower1, data.superpower2);
  //add relationships
  newData.relationships = {
    mother: {
      type: "mother",
      name: data.motherName,
      age: data.motherAge,
      status: data.motherStatus,
      superpowers: combinePowers(data.motherSuperpower1),
    },
    bestFriend: {
      type: "best friend",
      name: data.bestFriendName,
      age: data.bestFriendAge,
      status: data.bestFriendStatus,
      superpowers: combinePowers(data.bestFriendSuperpower1),
    },
    girlfriend: {
      type: "girlfriend",
      name: data.girlfriendName,
      age: data.girlfriendAge,
      status: data.girlfriendStatus,
      superpowers: combinePowers(
        data.girlfriendSuperpower1,
        data.girlfriendSuperpower2
      ),
    },
  };
  return newData;
}
console.log(inputData.girlfriendSuperpower1);

// `JSON.stringify` is used to "pretty-print" the output, so that it's easy
// to see what it looks like, and debug any problems.

console.log(JSON.stringify(transformData(inputData), null, 2));
