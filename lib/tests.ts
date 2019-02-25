import { getAdjacentAt } from './index';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: the result must be array, must have 3 items, first item must be 3
// and third item must be 5:
let result = getAdjacentAt(2, 3, arr);
if (isArray(result) &&
	result.length === 3 &&
	result[0] === 3 && result[2] === 5) console.log('test 1 passed');
else console.log('test 1 failed.');


// Test 2: a negative startingIndex is allowed, as long as (startingIndex + howMany)
// is not greater than 0.
result = getAdjacentAt(-2, 2, arr);
if (isArray(result) &&
	result.length === 2 &&
	result[0] === 9) console.log('test 2 passed');
else console.log('test 2 failed.');


// Test 3: if startingIndex is negative, and (startingIndex + howMany) > 0,
// it must trigger error.  If error is triggered, test passes:
let errorTriggered = false;
try {
	result = getAdjacentAt(-4, 5, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 failed.');


// Test 4: if startingIndex is positive, and (startingIndex + howMany) > array.length,
// it must trigger error.  If error is triggered, test passes:
errorTriggered = false;
try {
	result = getAdjacentAt(1, 10, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 failed.');


// Test 5: if howMany parameter is 0, it should return empty array:
errorTriggered = false;
result = getAdjacentAt(-2, 0, arr);
if (isArray(result) &&
	result.length === 0) console.log('test 5 passed');
else console.log('test 5 failed.');


// Test 6: if startingIndex is 0, and howMany is entire array length, it should return
// entire array:
errorTriggered = false;
result = getAdjacentAt(0, arr.length, arr);
if (arraysMatch(arr, result)) console.log('test 6 passed');
else console.log('test 6 failed.');


// Test 7: if startingIndex is not integer, should trigger error:
errorTriggered = false;
try{
	result = getAdjacentAt(1.01, 2, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 failed.');