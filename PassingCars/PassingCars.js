// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)

    var ll = A.length, i, sum=0, cont= 0;

    for(i=0;i<ll;i++){
        if(A[i] === 0){
            cont += 1;
        }else{
          sum +=cont;
          if(sum>1000000000)
            return -1;
        }
    }
    return sum;
}