#! /usr/bin/env node

import inquirer from "inquirer";

const digits = await inquirer.prompt([{
    message : "Enter your First Digit :",
    type : 'number',
    name : "firstDigit",},
{
    message : "Enter your Second Digit :",
    type : "number",
    name : "secondDigit",},

{
    message : "Choose one of the operation to perform",
    type : "list",
    name : "operators",
    choices : ["+", "-", "*", "/", "^", "%", "Reminder"],
},

]);

if(digits.operators === "+" ){

    console.log(`Your Value Is : ${digits.firstDigit} + ${digits.secondDigit} =`, digits.firstDigit + digits.secondDigit);
}

else if(digits.operators === "-"){
    console.log(`Your Value Is : ${digits.firstDigit} - ${digits.secondDigit} =`, digits.firstDigit - digits.secondDigit);
}

else if(digits.operators === "*"){
    console.log(`Your Value Is : ${digits.firstDigit} * ${digits.secondDigit} =`, digits.firstDigit * digits.secondDigit);
}

else if(digits.operators === "/"){
    console.log(`Your Value Is : ${digits.firstDigit} / ${digits.secondDigit} =`, digits.firstDigit / digits.secondDigit);
}

else if(digits.operators === "^"){
    console.log(`Your Value Is : ${digits.firstDigit} ^ ${digits.secondDigit} =`, digits.firstDigit ** digits.secondDigit);
}

else if(digits.operators === "%"){
    console.log(`Your Value Is : ${digits.firstDigit} * ${digits.secondDigit} % =`, digits.firstDigit * digits.secondDigit / 100);
}

else if(digits.operators === "Reminder"){
    console.log(`Your Value Is : ${digits.firstDigit} Reminder ${digits.secondDigit} =`, digits.firstDigit % digits.secondDigit);
}

else{
    console.log("You have chooses a wrong operator.");
}