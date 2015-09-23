// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var i, ll = A.length, tot = 0, upto = 0, min = 9999;

    for (i=0; i<ll; i++) tot += A[i];

    for (i=0; i<ll-1; i++)
    {
        upto += A[i];
        var a1 = upto, a2 = tot - a1, dif = Math.abs(a1 - a2);
        if (dif < min)
         min = dif;
    }

    return min;
}