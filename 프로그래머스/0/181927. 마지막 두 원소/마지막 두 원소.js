function solution(num_list) {
    const last = num_list[num_list.length - 1];
    const subLast = num_list[num_list.length - 2];
    if(last - subLast <= 0){
        num_list.push(last * 2);
    } else {
        num_list.push(last - subLast);
    }
    return num_list;
}