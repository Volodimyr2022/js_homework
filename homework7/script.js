// const timeTable = {}

// const sheet = () => {
//     let time;
//     let active;
    
//     do {
//         time = prompt('Время суток')
//         if(!time) {
//             alert('Укажите время');
//             continue
//         };
//         active = prompt('Что Вы хотите делать?')
//         if(!active) {
//             alert('Укажите занятие');
//             continue
//         };
        
//         timeTable[time] = active; 
           
//     } while ((time && active) !== null) {
//         timeTable[time] = active
//        };
         
//        return(timeTable);
     
// }
// sheet()

// console.log(timeTable) 


const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  };
  const getSalariesTotal = (salaries) => {
    let total = 0;
    for(let emploee in salaries) {
        total += Number(salaries[emploee]);
    }
    return total.toFixed(2);
  };

  const totalResult = getSalariesTotal(salaries)
  console.log(totalResult)