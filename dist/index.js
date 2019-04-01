"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _arraySlice_1 = require("./privy/_arraySlice");
var error_if_array_too_short_to_meet_adjacent_items_request_1 = require("error-if-array-too-short-to-meet-adjacent-items-request");
var error_if_index_how_many_or_array_are_not_valid_1 = require("error-if-index-how-many-or-array-are-not-valid");
// This function is a strict type-checking version of _arraySlice().
// startingIndex can be negative or positive.
function getAdjacentAt(startingIndex, howMany, array) {
    error_if_index_how_many_or_array_are_not_valid_1.errorIfIndex_howMany_orArray_areNotValid(startingIndex, howMany, array);
    error_if_array_too_short_to_meet_adjacent_items_request_1.errorIfArrayTooShortToMeetAdjacentItemsRequest(startingIndex, howMany, array.length);
    if (howMany === 0)
        return [];
    if (startingIndex + howMany === 0)
        return _arraySlice_1._arraySlice(startingIndex, array.length, array);
    else
        return _arraySlice_1._arraySlice(startingIndex, startingIndex + howMany, array);
}
exports.getAdjacentAt = getAdjacentAt;
