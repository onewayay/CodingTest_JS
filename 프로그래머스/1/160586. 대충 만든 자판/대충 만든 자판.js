function solution(keymap, targets) {
    let pressCount = [];
    
    let minimum = {}
    
    for(let i = 0; i < keymap.length; i++){
        for(let j = 0; j < keymap[i].length; j++){
            const alphabet = keymap[i][j];
            if (
              minimum[alphabet] === undefined ||
              minimum[alphabet] > j + 1
            ) {
              minimum[alphabet] = j + 1;
            }
        }
    }
    
    for (let i = 0; i < targets.length; i++) {
        let count = 0;

        for (let j = 0; j < targets[i].length; j++) {
          const targetAlphabet = targets[i][j];

          if (minimum[targetAlphabet] === undefined) {
            count = -1;
            break;
          }

          count += minimum[targetAlphabet];
        }

        pressCount.push(count);
    }
    
    
    return pressCount;
}