function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    const user = db.find(([userId]) => userId === id);
    
    if (!user) return 'fail';
    
    return user[1] === pw ? 'login' : 'wrong pw';
}