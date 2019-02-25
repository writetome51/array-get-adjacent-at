# getAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): any[]

Beginning at `startingIndex`, returns `howMany` adjacent items from `array`.  
Does not modify `array`.  `startingIndex` can be negative or positive.


## Examples
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = getAdjacentAt(2, 3, arr);
// result is [3,4,5]

let result = getAdjacentAt(4, 5, arr);
// result is [5, 6, 7, 8, 9]

// You can pass a negative index:
result = getAdjacentAt(-3, 2, arr);
// result is [8, 9]
```

## Installation
`npm i  @writetome51/array-get-adjacent-at`

## Loading
```
// if using ES5 Javascript:
var getAdjacentAt = require('@writetome51/array-get-adjacent-at').getAdjacentAt;
// if using Typescript:
import { getAdjacentAt } from '@writetome51/array-get-adjacent-at';
```