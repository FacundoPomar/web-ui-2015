var name = prompt("Please, enter your name after the bip");

window.onbeforeunload = confirmExit;
function confirmExit(){
    return "GoodBye " + name;
}

