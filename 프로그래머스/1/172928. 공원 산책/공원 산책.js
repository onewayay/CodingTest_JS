function solution(park, routes) {
    // 방향별 이동 거리 좌표
    const moving = {
      N: [-1, 0],
      S: [1, 0],
      W: [0, -1],
      E: [0, 1]
    };
    
    // 이동 가능 여부 (공원 바깥이나 X만날 경우 false)
    let canMove = true;
    
    // 시작 위치 좌표
    let y, x;
    
    for (let i = 0; i < park.length; i++) {
      for (let j = 0; j < park[i].length; j++) {
        if (park[i][j] === 'S') {
          y = i;
          x = j;
          break;
        }
      }
    }
    
    for(let i = 0; i < routes.length; i++){
        // dir은 이동할 방향, distance는 이동할 거리
        const [dir, len] = routes[i].split(' ');
        const distance = Number(len);
        
        // 방향에 따라 1회당 이동할 거리
        const dy = moving[dir][0];
        const dx = moving[dir][1];
        
        // canMove 초기화
        canMove = true;
        
        // distance 만큼 순회하며 계산
        for (let step = 1; step <= distance; step++) {
            const ny = y + dy * step;
            const nx = x + dx * step;

            // 공원 바깥으로 넘어가면
            if (ny < 0 || nx < 0 || ny >= park.length || nx >= park[0].length) {
              canMove = false;
              break;
            }

            // X를 만나면
            if (park[ny][nx] === 'X') {
              canMove = false;
              break;
            }
          }

        // 이동
        if (canMove) {
            y += dy * distance;
            x += dx * distance;
        }
     }
    
    return [y, x];
}