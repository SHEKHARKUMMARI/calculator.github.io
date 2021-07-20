let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let scrvalue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        //console.log(buttontext);
        if (buttontext == 'X') {
            buttontext = '*';
            scrvalue += buttontext;
            screen.value = scrvalue;
        } else if (buttontext == 'c') {
            screen.value = "";
            scrvalue = "";
        } else if (buttontext == '=') {
            scrvalue = eval(scrvalue);
            screen.value = scrvalue;
        } else {

            scrvalue += buttontext;
            screen.value = scrvalue;
        }
    })
}