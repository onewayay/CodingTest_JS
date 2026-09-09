function solution(arr) {
    let smallNum = arr[0];
    arr.forEach((num, i)=>{
        if(smallNum > num){
            smallNum = num;
        }
    })
    
    const smallNumIndex = arr.findIndex((num) => num === smallNum); 
    arr.splice(smallNumIndex, 1);
    
    return arr.length ? arr : [-1];
}