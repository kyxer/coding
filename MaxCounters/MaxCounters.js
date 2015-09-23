// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var ll = A.length, i, aux=Array(), max = 0, lastUpdate = 0, position;

    for(i=0;i<N;i++){
        aux[i]=0;
    }

    for(i=0;i<ll;i++){
        if(A[i]<=N){
            position = A[i] -1;
            if (aux[position] < lastUpdate){
                aux[position] = lastUpdate + 1;
            } else {
                aux[position]++;
            }

            if(aux[A[i]-1]>max)
                max = aux[A[i]-1];
        }
        else{
            lastUpdate = max;
        }
    }

    for(i=0;i<N;i++){
        if(aux[i]<lastUpdate)
            aux[i] = lastUpdate;
    }

    return aux;

}