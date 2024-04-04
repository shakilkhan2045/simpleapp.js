const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Want to convert Temperature!!!!");
let count = 0;

app();

function app() {
    starting();

    function starting() {
        console.log("Enter your choice :");
        rl.question(" 1. Fahrenheit to Celsius . \n 2. Celsius to Fahrenheit . \n Choose: ", (choose) => {
            if (choose == 1) {
                rl.question("Enter the temperature in Fahrenheit : ", (fahrenheit) => {
                    if (!isNaN(parseFloat(fahrenheit))) {
                        console.log("Now the temperature in Celsius is : " + toCelsius(parseFloat(fahrenheit)).toFixed(2) + "°C");
                        again();
                    } else {
                        console.log("NOT A VALID TEMPERATURE ENTERED");
                        starting();
                    }
                });
            } else if (choose == 2) {
                rl.question("Enter the temperature in Celsius : ", (celsius) => {
                    if (!isNaN(parseFloat(celsius))) {
                        console.log("Now the temperature in Fahrenheit is : " + toFahrenheit(parseFloat(celsius)).toFixed(2) + "°F");
                        again();
                    } else {
                        console.log("NOT A VALID TEMPERATURE ENTERED");
                        starting();
                    }
                });
            } else if (choose > 2) {
                console.log("Not a valid option");
                count++;
                if (count == 3) {
                    exiting();
                } else {
                    starting();
                }
            }
        });
    }

    function toCelsius(fahrenheit) {
        return (5 / 9) * (fahrenheit - 32);
    }

    function toFahrenheit(celsius) {
        return ((celsius * 9 / 5) + 32);
    }

    function exiting() {
        console.log("Too many wrong attempts. Exiting...");
        rl.close();
        process.exit(0);
    }

    function again() {
        rl.question("Want to start again? Press 'Y' to start again or press any other key to exit: ", (answer) => {
            if (answer.toLowerCase() === 'y') {
                starting();
            } else {
                console.log("------Thanks for using the temperature converter------");
                rl.close();
                process.exit(0);
            }
        });
    }
}
