function CommunalPayments(){
    this.services = [];
console.log(this.services)
    this.rates = {
        hotWater: 7,
        coldWater: 1,
        gas: 0.3,
        electricity: 1.6,
      };
      console.log(this.rates)
}

CommunalPayments.prototype.addPayment = function(amount, serviceName){
    if(!Object.keys(this.rates).includes(serviceName)){
        throw new Error(`Service "${serviceName}" is unavailable.`)
    }

    if(this.services.some(({key}) => key ===  serviceName)){
        throw new Error(`Service "${serviceName}" is already included.`)
    }

    this.services.push({key: serviceName, amount})
}

CommunalPayments.prototype.deletePayment = function(serviceName){
    this.services = this.services.filter(({key}) => key !== serviceName)
}

CommunalPayments.prototype.getSum = function(){
    let sum = 0;

    this.services.forEach(({key, amount}) => {
        sum += this.rates[key] * amount
        console.log(this.rates[key])
        console.log(amount)
    })
    return sum
}


// class CommunalPayments {
//     constructor(services, rates){
//         this.services = [];
//         console.log(this.services)
//             this.rates = {
//                 hotWater: 7,
//                 coldWater: 1,
//                 gas: 0.3,
//                 electricity: 1.6,
//               };
//               console.log(this.rates) 
//     }
//     addPayment(amount, serviceName){
//         if(!Object.keys(this.rates).includes(serviceName)){
//             throw new Error(`Service "${serviceName}" is unavailable.`)
//         }
    
//         if(this.services.some(({key}) => key ===  serviceName)){
//             throw new Error(`Service "${serviceName}" is already included.`)
//         }
    
//         this.services.push({key: serviceName, amount}) 
//     }
//     deletePayment(serviceName){
//         this.services = this.services.filter(({key}) => key !== serviceName)
//     }
//     getSum(){
//         let sum = 0;

//         this.services.forEach(({key, amount}) => {
//             sum += this.rates[key] * amount
//             console.log(this.rates[key])
//             console.log(amount)
//         })
//         return sum
//     }
// }

const payment = new CommunalPayments();

payment.addPayment(20, "hotWater");
payment.addPayment(50, "gas");
payment.addPayment(10, "coldWater");
// payment.addPayment(50, "gas");
payment.addPayment(20, "electricity");

const res = payment.getSum();

console.log(res)