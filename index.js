// Code your solution in this file!
// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    return Math.abs(someValue - hq);
  }
  
  // Function to calculate distance from HQ in feet
  function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
  }
  
  // Function to calculate the distance travelled in feet
  function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(start - destination);
    return blocksTravelled * 264;
  }
  
  // Function to calculate the fare price
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  console.log(distanceFromHqInBlocks(43)); // Should output: 1
  console.log(distanceFromHqInBlocks(50)); // Should output: 8
  console.log(distanceFromHqInBlocks(34)); // Should output: 8
  
  console.log(distanceFromHqInFeet(43)); // Should output: 264
  console.log(distanceFromHqInFeet(50)); // Should output: 2112
  console.log(distanceFromHqInFeet(34)); // Should output: 2112
  
  console.log(distanceTravelledInFeet(43, 48)); // Should output: 1320
  console.log(distanceTravelledInFeet(50, 60)); // Should output: 2640
  console.log(distanceTravelledInFeet(34, 28)); // Should output: 1584
  
  console.log(calculatesFarePrice(43, 44)); // Should output: 0
  console.log(calculatesFarePrice(34, 32)); // Should output: 2.56
  console.log(calculatesFarePrice(50, 58)); // Should output: 25
  console.log(calculatesFarePrice(34, 24)); // Should output: 'cannot travel that far'
  