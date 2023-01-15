const number = +Math.floor(Math.random() * 1000);
console.log(number);

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

const fs = require('fs');



async function writeToFile(message) {
    await fs.promises.appendFile("./log", message);

}



async function getUserInput() {
    let promise = new Promise(function (resolve, reject) {
        rl.question('Введите целое число или слово выход для выхода: ', (input) => {
            let number = input;
            resolve(number);
        });
    });
    return await promise;
}

async function game() {
    let count = 0;
    while (true) {
        let input = await getUserInput();
        let numberUser = input;

        if (numberUser === "выход") {
            console.log("Выходим");
            rl.close();
            return;
        }

        if (isNaN(numberUser) || numberUser < 0 || numberUser > 1000) {
            let message = `Нужно ввести целое положительное число от 0 до 1000, ваше чило ${numberUser}. Ваших попыток ${count}\n`;
            writeToFile(message);
            console.log(message);
            continue;
        }

        count++;

        if (number == numberUser) {
            let message = `Поздравляю вы угадали!!! Ваших попыток ${count}\n`;
            writeToFile(message);
            console.log(message);
            break;
        }

        if (number > numberUser) {
            let message = `Загаданное число больше ${numberUser}. Ваших попыток ${count}\n`;
            writeToFile(message);
            console.log(message);
        } else {
            let message = `Загадонное число меньше ${numberUser}. Ваших попыток ${count}\n`;
            writeToFile(message);
            console.log(message);
        }
    }
    rl.close();
}

game();