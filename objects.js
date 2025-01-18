let obj = {
    0: 10, 
    1: 15, 
    2: 4,
    3: 9,
    4: 33
}

function sumObjectMeanings(obj){
    let sum = 0;
    for(let item in obj)
        sum += obj[item]

    return sum
}

console.log(sumObjectMeanings(obj));

let difficultObj = {
    name: 'Vasya', 
    friends: 5, 
    likes: 19, 
    projects: 7
}

function arrKey(obj){
    return Object.keys(obj).sort().reverse()
}

console.log(arrKey(difficultObj));
