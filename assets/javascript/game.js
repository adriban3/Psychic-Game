var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var compLetter = Math.floor((Math.random()*letters.length) + 1);

document.onkeyup = game;

function game() {
    var key = String.fromCharCode(event.keyCode);
    console.log(key);
}