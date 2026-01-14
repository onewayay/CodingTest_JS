function solution(s, skip, index) {
    // 알파벳 배열
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    let answer = '';
    
    for(let i = 0; i < s.length; i++){
        // 현재 알파벳이 전체 알파벳에서 몇번째 순서인지
        let sIndex = alphabet.indexOf(s[i]);
        
        // 알파벳 이동할 숫자
        let count = 0;
        
        // index 만큼 반복
        while (count < index) {     
            // z 넘어가면 a로 다시 돌아오도록
            sIndex = (sIndex + 1) % 26;

            // skip에 해당 없으면 count 증가, 해당하면 count 증가 안하고 다시 반복
            if (!skip.includes(alphabet[sIndex])) {
                count++;
            }
        }

        answer += alphabet[sIndex];
    }
    
    return answer;
}