let numberList = [1,4,7,9,10,15];
let targetNumber = 16;

function checkNumber(list,number){
    let left = 0;
    let right= numberList.length - 1;
    while(left<right){
        if(numberList[left]+numberList[right] === targetNumber){
            return[left,right];
        }
        else if(numberList[left]+numberList[right] > targetNumber){
            right--;
        }
        else{
            left++;
        }
    }
}

const result = checkNumber(numberList, targetNumber);

if(result != null){
    console.log('Target Number Exist! ','the Indices are: :', result[0], '&', result[1]);
}
else{
    console.log('Not Found');
}