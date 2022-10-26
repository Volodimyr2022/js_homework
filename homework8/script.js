// const exam = [true, false, false, true, false];


// function getTrueAmount(){
//     let sum = [];
//     for(let trueValue of exam) {
//         if(trueValue === true) {
//             sum.push(trueValue);
//         }  
//     }
//     return sum.length;
// }

// const result = getTrueAmount(exam);
// console.log(result);

const letters = ["a", "v", "a", "b", "b"];

const getOccurrencesCount = (arr) => {
    let occur = {};
    for(let elem of arr) {

        if(!occur[elem]) {
            occur[elem] = 1;
        }else{
            occur[elem] += 1;
        }
        }
        return occur;
    }
    
const result = getOccurrencesCount(letters)
console.log(result)

// const num = [2, 6, 8, 10, 3];
// const getEvenOdd = (arr) => {
        
//     let even = [];
//     let odd = [];
//     let res 
//     for(let number of arr) {
//         if(number%2 === 0) { 
//            even.push(number) 
//         } else {
//             odd.push(number)
//         }        
//         if(even.length === 1)  
//         {
//              res = even[0]
//         }else{
//              res = odd[0]
//         }
//     }
//     return res
// }
// const resEvenOdd = getEvenOdd(num);
// console.log(resEvenOdd)

