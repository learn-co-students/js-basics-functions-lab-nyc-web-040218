function distanceFromHqInBlocks(street) {
  if (street >= 42) {
    return street - 42;
  } else {
    return 42 - street;
  }
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, finish) {
  if (start > finish) {
    let distance = start - finish
      return distance * 264
} else {
    let distance = finish - start
      return distance * 264
    }
}

function calculatesFarePrice(start, finish) {
  let distanceInFeet = distanceTravelledInFeet(start, finish);

  if (distanceInFeet <= 400) {
    return 0;
}  else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    let remainder = distanceInFeet - 400
    return remainder * 0.02;
} else if (distanceInFeet > 2000 && distanceInFeet < 2500){
    return 25;
} else {
    return 'cannot travel that far';
  }
}
