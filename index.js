// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  return Math.abs(distance - 42);
}

function distanceFromHqInFeet(feet){
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(one, two){
  return distanceFromHqInFeet(two)-distanceFromHqInFeet(one);
}

function calculatesFarePrice(one, two){
  let difference = distanceFromHqInFeet(two)-distanceFromHqInFeet(one)
  switch (true) {
    case (difference < 400):
      return 0;
    case (difference >= 400 && difference < 2000):
      return (difference - 400) * .02;
    case (difference >= 2000 && difference < 2500):
      return 25
    case (difference > 2500):
      return 'cannot travel that far'
    }
}
