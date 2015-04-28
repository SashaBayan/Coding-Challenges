// Catsylvanian money is a strange thing: they have a coin for every
// denomination (including zero!). A wonky change machine in
// Catsylvania takes any coin of value N and returns 3 new coins,
// valued at N/2, N/3 and N/4 (rounding down).

// Write a method `wonkyCoins(n)` that returns the number of coins you
// are left with if you take all non-zero coins and keep feeding them
// back into the machine until you are left with only zero-value coins.

// Difficulty: 3/5

var wonkyCoins = function(n){

  var numOfCoins = 0;
  var changeLayers = [];
  var divide = function(x, y){
    return Math.floor(x/y);
  }
  var checkValue = function(coin){
    var change = [divide(coin, 2), divide(coin, 3), divide(coin, 4)];
    changeLayers.push(change)
      if(change[0]){
        checkValue(change[0])
      } else {
        numOfCoins++
      }
      if(change[1]){
        checkValue(change[1])
      } else {
        numOfCoins++
      }
      if(change[2]){
        checkValue(change[2])
      } else {
        numOfCoins++
      }
    } 
  checkValue(n);
  return changeLayers;
}