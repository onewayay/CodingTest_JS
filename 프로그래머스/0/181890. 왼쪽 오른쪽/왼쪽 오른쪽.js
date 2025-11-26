function solution(str_list) {
    let answer = [];

    const lIdx = str_list.indexOf("l");
    const rIdx = str_list.indexOf("r");

    if (lIdx === -1 && rIdx === -1) { // 둘다 없는 경우
        answer = [];
    } else if (lIdx !== -1 && (rIdx === -1 || lIdx < rIdx)) {
        // "l"이 먼저 나오는 경우
        answer = str_list.slice(0, lIdx);
    } else {
        // "r"이 먼저 나오는 경우
        answer = str_list.slice(rIdx + 1);
    }

    return answer;
}