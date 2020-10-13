function createRandomIntArray(length, min, max) {
  const randArray = [];
  for (let i = 0; i < length; i++) {
    randArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randArray;
}

function createTwoDimensionalArray(vertLength, length, min, max) {
  const randArray = [];
  for (let i = 0; i < vertLength; i++) {
    randArray.push(createRandomIntArray(length, min, max));
  }
  return randArray;
}

//1.Create an array of N elements, populate it with arbitrary integer values.
//Output the largest value of the array, the smallest value of the array, 
//the total sum of the elements, the arithmetic mean of all elements.

function manipulateIntArr() {
  const randArray = createRandomIntArray(20, -255, 255);
  let sum = randArray.reduce((accum, current) => accum + current);
  let arithmeticalMean = sum / randArray.length;
  return {'max': Math.max(...randArray), 'min': Math.min(...randArray), 'sum': sum, 'arithmetical mean': arithmeticMean}
}

//2.Create a two-dimensional array of 5x5 elements and populate it with arbitrary integer values.
//On the main diagonal, replace all numbers with the sign (-) by 10,
//and the numbers with the sign (+) by the number 20.

function replaceInts() {
  const randArray = createTwoDimensionalArray(5, 5, -255, 255);
  for (let i = 0; i < randArray.length; i++) {
    if (randArray[i][i] < 0) {
      randArray[i].splice(i, 1);
      randArray[i].splice(i, 0, 10);
    } else if (randArray[i][i] > 0) {
      randArray[i].splice(i, 1);
      randArray[i].splice(i, 0, 20);
    }
  }
  return randArray;
}

//3.Write a function that allocates array of 20 integers and initializes each element
//by its index multiplied by 5. Print the obtained array on the console.

function indexMultByFive() {
  const arr = Array(20);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i * 5;
  }
  return arr;
}

//4.Write a function that finds the maximal sequence of equal elements in an array.
//[2, 1, 1, 2, 3, 3, 2, 2, 2, 1] //[2, 2, 2].

function maxSequence(arr) {
  let seq = 1;
  let maxSeq = 1;
  let num = arr[0];
  arr.forEach((el, i) => {
    if (el === arr[i + 1]) {
      seq++;
      if (seq > maxSeq) {
        maxSeq = seq;
        num = el;
      }
    } else if (el !== arr[i + 1]) {
        seq = 1;
      }
  });
  const maxArr = Array(maxSeq);
  return maxArr.fill(num);
}

//5.Write a function that finds the maximal increasing sequence in an array.
//[3, 2, 3, 4, 2, 2, 4] //[2, 3, 4].
arr = [3, 2, 3, 4, 2, 2, 4];

function maxIncreasingSequence(arr, num = 1) {
  let seq = 1;
  let maxSeq = 1;
  let first = null;
  arr.forEach((el, i) => {
    if (el <= arr[i - 1]) {
      first = null;
      seq = 1;
    }
    if (el < arr[i + 1] && arr[i + 1] - el === num) {
      if (!first) {
        first = el;
      }
      if (arr[i + 1] - el === num) {
        seq++;
        if (seq > maxSeq) {
          maxSeq = seq;
        }
      }
    }
  });
  const maxArr = [];
  maxArr.push(first);
  for (let i = 1; i < maxSeq; i++) {
    maxArr.push(maxArr[i - 1] + num);
  }
  return maxArr;
}

//6.Write a function that finds the most frequent number in an array.
//[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]//4 (5 times)

function findFreq(arr) {
  arr.sort();
  let seq = 1;
  let maxSeq = 1;
  let num = arr[0];
  arr.forEach((el, i) => {
    if (el === arr[i + 1]) {
      seq++;
      if (seq > maxSeq) {
        maxSeq = seq;
        num = el;
      } else if (seq === maxSeq) {
        num = el;
      }
    } else if (el !== arr[i + 1]) {
        seq = 1;
      }
  });
  return '' + num + ' (' + maxSeq + ' times)';
}

//7.Write a function that finds the index of given element in a sorted array of integers
//by using the binary search algorithm.

sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(sortedArray, elem) {
  let searchStart = 0;
  let searchEnd = sortedArray.length - 1;
  if (sortedArray[searchStart] === elem) {
    return searchStart;
  }
  if (sortedArray[searchEnd] === elem) {
    return searchEnd;
  }
  while (searchEnd > searchStart) {
    let middle = Math.floor((searchStart + searchEnd) / 2);
    if (sortedArray[middle] > elem) {
      searchEnd = middle;
    } else if (sortedArray[middle] < elem) {
      searchStart = middle;
    } else {
      return middle;
    }
  }
  return new Error('The element is not found');
}

//8.Sorting an array means to arrange its elements in increasing order.
//Write a script to sort an array. Use the **"selection sort"** algorithm:
//Find the smallest element, move it at the first position, find the smallest from the rest,
//move it to the second position, etc. Hint: Use a second array

function selectionSort(unsortedArray) {
  const sorted = [];
  for (let i = 0; i < unsortedArray.length; i++) {
    let num = unsortedArray[0];
    if (!num) {
      unsortedArray.forEach((el) => {
        if (el) {
          num = el;
        }
      });
    }
    unsortedArray.forEach((el) => {
      if (el < num) {
        num = el;
      }
    })
    sorted.push(num);
    unsortedArray[unsortedArray.indexOf(num)] = undefined;
  }
  return sorted;
}
