Array.prototype.myMap = function (callbackFunction) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFunction(this[i], i, this));
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5];
let output = arr.myMap((item, index, arr) => {
  return item + 2;
});
console.log(output);
