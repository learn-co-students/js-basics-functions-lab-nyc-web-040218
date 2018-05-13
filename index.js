// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  return Math.abs(42 - street);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(begin, end) {
  return Math.abs(end - begin) * 264;
}

function calculatesFarePrice(begin, end) {
  const distance = distanceTravelledInFeet(begin, end);
  if (distance <= 400) { return 0; }
  else if (distance > 400 && distance <= 2000) { return (distance - 400) * 2 / 100; }
  else if (distance > 2000 && distance <= 2500) { return 25; }
  else if (distance > 2500) { return 'cannot travel that far'; }
}




