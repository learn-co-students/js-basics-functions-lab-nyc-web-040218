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
  if (start < end) {
    return (end - start) * 264
  } else {
    return (start - end) * 264
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    var newDistance = distance - 400
    return newDistance * 0.02
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return "cannot travel that far"

  }
}
