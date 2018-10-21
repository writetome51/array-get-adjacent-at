import { _arraySlice } from './privy/_arraySlice';
import {errorIfIndex_howMany_andArray_areNotValid} 
	from '@writetome51/array-and-index-validation/errorIf/errorIfIndex_howMany_andArray_areNotValid';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from '@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest';


// This function is a strict type-checking version of _arraySlice().
// If either startingIndex or howMany are not integers, or array is not an array,
// an error is triggered.
// startingIndex can be negative or positive.

export function getAdjacentAt(startingIndex: number, howMany: number, array): any[] {
	errorIfIndex_howMany_andArray_areNotValid(startingIndex, howMany, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howMany, array);
	if (howMany === 0) return [];
	if (startingIndex + howMany === 0) return _arraySlice(startingIndex, array.length, array);
	else return _arraySlice(startingIndex, startingIndex + howMany, array);
}
