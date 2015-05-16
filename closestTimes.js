// ["00:12", "12:20", "23:50", "16:40"]
// find out the two times that are closest to one another

var closestTimes = function(arrayOfTimes){
  for (var i = 0; i < arrayOfTimes.length; i++) {
    for (var j = 0; j < arrayOfTimes.length; j++) {

    };
  };
}

var timeDiff = function(a, b){
  //the number of minutes indexed from 0
  var max = 1380;
  
}

var convertToMins = function(time){
  var totalMins = 0;
  var currentVal = 0;
  //tens hours
  currentVal = Number(time[0]);
  for (var tensHours = 0; tensHours < 3; tensHours++) {
    if(currentVal === tensHours){
      totalMins += currentVal * 600;
    }
  }
  //hours
  currentVal = Number(time[1]);
  for (var hours = 0; hours < 9; hours++) {
    if(currentVal === hours){
      totalMins += currentVal * 60;
    }
  }
  //tens mins
  currentVal = Number(time[3]);
  for (var tensMins = 0; tensMins < 5; tensMins++) {
    if(currentVal === tensMins){
      totalMins += currentVal * 10;
    }
  }
  //mins
  currentVal = Number(time[4]);
  for (var mins = 0; mins < 9; mins++) {
    if(currentVal === mins){
      totalMins += currentVal;
    }
  };
  return totalMins;
}