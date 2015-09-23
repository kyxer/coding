// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var ll = A.length, positiveInt = Array(), i;

    for(i = 0; i<ll; i++){
        if(A[i]>0) {
            positiveInt[A[i]] = true;
        }
    }
    var lP = positiveInt.length;
    for(i=1; i<=lP;i++){
        if(!positiveInt[i])
            return i;
    }

    return 1;
}