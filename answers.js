// /** 
//   * Task description: Write a method that creates a new array with given values 
//   * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
//   * @param {number} arraySize - size of array 
//   * @param {?} value - value to fill 
//   * @returns {Array} 
// */

function createArr(arrSize, value) {
    let arr = [];

    for (let i = 0; i < arrSize; i++) {
        arr.push(value);
    }
    return arr;
}

console.log(createArr(3, 'a'));


// /** 
//   * Task description: Write a method that reverts input array 
//   * Expected Result: [1, 2, 3] => [3, 2, 1] 
//   * @param {Array} array - Array of any elements 
//   * @returns {Array} 
// */

function revertArr(arr) {
    return arr.reverse();
}

console.log(revertArr([1, 2, 3]));


// /** 
//   * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
//   * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
//   * @param {Array} array - An array of any elements 
//   * @returns {Array} 
// */

function clearArr(arr) {
    let filtered = arr.filter(Boolean)
    return filtered;
}

console.log(clearArr([1, 2, 3, 6, 8, 0, undefined,'',false,null]))



// /** 
//   * Task description: Write a method that returns an object composed of key-value pairs. 
//   * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
//   * @param {Array} array - a deep array of pairs 
//   * @returns {Array} 
// */

function createObj(key,val) {
    let obj = {
        key: key,
        val:val
    };
    return obj;

}

console.log(createObj([['a', 1], ['b', 2]]))


// /** 
//   * Task description: Write a method that returns an array without duplicated value
//   * Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3] 
//   * @param {Array} array - Array of primitive data types 
//   * @param {?} args list of values to remove 
//   * @returns {Array} 
// */

function uniq(duplicate) {
    let arr = [];
    return duplicate.filter(function (item) {
        return arr.hasOwnProperty(item) ? false : (arr[item] = true);
    });
}

console.log(uniq([1, 2, 3, 4, 4, 3, 3, 5]));
