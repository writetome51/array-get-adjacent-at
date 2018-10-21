"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _arraySlice_1 = require("./privy/_arraySlice");
var errorIfIndex_howMany_andArray_areNotValid_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfIndex_howMany_andArray_areNotValid");
var errorIfArrayTooShortToMeetAdjacentItemsRequest_1 = require("@writetome51/array-and-index-validation/errorIf/errorIfArrayTooShortToMeetAdjacentItemsRequest");
// This function is a strict type-checking version of _arraySlice().
// If either startingIndex or howMany are not integers, or array is not an array,
// an error is triggered.
// startingIndex can be negative or positive.
function getAdjacentAt(startingIndex, howMany, array) {
    errorIfIndex_howMany_andArray_areNotValid_1.errorIfIndex_howMany_andArray_areNotValid(startingIndex, howMany, array);
    errorIfArrayTooShortToMeetAdjacentItemsRequest_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howMany, array);
    if (howMany === 0)
        return [];
    if (startingIndex + howMany === 0)
        return _arraySlice_1._arraySlice(startingIndex, array.length, array);
    else
        return _arraySlice_1._arraySlice(startingIndex, startingIndex + howMany, array);
}
exports.getAdjacentAt = getAdjacentAt;
