let max = 100
let min = 1
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min

console.log("Загаданное число: " + randomInt);

function secretNumber(left, right) {
    let middle = Math.floor(left + (right - left) / 2)
    console.log("Компьютер 2: Пробую число " + middle);

    if (middle < randomInt) {
        console.log("Компьютер 1: Больше.");
        secretNumber(middle + 1, right)
    }
    if (middle > randomInt) {
        console.log("Компьютер 1: Меньше.");
        secretNumber(left, middle - 1)
    }
    else {
        console.log("Компьютер 1: Угадал!");
        return
    }

}

secretNumber(min, max);

