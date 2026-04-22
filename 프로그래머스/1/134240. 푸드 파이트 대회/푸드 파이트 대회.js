function solution(food) {
    let setting = [0];
    
    for(let i = food.length - 1; i >= 1; i--){  // 역순으로 순회
        const foodCount = Math.floor(food[i] / 2);
        const add = Array(foodCount).fill(i);
        setting = [...add, ...setting, ...add];  // 스프레드로 앞뒤에 추가
    }
    
    return setting.join("");
}