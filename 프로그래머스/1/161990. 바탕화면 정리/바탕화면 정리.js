function solution(wallpaper) {
    let position = {
        lux : 50,
        luy : 50,
        rdx : 0,
        rdy : 0
    }
    
    for(let i = 0; i < wallpaper.length; i++){
        const leftUpY = i;
        const rightDownY = i + 1;
        for(let j = 0; j < wallpaper[i].length; j++){
            if(wallpaper[i][j] === '#'){
                const leftUpX = j;
                const rightDownX = j + 1;

                if (leftUpY < position.lux) {
                    position.lux = leftUpY;
                }
                if (rightDownY > position.rdx) {
                    position.rdx = rightDownY;
                }
                if (leftUpX < position.luy) {
                    position.luy = leftUpX;
                }
                if (rightDownX > position.rdy) {
                    position.rdy = rightDownX;
                }
            }
        }
    }
    return [position.lux, position.luy, position.rdx, position.rdy];
}