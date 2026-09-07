function solution(phone_number) {
    let number = '';
    for(let i = 0; i < phone_number.length; i ++){
        if(i >= phone_number.length - 4){
            number += phone_number[i];
        } else {
            number += '*'
        }
    }
    
    return number;
}