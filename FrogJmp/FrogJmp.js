// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 4.0.0)
    var j = Math.floor((Y-X)/D);

    if((Y-X)%D !== 0 ) return j+1;
    else return j;
}