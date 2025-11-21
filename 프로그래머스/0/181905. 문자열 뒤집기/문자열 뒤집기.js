function solution(my_string, s, e) {
    let stringArr = [...my_string];
    
    let reverseArr = [...my_string.slice(s, e + 1)].reverse();
    
    stringArr.splice(s, e - s + 1, ...reverseArr);
    
    return stringArr.join('');
}