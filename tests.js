import {getAdjacentAt} from './index.js';
import {isArray} from '@writetome51/is-array-not-array';
import {arraysMatch} from '@writetome51/arrays-match';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: the result must be array, must have 3 items, first item must be 3
// and third item must be 5:
let result = getAdjacentAt(2, 3, arr);
if (arraysMatch(result, [3, 4, 5]))
	console.log('test 1 passed');
else
	console.log('test 1 FAILED.');


// Test 2: a negative startingIndex is allowed, as long as (startingIndex + howMany)
// is not greater than 0.
result = getAdjacentAt(-2, 2, arr);
if (arraysMatch(result, [9, 10]))
	console.log('test 2 passed');
else
	console.log('test 2 FAILED.');


result = getAdjacentAt(-3, 2, arr);
if (arraysMatch(result, [8, 9]))
	console.log('test 2A passed');
else
	console.log('test 2A FAILED.');


// Test 3: if startingIndex is negative, and (startingIndex + howMany) > 0,
// it must trigger error.  If error is triggered, test passes:
let errorTriggered = false;
try {
	result = getAdjacentAt(-4, 5, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered)
	console.log('test 3 passed');
else
	console.log('test 3 FAILED.');


// Test 4: if startingIndex is positive, and (startingIndex + howMany) > array.length,
// it must trigger error.  If error is triggered, test passes:
errorTriggered = false;
try {
	result = getAdjacentAt(1, 10, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered)
	console.log('test 4 passed');
else
	console.log('test 4 FAILED.');


// Test 6: if startingIndex is 0, and howMany is entire array length, it should return
// entire array:
result = getAdjacentAt(0, arr.length, arr);
if (arraysMatch(arr, result))
	console.log('test 6 passed');
else
	console.log('test 6 FAILED.');


// Test 7: if startingIndex is not integer, should trigger error:
errorTriggered = false;
try {
	result = getAdjacentAt(1.01, 2, arr);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered)
	console.log('test 7 passed');
else
	console.log('test 7 FAILED.');
