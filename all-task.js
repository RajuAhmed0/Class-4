/* Task - 1 */
function Foo() {
   console.log("foo"); Bar();

}

function Bar() {
   console.log("bar");
}

Bar("foo");
Foo();


/* Task - 2  */
function make_avg(num1, num2, num3) {
   var total = num1 + num2 + num3;
   var average = total / 3;
   return average;
}
var avg = make_avg(103, 105, 112);
console.log(avg);



/*  Task - 3 */
// function make_avgs (num1, num2, num3, num4, num5) {
//    var totalAmount = num1 + num2 + num3 + num4 + num5;
//    var averages = totalAmount / 5;
//    return averages;  
// }
//  var avg = make_avgs (10, 12, 15, 23, 35);
//  console.log(avg);

/* Task - 4 */








/* Task - 5 */
var color = "Green";

switch (color) {
   case 'Red': console.log('Don,t crossing road');
      break;
   case 'Yellow': console.log('Stop and waiting green signal');
      break;
   case 'Green': console.log('Signal green cross the road');
      break;
   default: console.log('Flow the Traffic signal and cross the road');
}





