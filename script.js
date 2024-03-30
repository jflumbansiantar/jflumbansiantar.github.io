function switchMode(t) {
    t.checked == true ? darkMode() : lightMode();
}

function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    let cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        const el = cards[i];
        el.style.backgroundColor = "black";
    }
}

function lightMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    let cards = document.getElementsByClassName("card")
    for (let i = 0; i < cards.length; i++) {
        const el = cards[i];
        el.style.backgroundColor = "white";
    }
}

function changeHere(el){
    console.log(true);
    const valueInput = document.getElementById('inputGroup-sizing-default').value;
    if (valueInput == "download") {
        console.log(valueInput, " Successfully downloaded the file");
    } else if (valueInput == "expires") {
        console.log(valueInput, "Nothing heer");

    } else if(valueInput == "experience") {
        console.log(valueInput, "Here is her experience");

    } else {
        console.log(valueInput);
    }
}