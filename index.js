// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, end) {
  let dist = distanceTravelledInFeet(start, end)
  let billable = dist - 400;
    if (billable < 0) {
      return 0;
    } else if (billable > 2100) {
      return 'cannot travel that far';
    } else if (billable > 1600) {
      return 25;
    } else {
      return billable * 0.02;
    }
}
