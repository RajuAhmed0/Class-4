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

function findAverage(array) {
   var sum = 0;
   for (var i = 0; i < array.length; i++) {
      sum += array[i];
   }
   return sum / array.length;
}

let numbers = [10, 12, 15, 24, 35];
let average = findAverage(numbers);
console.log(average); 

/* Task - 4 */
function odd_even(num) {
   if (num % 2 == 0) {
       return 'even';   
   }
   else {
       return 'odd';
   }
}

var resultNum = odd_even(23);
console.log(`This is ${resultNum} number`);


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





