// pascal's triangle - return a flat array of the values of Pascal's Triangle to the nth level
function pascalsTriangle(n) {
  let res = [1];
  let bottomRow = [];
  let bottomRowLength = 2;
  for (let i = 2; i <= n; i++) {
    res.push(1);
    for (let j = 0; j < bottomRow.length; j++) {
      if (bottomRow[j + 1]) {
        res.push((bottomRow[j] += bottomRow[j + 1]));
      }
    }
    res.push(1);
    bottomRow = res.slice(res.length - bottomRowLength);
    bottomRowLength++;
  }
  return res;
  // 1 // 1, 1,1 // 1, 1,1, 1,2,1 // 1, 1,1, 1,2,1 1,3,3,1 // 1, 1,1, 1,2,1 1,3,3,1, 1,4,6,4,1
}
console.log('flat array of pascal"s triangle', pascalsTriangle(5), '\n');

// translate seconds into clock format

function formatTime(seconds) {
  let hours = 0;
  let minutes = 0;

  if (seconds >= 3600) {
    hours = Math.floor(seconds / 3600); // generate hours
    seconds -= hours * 3600; // remove
  }

  if (seconds >= 60) {
    minutes = Math.floor(seconds / 60); // generate seconds
    seconds -= minutes * 60;
  }

  if (hours < 9) hours = `0${hours}`;
  if (minutes < 9) minutes = `0${minutes}`;
  if (seconds < 9) seconds = `0${seconds}`;

  return `${hours}:${minutes}:${seconds}`;
}

console.log('seconds formatted as time:', formatTime(359999), '\n'); // 359999

// sudoku validator
const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

const sudokuValidator = (board) => {
  result = true;
  let cells = [[], [], [], [], [], [], [], [], []];
  let cols = [[], [], [], [], [], [], [], [], []];
  board.forEach((arr, y) => {
    arr.forEach((el, x) => {
      if (el == 0) {
        result = false;
      } else if (arr.indexOf(el) != x) {
        result = false;
      } else if (y < 3) {
        x < 3
          ? cells[0].push(el)
          : x < 6
          ? cells[1].push(el)
          : cells[2].push(el);
      } else if (y < 6) {
        x < 3
          ? cells[3].push(el)
          : x < 6
          ? cells[4].push(el)
          : cells[5].push(el);
      } else if (y < 9) {
        x < 3
          ? cells[6].push(el)
          : x < 6
          ? cells[7].push(el)
          : cells[8].push(el);
      }
      cols[x].push(el);
    });
  });

  for (let n = 0; n < 9; n++) {
    for (let i = 0; i < 9; i++) {
      if (cells[n].indexOf(cells[n][i]) != i) {
        result = false;
      } else if (cols[n].indexOf(cols[n][i]) != i) {
        result = false;
      } else if (board[n].indexOf(board[n][i]) != i) {
        result = false;
      }
    }
  }
  return result;
};
console.log('sudoku solution is valid:', sudokuValidator(board), '\n');

// first unique letter
const firstUniqueLetter = (str) => {
  let obj = {};
  for (let el of str) {
    if (!obj.hasOwnProperty(el)) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }
  for (key in obj) {
    if (obj[key] == 1) {
      return key;
    }
  }
  return -1;
};
console.log('first unique letter:', firstUniqueLetter('aaron'), '\n');

// reverse string
const revStr = (str) => {
  return str
    .split('')
    .map((el, i) => str[str.length - 1 - i])
    .join('');
};
console.log('reversed string:', revStr('string'), '\n');

// check if string is palindrome
const checkPalin = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return str;
};
console.log('is a palindrome:', checkPalin('racecar'), '\n');

// flatten nested sub-arrays
const flattened = (arr) => {
  return arr.reduce((acc, el) => {
    // return acc.concat(el)
    return [...acc, ...el]; // [0, 1, 2, 3, 4, 5]
  }, []);
};
console.log(
  'flattened sub-arrays:',
  flattened([
    [0, 1],
    [2, 3],
    [4, 5],
  ]),
  '\n'
);

