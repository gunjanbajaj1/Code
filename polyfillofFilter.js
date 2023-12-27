Array.prototype.myFilter = function (callbackFunction) {
  var newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFunction(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

let arr = [1, 2, 3, 4, 5];
let output = arr.myFilter((item, index, arr) => {
  return item > 2;
});
console.log(output);
