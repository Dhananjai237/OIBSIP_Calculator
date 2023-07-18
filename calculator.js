const buttons = document.getElementsByTagName("button");

for (let button of buttons) {
    button.disabled = true;
    button.addEventListener('click', valuation);
};

const darkerButton = document.getElementsByClassName("darkerButton");
for(let button of darkerButton){
    button.removeEventListener('click',valuation);
};

const specialButton = document.getElementsByClassName("specialButton");
for(let button of specialButton){
    button.removeEventListener('click',valuation);
};

const button = document.getElementById("dark");
button.removeEventListener('click',valuation);

function input() {
    document.getElementById("input").value = "";
    for (let button of buttons) {
        button.disabled = false;
    };
}

function allClear() {
    document.getElementById("input").value = "0";
    for (let button of buttons) {
        button.disabled = true;
    };
}

function backSpace() {
    let initialValue = document.getElementById("input").value;
    if (initialValue.length == 1) {
        document.getElementById("input").value = "0";
    } else {
        let finalValue = initialValue.slice(0, initialValue.length - 1);
        document.getElementById("input").value = finalValue;
    }
}

function valuation() {
    document.getElementById("input").value += this.innerText;
}

function exponent() {
    document.getElementById("input").value += "2.71828183";
}

function pi() {
    document.getElementById("input").value += "3.14159265";
}

function enter() {
    document.getElementById("input").value = eval(document.getElementById("input").value);
}
