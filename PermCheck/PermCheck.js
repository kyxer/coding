// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var ll = A.length, i, aux = Array();

    for(i=1; i<=ll; i++){
        aux[i] = -1;
    }

    for(i=0;i<ll;i++){
        if(typeof aux[A[i]] != "undefined"
        && aux[A[i]] === -1
        ){
            aux[A[i]] = 1;
        }
        else{
            return 0;
        }
    }
    return 1;
}