// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  distance = Math.abs(block - 42);
  return distance;
}

function distanceFromHqInFeet(block) {
  distance = Math.abs((block - 42) * 264)
  return distance;
}

function distanceTravelledInFeet(block1, block2) {
  distance = Math.abs((block2 - block1) * 264)
  return distance;
}

function calculatesFarePrice(block1, block2) {
  distance = Math.abs((block2 - block1) * 264)
  let fare;
  if (distance <= 400) {
    return 0
  }
  else if (distance > 2000 && distance <= 2499) {
    return 25
  }
  else if (distance > 2500) {
    return 'cannot travel that far'
  }
  else {
    return ((distance - 400) * 0.02)
  }
}
