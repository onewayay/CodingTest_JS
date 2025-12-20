function solution(num_list) { 
    const sortList = num_list.sort(function(a, b) {
      return a - b;
    });
    
    const answer = sortList.slice(0,5);
    
    return answer;
}