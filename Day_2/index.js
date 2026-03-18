//? Task 1: using mocha and chai [Required]
//? using expect test data length and type that returned from this code
export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
};

//? Task 2 --> implement all the unit testing cases for the following functions using jasmine [Required]
export const MathUtils = function () {};

MathUtils.prototype.sum = function (number1, number2) {
  return number1 + number2;
};

MathUtils.prototype.substract = function (number1, number2) {
  return number1 - number2;
};

MathUtils.prototype.multiply = function (number1, number2) {
  return number1 * number2;
};

MathUtils.prototype.divide = function (number1, number2) {
  return number1 / number2;
};

MathUtils.prototype.average = function (number1, number2) {
  return (number1 + number2) / 2;
};

MathUtils.prototype.factorial = function (number) {
  if (number < 0) {
    throw new Error("There is no factorial for negative numbers");
  } else if (number == 1 || number == 0) {
    return 1;
  } else {
    return number * this.factorial(number - 1);
  }
};

MathUtils.prototype.checkPositivity = function (number) {
  if (number < 0) return false;
  else return true;
};

// Required missing variables/functions
export const obj = { id: 1, name: "test object" };

export const sayHelloWorld = () => "Hello World";

export const doSomeThingLater = () => 
    new Promise(resolve => setTimeout(() => resolve("Success"), 100));

//? Task 3 --> test two requests in node with using async/await instead of done() [Required]
export const makeTwoRequests = async () => {
    const [res1, res2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/posts/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/2')
    ]);
    if (!res1.ok || !res2.ok) throw new Error("Request failed");
    return [await res1.json(), await res2.json()];
};

