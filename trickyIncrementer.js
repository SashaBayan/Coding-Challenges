//Tricky Incrementer

var list = [];
for (var i = 0; i < 3; i++) {
  list.push(function(){
    console.log(++i);
  })  
};

//What are the results of the following?
list[0]();
list[1]();
list[2]();