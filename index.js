// Code your solution in this file!

function distanceFromHqInBlocks(num){
    if (num > 42){
        return num - 42;
    }else{
        return 42 - num;
    }
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(block1, block2){
    if (block1 > block2 ){
        return (block1 - block2) * 264;
    }else{
        return (block2 - block1) * 264;
    }
}

function calculatesFarePrice(start, destination){
    let total = distanceTravelledInFeet(start, destination)
    if (total > 400 && total < 2000){
        return (total-400) * .02
    }else if (total < 400){
        return 0
    } else if (total > 2000 && total < 2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}