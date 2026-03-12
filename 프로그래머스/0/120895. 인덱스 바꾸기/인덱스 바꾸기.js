function solution(my_string, num1, num2) {
    const stringArr = my_string.split("");
    
    [stringArr[num1], stringArr[num2]] = [stringArr[num2], stringArr[num1]];
    
    return stringArr.join("");
}