//Prompt 1: What will the following log?
for (var i = 0; i < 5; i++) {
    setTimeout(function(){
      console.log(x)
    }, i  * 1000) 
  };
//Answer: it will log 5, 5, 5, 5, 5


//Prompt 2: How can we make this log 0,1,2,3,4?

//Answer:
for (var i = 0; i < 5; i++) {
  logNums(i)
  function logNums(x){
    setTimeout(function(){
      console.log(x)
    }, i  * 1000) 
  };
};