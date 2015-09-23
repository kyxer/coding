// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 4.0.0)
    if (A % K === 0)
        return Math.floor((B - A) / K + 1);
    return Math.floor((B - (A - (A % K) )) / K)
}