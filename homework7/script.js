const timeTable = {}

const sheet = () => {
    let time;
    let active;
    
    do {
        time = prompt('Время суток')
        if(!time) {
            alert('Укажите время');
            continue
        };
        active = prompt('Что Вы хотите делать?')
        if(!active) {
            alert('Укажите занятие');
            continue
        };
        
        timeTable[time] = active; 
           
    } while ((time && active) !== null) {
        timeTable[time] = active
       };
         
       return(timeTable);
     
}
sheet()

console.log(timeTable) 