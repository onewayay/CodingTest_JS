function solution(money) {
    const coffee = Math.floor(money / 5500);
    const change = money % 5500;
    
    return [coffee, change];
}