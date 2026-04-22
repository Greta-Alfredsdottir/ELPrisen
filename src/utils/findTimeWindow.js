export function findTimeWindow(inputDateStart,inputDateEnd){
    const timeStart = new Date(inputDateStart)
    const timeEnd = new Date(inputDateEnd)
    const localTime = new Date()
    console.log(localTime.getHours())

    if (localTime >= timeStart
        && localTime <= timeEnd){
        console.log("NU ER DEN INDEN FOR TIDEN");
         return true
           
    } else return false


    console.log("Start",timeStart);
    console.log("End", timeEnd);
    
}