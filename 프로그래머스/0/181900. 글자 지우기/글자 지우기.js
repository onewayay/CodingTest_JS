function solution(my_string, indices) {
    let strArr = [...my_string]
    
    let answer = strArr.map((ch, i) => {
        return indices.includes(i) ? "" : ch
    })
    return answer.join("");
}