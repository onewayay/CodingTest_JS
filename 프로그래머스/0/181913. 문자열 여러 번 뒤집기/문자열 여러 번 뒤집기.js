function solution(my_string, queries) {
    let my_arr_string = [...my_string]; // my_string의 문자열을 배열로 변환
    
    queries.forEach(([s, e]) => {
        let cutStr = my_arr_string.slice(s, e + 1).reverse();
        my_arr_string.splice(s, e - s + 1, ...cutStr);
    });
    
    return my_arr_string.join(''); // 다시 문자열로 변환
}