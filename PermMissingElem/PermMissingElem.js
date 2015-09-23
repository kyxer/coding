// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (ECMA-262, 5th edition)
    result = 1;
    if (!A || A.length === 0) return result;
    var sum, ll = A.length, i, np1 = ll + 1, sumOfA = 0;
    sum = np1 * (1 + np1) / 2;
    for(i=0; i<ll;i++){ sumOfA += A[i];}

    result = sum - sumOfA;
    return result;
}