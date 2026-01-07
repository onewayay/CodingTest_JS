function solution(players, callings) {
    const rank = {};
    
    players.forEach((p, i) => rank[p] = i);

    for (const name of callings) {
        const i = rank[name];
        const front = players[i - 1];

        players[i - 1] = name;
        players[i] = front;

        rank[name] = i - 1;
        rank[front] = i;
    }

    return players;
}
