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
    if(coin === 0){
      numOfCoins++;
    } else {
      checkValue(divide(coin, 2));
      checkValue(divide(coin, 3));
      checkValue(divide(coin, 4));
    }
  return numOfCoins;
  }
  return checkValue(n);
}