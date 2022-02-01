function getArrayWithMultiplyDigits(number){
    const arr = [];
    getArrayWithValues(number);
    function getArrayWithValues(number){
        let arrFromNum = number.toString().split('');
        if(arrFromNum.length === 1)return;

        let value = arrFromNum[0];
        for (let i=1; i<arrFromNum.length; i++){
            value *= arrFromNum[i];
        }
        arr.push(value);

        if(value.toString().length>1){
        return getArrayWithValues(value);
        }
    }
    return arr;
}
console.log(getArrayWithMultiplyDigits(277777788888899));