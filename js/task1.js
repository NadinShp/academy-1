function getQuantityOfBinaryOne(number){
    let num = number>0 ? number : -(number);
    let binary = num.toString(2);
    binary = (number>=-127 && number<=127)
    ? binary.padStart(8, 0)
    : binary.padStart(16, 0);
    let forNegativeRes;
    if(number<0){
        const negativeBinaryArr = binary.replaceAll(1, 2).replaceAll(0, 1).replaceAll(2, 0).split('');
        const c = [...negativeBinaryArr];
        for(let i=c.length-1; i>0; i--){
            if(+c[i]===1){
                c.splice(i, 1, 0);
                continue;
            }
            if(+c[i]===0){
                c.splice(i, 1, 1);
                break;
            }
        }
        forNegativeRes = c.reduce((acc, el)=>+el===1 ? acc+1 : acc, 0);
    }
    return number>0
    ? binary.split('').reduce((acc, el)=>+el===1 ? acc+1 : acc, 0)
    : forNegativeRes;
}
console.log(getQuantityOfBinaryOne(1234));
console.log(getQuantityOfBinaryOne(-1234));
