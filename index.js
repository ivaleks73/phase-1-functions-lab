
function distanceFromHqInBlocks(distance){
    const headQuarters = 42
    let x = (distance - headQuarters);
    if (x <0){x = x * -1}
    return x;
}
function distanceFromHqInFeet(distance1){
    const headQuarters = 42
    let x = (distance1 - headQuarters) * 264;
    if (x <0){x = x * -1}
    return x;
}
function distanceTravelledInFeet(distance2, distance3){

    let x = (distance2 - distance3) * 264;
    if (x <0){x = x * -1}
    return x;
}
function calculatesFarePrice(start, destination){
    let x = (destination - start) * 264

    if (x < 400){x= 0}
    else if (x >= 400 && x < 2000){x = (x - 400) * 0.02}
    else if (x >= 2000 && x < 2500){x = 25}
    else if (x >=2500){x = 'Cannot travel this far'}
    return x;

}