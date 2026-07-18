function solution(my_string) {
    let word = "";
    for(let i = my_string.length - 1; i >= 0; i--){
        word += my_string[i];
    }
    return word;
}