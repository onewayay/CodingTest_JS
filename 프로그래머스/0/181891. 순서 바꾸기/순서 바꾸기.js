function solution(num_list, n) {
    const frontArr = num_list.slice(0, n);
    const backArr = num_list.slice(n);
    
    const answer =[...backArr, ...frontArr];
    
    return answer;
}