/******
TypeScript version fork of npm package 'array-slice' by Jon Schlinkert:

 The MIT License (MIT)

 Copyright (c) 2014-2017, Jon Schlinkert.

 array-slice <https://github.com/jonschlinkert/array-slice>

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 ******/
// Replace Array.slice() with this:
export function arraySlice(start, end, arr) {
    let len = arr.length;
    start = idx(len, start);
    end = idx(len, end, len);
    let range = new Array(end - start),  rIndex = -1;

    while (start < end) {
        range[++rIndex] = arr[start++];
    }
    return range;


    function idx(len, pos, end = undefined) {
        if (pos == null) {
            pos = end || 0;
        }
        else if (pos < 0) {
            pos = Math.max(len + pos, 0);
        }
        else {
            pos = Math.min(pos, len);
        }
        return pos;
    }
}
