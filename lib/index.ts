import { _arraySlice } from './privy/_arraySlice';
import { errorIfArrayTooShortToMeetAdjacentItemsRequest }
	from 'error-if-array-too-short-to-meet-adjacent-items-request';
import { errorIfIndex_howMany_orArray_areNotValid }
	from 'error-if-index-how-many-or-array-are-not-valid';


// This function is a strict type-checking version of _arraySlice().
// startingIndex can be negative or positive.

export function getAdjacentAt(startingIndex, howMany, array): any[] {

	errorIfIndex_howMany_orArray_areNotValid(startingIndex, howMany, array);
	errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howMany, array.length);

	if (howMany === 0) return [];
	if (startingIndex + howMany === 0) return _arraySlice(startingIndex, array.length, array);
	else return _arraySlice(startingIndex, startingIndex + howMany, array);
}
