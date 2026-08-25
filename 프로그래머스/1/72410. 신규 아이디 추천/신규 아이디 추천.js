function solution(new_id) {
    // 1단게: 대문자 -> 소문자
    const lowerId = new_id.toLowerCase();
    
    // 2딘계: 소문자, 숫자, 빼기, 밑줄, 마침표 외의 모든 문자 제거
    const cleanedId = lowerId.replace(/[^a-z0-9._-]/g, '');
    
    // 3단계: 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    const dotId = cleanedId.split('.').filter(s => s !== '').join('.');
    
    // 4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거
    let sliceDotId = dotId
    if(sliceDotId.startsWith('.')) sliceDotId = dotId.slice(1);
    if(sliceDotId.endsWith('.')) sliceDotId = dotId.slice(0, -1);
    
    // 5단계: 빈 문자열이라면 a 대입
    if(sliceDotId.length === 0) sliceDotId += 'a';
    
    // 6단계: 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    // 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거
    let lengthId;
    let lengthDotId;
    
    lengthId = sliceDotId.length >= 16 ? sliceDotId.slice(0, 15) : sliceDotId;
    lengthDotId = lengthId.endsWith('.') ? lengthId.slice(0, -1) : lengthId;
    
    // 7단계: 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙인다
    const str = lengthDotId[lengthDotId.length - 1];
    
    while(lengthDotId.length < 3){
        lengthDotId += str;
    }
    const answer = lengthDotId;
    
    return answer;
}