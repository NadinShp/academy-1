 function getArrayWithSpecialValues(n){
    let arr = [];
    for (let i=1; i<n+1; i++){
        if(i%3===0 && i%5===0){
            arr.push('FizzBuzz');
            continue;
        }
        if(i%5===0){
            arr.push('Buzz');
            continue;
        }
        if(i%3===0){
            arr.push('Fizz');
            continue;
        }
        arr.push(i);
    }
    return arr;
 }
console.log(getArrayWithSpecialValues(17));