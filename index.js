// Code your solution in this file!
function distanceFromHqInBlocks(value){
  if (value > 42){
    return value - 42
  }
  else if (value < 42){
    return 42 - value
  }
}

function distanceFromHqInFeet(value){
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(startingblock, endingblock){
  if (startingblock < endingblock ){
    return (endingblock - startingblock) * 264
  }
  else if (startingblock > endingblock){
    return (startingblock - endingblock) * 264
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return .02 * (distance - 400);
  }
  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else {
    return "cannot travel that far";
  }
}
