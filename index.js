function distanceFromHqInBlocks(location) {
  if (location < 42) {
    answer = 42 - location
    return answer
  } else if (location >= 42) {
    answer = location - 42
    return answer
  }
}

function distanceFromHqInFeet(location) {
  answer = distanceFromHqInBlocks(location) * 264
  return answer
}

function distanceTravelledInFeet(start, end) {
  if (start >= end) {
    answer = (start - end) * 264
    return answer
  } else {
    answer = (end - start) * 264
    return answer
  }
}

function calculatesFarePrice(start, end) {
  if (distanceTravelledInFeet(start, end) < 400) {
    return 0
  } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) <= 2000) {
    answer = (distanceTravelledInFeet(start, end)) * 0.02
    return answer
  } else if (distanceTravelledInFeet(start, end) > 2000 && distanceTravelledInFeet(start, end) < 2500) {
    answer = 25
    return answer
  } else {
    answer = "cannot travel that far"
    return answer
  }
}
