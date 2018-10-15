Returns chosen number of adjacent items in array beginning at chosen index.
Does not modify the source array.

getAdjacentAt(startingIndex, howMany, array);

examples:

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = getAdjacentAt(2, 3, arr);

result is [3,4,5]

You can pass a negative index:

result = getAdjacentAt(-2, 2, arr);

result is [9,10]