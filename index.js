function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(location, destination) {
  return Math.abs(location - destination) * 264
}

function calculatesFarePrice(location, destination) {
  const distance = distanceTravelledInFeet(location, destination)

  switch (true){
    case distance > 2500:
      return 'cannot travel that far';
    case distance > 2000:
      return 25;
    case distance > 400:
      return (distance - 400) * 0.02;
    default:
      return 0;
    }
}
