//How do you know if a number is a multiple of another?
// example :number multiply of 3

function multiply3(num3){
    return num3 % 3 === 0
}
console.log(multiply3(3))// true a number is a multiple of 3
console.log(multiply3(2)) // false a number isn t a multiple of 3

// how to programm median from statistics

function median (arr) {
  var len = arr.length;
  var mid = Math.floor(len / 2);
  if (len % 2) {
    return (arr[mid] + arr[mid - 1]) / 2;

  }

}
