// Code your solution in this file!
function distanceFromHqInBlocks(distance){
  const hq = 42
  if (distance < 42){
    return hq - distance
  }
  else {
    return distance - hq
  }
}

function distanceFromHqInFeet(distance){
  return distanceFromHqInBlocks(distance) * 264
}

function distanceTravelledInFeet(a,b){
  c =  (a-b) * 264
  if (c < 0)
    return c * -1;
  else
    return c;
}

function calculatesFarePrice(a,b){
  let feet = distanceTravelledInFeet(a,b)
  if (feet < 400)
    return 0
  else if(feet>400 && feet < 2000)
    return (feet * 2 - 800) / 100
  else if(feet > 2000 && feet < 2500)
    return 25
  else if (feet > 2500)
    return 'cannot travel that far'

}
