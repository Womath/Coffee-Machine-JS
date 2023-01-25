// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

water = 400;
milk = 540;
beans = 120;
cups = 9;
money = 550;

menu();

function menu() {
    while(true) {
        let action = input("Write action (buy, fill, take, remaining, exit):").toLowerCase();

        switch (action) {
            case "buy":
                chooseCoffee();
                break;
            case "fill":
                fillMachine();
                break;
            case "take":
                takeMoney();
                break;
            case "remaining":
                printCoffeeMachineState();
                break;
            case "exit":
                return;
            default:
                console.log("Wrong input");
        }
    }
}

function chooseCoffee() {
    let action = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:");

    switch (action) {
        case "1":
            buyEspresso();
            break;
        case "2":
            buyLatte();
            break;
        case "3":
            buyCappuccino();
            break;
        case "back":
            return;
        default:
            console.log("Wrong input");
    }
}

function fillMachine() {
    addWater();
    addMilk();
    addBeans();
    addCups();
}

function printCoffeeMachineState() {
    console.log("The coffee machine has:");
    console.log(water + " ml of water");
    console.log(milk + " ml of milk");
    console.log(beans + " g of coffee beans");
    console.log(cups + " disposable cups");
    console.log("$" + money + " of money");
}

function hasEnoughIngredients(water, milk, beans, cups) {
    if (this.water < water) {
        console.log("Sorry, not enough water!");
        return false;
    }

    if (this.milk < milk) {
        console.log("Sorry, not enough milk!");
        return false;
    }

    if (this.beans < beans) {
        console.log("Sorry, not enough coffee beans!");
        return false;
    }

    if (this.cups < cups) {
        console.log("Sorry, not enough disposable cups!");
        return false;
    }

    return true;
}

function buyEspresso() {
    if (hasEnoughIngredients(250, 0, 16, 1)) {
        console.log("I have enough resources, making you a coffee!");
        changeResourcesInMachine(250, 0, 16, 1, 4);
    }
}

function buyLatte() {
    if (hasEnoughIngredients(350, 75, 20, 1)) {
        console.log("I have enough resources, making you a coffee!");
        changeResourcesInMachine(350, 75, 20, 1, 7);
    }
}

function buyCappuccino() {
    if (hasEnoughIngredients(200, 100, 12, 1)) {
        console.log("I have enough resources, making you a coffee!");
        changeResourcesInMachine(200, 100, 12, 1, 6);
    }
}

function changeResourcesInMachine(water, milk, beans, cups, money) {
    this.water -= water;
    this.milk -= milk;
    this.beans -= beans;
    this.cups -= cups;
    this.money += money;
}

function takeMoney() {
    console.log("I gave you $" + this.money);
    this.money = 0;
}

function addWater() {
    this.water += Number(input("Write how many ml of water the coffee machine has:"));
}

function addMilk() {
    this.milk += Number(input("Write how many ml of milk the coffee machine has:"));
}

function addBeans() {
    this.beans += Number(input("Write how many grams of coffee beans the coffee machine has:"));
}

function addCups() {
    this.cups += Number(input("Write how many disposable cups you want to add:"));
}
