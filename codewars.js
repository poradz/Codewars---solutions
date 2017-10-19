//////////////convert sum to binarys
const addBinary = function(a,b) {
return (a+b).toString(2);
}

///////////////find Square number
const isSquare = function(n){
	//math.pow "1/2" oblicz pierwiastek kwadratowy, "2" podniosłoby do potęgi 2
  return Number.isInteger(Math.pow(n, 1/2));
};
console.log("isSquare(3) - " + isSquare(3)); // => false
console.log("isSquare(25) - " + isSquare(25)); // => true

//////////////Capitalize string
String.prototype.toJadenCase = function () {
  let arr = this.split(" ");
  let arrUpper = arr.map(function(x) {
  	//slice dodaje resztę słowa do dużej litery
    return x.charAt(0).toUpperCase() + x.slice(1);
  });
  let str = "";
  for (let i = 0; i < arrUpper.length; i++) {
    i === 0 ? str = str + arrUpper[i] : str = str + " " + arrUpper[i];
  }
  return str;
};
console.log("Jaden string: " + "How can mirrors be real if our eyes aren't real".toJadenCase())

///////////check, if it is possible to construct triangle from given number
const isTriangle = function(a,b,c) {
  if (a+b>c&&a+c>b&&b+c>a) {
    return true;
  }else{return false;}
};
console.log("isTriangle 9,2,4 - " + isTriangle(9,2,4));
console.log("isTriangle 9,6,4 - " + isTriangle(9,6,4));

///////////Help with IQ test - find out which one of the given numbers differs from the others starting from one
const iqTest = function(numbers){
  let arr = numbers.split(" ");
  let odd = arr.filter(x => x % 2 !== 0);
  let even = arr.filter(x => x % 2 == 0);
  return even.length > odd.length ? arr.indexOf(odd[0]) + 1 : arr.indexOf(even[0]) + 1;
};

//longer solution:
const iqTest2 = function(numbers){
  let odd = [];
  let even = [];
  let arr = numbers.split(" ");
  for (let i = 0; i<arr.length; i++){
    arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]);
  }
  return even.length > odd.length ? arr.findIndex(x=>x===odd[0]) + 1 : arr.findIndex(x=>x===even[0]) + 1;
};

console.log('iqTest("2 4 7 8 10") - ' + iqTest("2 4 7 8 10"));// => 3 // Third number is odd, while the rest of the numbers are even
console.log('iqTest("1 2 1 1") - ' + iqTest("1 2 1 1"));// => 2 // Second number is even, while the rest of the numbers are odd


/////////similar to IQtest, but return integer
const findOutlier = function(integers){
  let odd = integers.filter(x => x % 2 !== 0);
  let even = integers.filter(x => x % 2 == 0);
  return even.length > odd.length ? odd[0] : even[0];
};