function myFilter(array, callback) {
    let filterArr = []
    for(let item in array)
        if(callback(array[item]))
            filterArr.push(array[item]);
    
    return filterArr
}


const numbers = [1, 2, 3, 4, 5];

// Используем myFilter для фильтрации четных чисел
const evenNumbers = myFilter(numbers, (num)=> num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Фильтруем числа больше 3
const greaterThanThree = myFilter(numbers, (num)=> num > 3 );
console.log(greaterThanThree); // [4, 5]

// Фильтруем числа меньше 4
const lessThanFour = myFilter(numbers, (num)=> num < 4 );
console.log(lessThanFour); // [ 1, 2, 3 ]