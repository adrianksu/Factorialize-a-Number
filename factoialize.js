function factorialize(num) {
  switch(num){
    case 0:
      num = 1;
      break;
  }// end case
  
  var myArray = [];
  var i = 1;
  while(i <= num) {   
  myArray.push(i);
  i++;
 } //end push array

  num = myArray.reduce(function(a, b) {
    return a * b;
});  //end reduce

    return num;
    
}  //end factorialize

factorialize(5);
