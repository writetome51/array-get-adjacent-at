import {arraySlice} from './privy.js';
import {validateAdjacentItemsOperationArgs}
	from '@writetome51/validate-adjacent-items-operation-args';


// Intended as a replacement of Array.prototype.slice() .  It strictly validates args.
// `startingIndex` can be negative or positive.

export const getAdjacentAt = (startingIndex, howMany, array) => {
	validateAdjacentItemsOperationArgs(startingIndex, howMany, array);

	if (startingIndex + howMany === 0) return arraySlice(startingIndex, array.length, array);
	else return arraySlice(startingIndex, startingIndex + howMany, array);
}
