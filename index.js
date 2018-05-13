// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return Math.abs(distanceFromHqInBlocks(location) * 264);
}

function distanceTravelledInFeet(begin, end) {
  return Math.abs(distanceFromHqInFeet(begin) - distanceFromHqInFeet(end));
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
