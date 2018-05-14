// Code your solution in this file!

function distanceFromHqInBlocks(value) {
 return Math.abs(value - 42)
}

function distanceFromHqInFeet(value) {
   return Math.abs(value - 42) * 264
}

function distanceTravelledInFeet(orig, dest) {
  return Math.abs(orig - dest) * 264
}

function calculatesFarePrice(orig, dest) {
  let dist = distanceTravelledInFeet(orig, dest);

  let fare;

  // if (dist <= 400){
  //   fare = 0
  // }

  switch (true) {
    case dist<=400:
      fare = 0;
      console.log(fare);
      break;
    case dist > 400 && dist <= 2000:
      fare = (dist-400) * 0.02;
      console.log(fare);
      break;
    case dist > 2000 && dist < 2500:
      fare = 25;
      console.log(fare);
      break;
    case dist > 2500:
      fare = 'cannot travel that far';
      console.log(fare);
      break;
  }
  return fare;
}
