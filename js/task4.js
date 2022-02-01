// concat()
function concat(arr1, arr2, ...rest){
    return [...arr1, ...arr2, ...rest.flatMap(el=>el)];
}
console.log(concat([1, 2, 3, 4, 5], [6, 7, 8, 9], [1, 2, 3], [4, 5, 6]));
// lastIndexOf
function lastIndexOf(value, query){
    if(typeof(value)==='string'){
        value = value.split('');
    }
        let res;
        for (let i=0; i<value.length; i++){
            const arr = [];
            if(!value.includes(query)){
                res = -1;
                break;
            }
            if(value[i]===query){
                arr.push(i);
            res = arr[arr.length-1];
        }
    }
    return res;
}
console.log(lastIndexOf('The weather is good', 'i'));
console.log(lastIndexOf([4, 2, 4, 7, 9, 4, 5, 9], 4));

//includes()
function includes(arr, value){
    return arr.some(el=>el===value);
}
console.log(includes([4, 7, 12, 15, 1], 32));
console.log(includes([4, 7, 12, 15, 1], 7))

// repeat()
function repeat(string, value1, value2) {
    return string.split('').map(el=>el===value1 ? value2 : el).join('');
};
console.log(repeat('This letter v is not sutable', 'v', 'k'));

// substring()
function substring(string, value1, value2=string.length){
    const arr = string.split('');
    const val = value1>value2 ? value2 : value1;
    const finish = val===value2 ? value1 : value2;
    const res = [];
    for (let i=val; i<finish; i++){
        res.push(arr[i]);
    }
    return res.join('');
}
console.log(substring('Accademy', 1, 4));

// substr()
function substr(string, value1, value2){
    const res = [];
    const arr = string.split('');
    let start = value1<0 ? Math.abs((arr.length-1)-(-value1)): value1;
    const length=start+value2;
    for (let i=start; i<length; i++){
        res.push(arr[i]);
    }
    return res.join('');
};
console.log(substr('Accademy123456', 20, 6));