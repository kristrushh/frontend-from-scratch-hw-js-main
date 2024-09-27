/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:
- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).
const filter = ((array, callback) => {
  })

Функция `callback` должна принимать два параметра:
- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)
Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/
// const numbers = [1, 2, 3, 4, 5]
// Array.prototype.filter = function (callback) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       newArr.push(this[i])
//     }
//   }
//   return newArr
// }

// const numbers = [1, 2, 3, 4, 5]
// const filter = function (array, callback) {
//   let newArr = []
//   for (let index = 0; index < array.length; i++) {
//     if (element in array) {
//       if (callback(element, index)) {
//         newArr.push(element)
//     }

//     }

// }
// }

// const callback = function (element, index) {
//   if (element % 2 !== 0) {
//     return index;
//   }
// }

// var array = Object(this);
//     var length = array.length >>> 0;
//     var result = [];

//     for (var i = 0; i < length; i++) {
//       if (i in array) {
//         if (callback.call(thisArg, array[i], i, array)) {
//           result.push(array[i]);
//         }
//       }
//     }

//     return result;



/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:
- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).
Функция `callback` должна принимать два параметра:
- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)
Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/


// const filter = new Function(`${this.studentCode} \n return filter;`)();
// const result = filter([1, 2, 3, 4, 5], (element, index) => element % 2 !== 0);
// (0, local_cypress_1.expect)(result).to.deep.equal([1, 3, 5], 'Должен вернуть массив с нечетными числами');

Array.prototype.filter = function (callback) {
  //Store the new array
  const result = [];
  for (let i = 0; i < this.length; i++) {
    //call the callback with the current element, index, and context.
    //if it passes the text then add the element in the new array.
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  
  //return the array
  return result
}
