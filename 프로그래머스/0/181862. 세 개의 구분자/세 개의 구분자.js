function solution(myStr) {
    const result = myStr
        .split(/[abc]/) // a, b, c 모두 구분자로 split
        .filter(str => str !== ""); // 빈 문자열 제거

    return result.length > 0 ? result : ["EMPTY"];
}