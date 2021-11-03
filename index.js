import {getArrFilled} from '@writetome51/get-arr-filled';
import {validateAdjacentItemsOperationArgs}
	from '@writetome51/validate-adjacent-items-operation-args';


// Intended as a replacement of Array.prototype.slice() .  It strictly validates args.
// `startingIndex` can be negative or positive.

export const getAdjacentAt = (startingIndex, howMany, array) => {
	validateAdjacentItemsOperationArgs(startingIndex, howMany, array);
	if (startingIndex < 0) startingIndex += array.length;

	return getArrFilled(howMany, () => array[startingIndex++]);
}
