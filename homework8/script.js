const exam = [true, false, false, true, false];


function getTrueAmount(){
    let sum = 0;
    for(let trueValue of exam) {
        if(trueValue === true) {
            sum++;
        }  
    }
    return sum;
}

const result = getTrueAmount(exam);
console.log(result)