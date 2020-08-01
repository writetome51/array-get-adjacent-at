# getAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Beginning at `startingIndex`, returns `howMany` adjacent items from `array`.  
Does not modify `array`.  `startingIndex` can be negative or positive.


## Examples
```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getAdjacentAt(2, 3, arr);
// --> [3,4,5]

getAdjacentAt(4, 5, arr);
// --> [5, 6, 7, 8, 9]

// You can pass a negative index:
getAdjacentAt(-3, 2, arr);
// --> [8, 9]
```

## Installation
`npm i  @writetome51/array-get-adjacent-at`

## Loading
```js
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
```
