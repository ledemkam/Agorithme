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

// how to remove space in javascript

function removeSpace(str) {
  return str.replace(/\s/g, '');
}

console.log(removeSpace("javascript"));
console.log(removeSpace("´a b c d e"));
console.log(removeSpace(" ein katze schläft, die suris tanzen."))


//how to add positive numbers to javascript

function addPositive(num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
      if(num[i] > 0) {
          total += num[i]
      }
  }
  return total;
}

console.log(addPositive([1,3,4,5]));
console.log(addPositive([-1,-2,-3]));
console.log(addPositive([0]));
console.log(addPositive([]));

// or for on ...for tu use ...to add positive number

function addPositive2(sum) {
  let total = 0;
  for(n of sum){
      if(n > 0) {
          total += n
      }
  }
}
console.log(addPositive2([1,3,4,5]));
console.log(addPositive2([-1,-2,-3]));
console.log(addPositive2([0]));
console.log(addPositive2([]));

// we cann use method reduce to add positive number
function addPositive3(arr){
  return arr.reduce(((acc,current) => current > 0 ? acc + current : acc),0)
}
// we cann use method filter to add positive number

function addPositive4(numb){
  return numb.filter(n => n >= 0).reduce(((a,c) => a + c),0)

}

