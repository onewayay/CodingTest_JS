function solution(n, control) {
    let result = n;
    for(let i = 0; i < control.length; i++){
        switch(control[i]){
            case 'w': result += 1;
                break;
            case 's': result -= 1;
                break;
            case 'd': result += 10;
                break;
            case 'a': result -= 10;
                break;
        }
    }
    return result;   
}