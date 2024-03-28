#! /usr/bin/env node

import inquirer from "inquirer";

let balance = 30000
const accountNumber = 100200300

console.log (`your current account balance is ${balance}`);
console.log (`your account number is ${accountNumber}`);

let askdetail = await inquirer.prompt(
    [
        {name : "acc",
        type : "number",
        message : "enter your account number first..."

        
        }
    ]
);
if (askdetail.acc === accountNumber){
    console.log ("account number is correct");

    const accountType = await inquirer.prompt(
        [
            {
                message : "choose your account ",
                type : "list",
                name : "ask",
                choices:["Current Account", "Saving Account", "Pensioner Account"]
            }
        ]
    
        
    );
if ( accountType.ask === "Current Account"){
    console.log ("welcome to your account");
}
 else if (accountType.ask === "Saving Account"){
    console.log ("welcome to your account");
}
else if (accountType.ask === "Pensioner Account"){
    console.log ("welcome to your account");
}

let duff = await inquirer.prompt(
    [
        {
            message : "please choose one",
            name : "option",
            type:"list",
            choices: ["withdraw", "balance checking"]
        }
    ]
);
if (duff.option === "withdraw"){

    let amount = await inquirer.prompt(
        [
            {
                message : "enter your amount",
                name: "cash",
                type :"list",
                choices:["10000", "20000", "30000", "40000", "50000"]
            }
        ]
    );
if (amount.cash > balance){
    console.log ("insufficient balance");
}
else {

    let amountLeft = balance - amount.cash;
console.log (`your remaining balance is ${amountLeft}`);

}

} else if (duff.option === "balance checking"){
   
    console.log (`your current balance is ${balance}`);
}
} else {
      console.log ("insufficient balance");
}