// turn array into an inventory object
const duplicates = ['ab', 'ac', 'ab', 'ad'];
const editDuplicates = (arr) => {
  let copy = arr.slice();
  let obj = copy.reduce((acc, el) => {
    if (el in acc) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  return obj;
};
console.log('array as inventory object:', editDuplicates(duplicates), '\n');

// remove all duplicates from array
const copyArrayMinusDuplicates = (arr) => {
  return arr.reduce((acc, el) => {
    if (acc.indexOf(el) < 0) {
      acc.push(el);
    }
    return acc;
  }, []);
};
console.log(
  'array minus duplicates:',
  copyArrayMinusDuplicates(['a', 'b', 'a', 'b', 'c', 'd', 'd']),
  '\n'
);

// find longest word in a string
const findLongestWordLength = (str) => {
  let strArr = str.split(' '); // ['the', 'quick', ]
  let arr = strArr.map((el) => el.length); // [3, 5, ]
  let longest = Math.max(...arr); // 6
  for (let el of strArr) {
    if (el.length === longest) return el;
  }
};
console.log(
  'longest word in sentence:',
  findLongestWordLength('the quick brown fox jumped over the lazy hen'),
  '\n'
);

// return array of largest number in each sub array
const largestOfSubArr = (arr) => {
  let result = arr.map((el) => {
    return el.reduce((acc, el) => {
      return Math.max(acc, el);
    });
  });
  return result;
};
console.log(
  'Largest number of each sub-array:',
  largestOfSubArr([
    [1, 3, 5, 2],
    [5, 7, 4, 8],
    [4, -10, 8, 1],
    [-2, -3, -7, -1],
  ]),
  '\n'
);

// confirm end of string
const confirmEnding = (str, target) => {
  return str.slice(str.length - target.length) === target;
};
console.log('string ends with target:', confirmEnding('Hello', 'lo'), '\n');

// repeat string x times
const repeatStringNumTimes = (str, num) => {
  if (num < 0) return '';
  return new Array(num).fill(str).join('');
};
console.log('repeat string num times:', repeatStringNumTimes('abc', 3), '\n');

// truncate string
const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num).concat('...');
  } else return str;
};
console.log(
  'truncated string:',
  truncateString('A-tisket a-tasket A green and yellow basket', 8),
  '\n'
);

// return first element of arr to pass func test
const findElement = (arr, func) => {
  let newArr = arr.filter((el) => {
    if (func(el)) {
      return el;
    }
  });
  return newArr[0];
};
console.log(
  'First array el to pass test:',
  findElement([1, 2, 3, 4], (num) => num % 2 === 0),
  '\n'
);

// evaluate if boolean
const isBoolean = (bool) => {
  return typeof bool === 'boolean';
};
console.log('arg is truthy:', isBoolean(null), '\n');

// capitalize first letter in string
const titleCase = (str) => {
  let result = [];
  str.split(' ').forEach((el) => {
    let edited = el[0].toUpperCase();
    if (el.length > 1) {
      edited += el.slice(1).toLowerCase();
    }
    result = [...result, edited];
  });
  return result.join(' ');
};
console.log(
  'capitalized string:',
  titleCase('this is a capitalized string'),
  '\n'
);

// insert array into another
const frankenSlice = (arr1, arr2, n) => {
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
  // let copy = [...arr2];
  // copy.splice(n, 0, ...arr1);
  // return copy;
};
console.log('inserted array:', frankenSlice([1, 2, 3], [4, 5, 6], 1), '\n');

// remove falsy values from array
const bouncer = (arr) => {
  return arr.filter((el) => {
    return Boolean(el);
  });
};
console.log('truthy values:', bouncer([7, 'ate', '', false, 9]), '\n');

// find first index to insert number
const insertIntoArray = (arr, num) => {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      arr.splice(i, 0, num);
      return arr;
    }
  }
  arr.splice(arr.length, 0, num);
  return arr;
};
console.log(
  'sort and insert num into array:',
  insertIntoArray([4, 3, 2, 1], 2.5),
  '\n'
);

// does first string contain all letters of second string
const firstContainsSecond = (arr) => {
  let newArr = arr.map((el) => el.toLowerCase().split(''));
  for (let i = 0; i < newArr[1].length; i++) {
    if (!newArr[0].includes(newArr[1][i])) return false;
  }
  return true;
};
console.log(
  'first string contains second:',
  firstContainsSecond(['string', 'gnirt']),
  '\n'
);

// chunk array into groups
const chunkArrayInGroups = (arr, size) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};
console.log(
  'chunk array into groups:',
  chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2),
  '\n'
);

// solve via a reducer
const chunkViaReducer = (arr, size) => {
  let count = -1;
  return arr.reduce((acc, el, i) => {
    if (i % 2 === 0) {
      acc.push([el]);
      count++;
    } else {
      acc[count].push(el);
    }
    return acc;
  }, []);
};
console.log('chunk array with reducer:', chunkViaReducer([1, 2, 3, 4, 5], 2));
