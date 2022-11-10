// const numbers = [1, 2, -10, -2, 7];
// const numbersToBool = numbers.map((number) => {    
//     if (number > 0) {
//         return true
//     }
//     return false
// });
// console.log(numbersToBool);

// const users = [
//     {
//       name: 'Sam',
//       role: 'admin',
//       age: 25,
//     },
//       {
//       name: 'Peter',
//       role: 'admin',
//       age: 16,
//     },
//       {
//       name: 'Pablo',
//       role: 'admin',
//       age: 32,
//     },
//       {
//       name: 'Enrico',
//       role: 'client',
//       age: 43,
//     },
//       {
//       name: 'Mary',
//       role: 'client',
//       age: 34,
//     },
//       {
//       name: 'Katerine',
//       role: 'guest',
//       age: 17,
//     },
//   ]

// const adultAdmin = (userArr) => {
// return userArr    
// .filter((userData) => (userData.age > 18 && userData.role === 'admin'))
// .map((userData) => userData.name)
// }
// const res = adultAdmin(users)
// console.log(res)

// const numbers = [1, 10, 17, 24, 45];
// const middleNumber = numbers.reduce((sum, current) => sum + current) / numbers.length;
// console.log(middleNumber);
// console.log(numbers)



// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };
// const ownForEach = (arr, logger) => {
//   for(let num of arr) {
//     logger(num, arr.indexOf(num), arr)
//   }
// }
// const res = ownForEach([1, 2, 3], logger);
// console.log(res)


// const isNegative = (number) => number < 0;
// const ownFilter = (arr, isNegative) => {
//   let negativeArr = [];
//   for(let num of arr){
//     if(isNegative(num) === true) {
//     negativeArr.push(num)
//     }
//   }
//   return negativeArr
// };
// const res = ownFilter([-2, 4, -1], isNegative);
// console.log(res)



// const increment = (number) => number + 1;
// const ownMap = (arr, increment) => {
//   let incrementNumber = []
//   for(let num of arr) {
//     incrementNumber.push(increment(num))
//   }  
// return incrementNumber  
// }
// const res = ownMap([1, 2, 3], increment); 
// console.log(res)



const data = [
  {
    name: "John",
    age: 24,
    position: "senior",
    isActive: false,
  },
  {
    name: "Peter",
    age: 33,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sam",
    age: 29,
    position: "junior",
    isActive: true,
  },
  {
    name: "Mary",
    age: 24,
    position: "middle",
    isActive: false,
  },
  {
    name: "Steve",
    age: 23,
    position: "middle",
    isActive: true,
  },
  {
    name: "Kate",
    age: 31,
    position: "middle",
    isActive: false,
  },
  {
    name: "Sally",
    age: 19,
    position: "junior",
    isActive: false,
  },
  {
    name: "Jack",
    age: 19,
    position: "middle",
    isActive: true,
  },
];


  const filterData = (dataArr, templateObjectForFilter) => {              
    let sort = dataArr.filter(point => {
        console.log('keys:', Object.keys(templateObjectForFilter))
        return Object.keys(templateObjectForFilter).every(key => {
          console.log(point[key], 'и', templateObjectForFilter[key], '=', point[key] === templateObjectForFilter[key])  
            return point[key] === templateObjectForFilter[key]
        })
    }); 
  return sort 
  };
  const resFilter = filterData(data, { position: "middle", age: 19, isActive: true })  
  // console.log(resFilter);
  console.dir(filterData)                               
 