const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const number = +Math.floor(Math.random() * 1000);
console.log(number);
let count = 0;

const fs = require('fs');


function log(data) {
    fs.writeFile('./log', data, { flag: 'a+' }, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
    console.log(data) //файл записан успешно
}


function game() {

    rl.question(`Введите целое число или слово 'выход' для выхода: `, (input) => {
        let numberUser = input;

        if (numberUser === "выход") {
            log("Выходим");
            rl.close();
            return;
        }

        if (isNaN(numberUser) || numberUser < 0 || numberUser > 1000) {
            log(`Нужно ввести целое положительное число от 0 до 1000, ваше чило ${numberUser}. Ваших попыток ${count}\n`);
            game();
            return;
        }
        count++;

        if (number == numberUser) {
            log(`Поздравляю вы угадали!!! Ваших попыток ${count}\n`);
            rl.close();
            return;
        }

        if (number > numberUser) {
            log(`Загаданное число больше ${numberUser}. Ваших попыток ${count}\n`);
        } else {
            log(`Загадонное число меньше ${numberUser}. Ваших попыток ${count}\n`);
        }
        game();
    });
}

game()