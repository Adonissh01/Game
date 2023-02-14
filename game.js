

const attack = document.getElementById("attack");
const message = document.getElementById("message");
const newgame = document.getElementById("newgame");
const buttons = document.getElementById("buttons");
const results = document.getElementById("results");
const giveUp = document.getElementById("give-up");
const MonsterPB = document.getElementById("monsterh1");
const Mcolor = document.getElementById("Mcolor");
const YourPB = document.getElementById("yourh1");
const Ycolor = document.getElementById("Ycolor");



giveup.addEventListener("click", function (event) {

    event.preventDefault();
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("message").innerHTML = "MONSTER WINS!";
    newgame.style.display = "inline";
    newgame.style.visibility = "visible";

});
function subtract(x,y) {
    return x-y;
}
    if (MprogressBar.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU WIN!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";

    }
    else if (YprogressBar.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU LOSE!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";
    }
    else if (YprogressBar.value === 0 && MprogressBar.value === 0) {
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "ITS A DRAW!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";
    }
const yourh = document.getElementById("yourh1");
const monsterh= document.getElementById("monsterh1");
const specialAttck= document.getElementById("special-attack");

specialAttck.addEventListener("click", function (event) {
    event.preventDefault();
    let damage1 = Math.random() * 100;
    let damage2 = Math.random() * 100;

   while(yourhealt ) if (damage1 < damage2) {

        monsterh -= damage2;
        yourh-= damage1;

        document.getElementById("results").innerHTML += "<p><span id='monsteee'>Monster</span> Sattacks and deals " + subtract(100, damage1) + "<p><span id='playeee'>Player</span> attacks and deals " + subtract(100, damage2);
    }
    else if (damage1 > damage2) {
        monsterh.value -= damage1;
        yourhealth.value -= damage2;

        document.getElementById("results").innerHTML += "<p><span id='monsteee'>Monster</span> Sattacks and deals " + subtract(100, random4) + "<p><span id='playeee'>Player</span> attacks and deals " + subtract(100, damage1);
    }


    if (monsterPB.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU WIN!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";

    }
    else if (yourPB.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU LOSE!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";
    }
    else if (yourPB.value === 0 && monsterPB.value === 0) {
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "ITS A DRAW!";
        newgame.style.display = "inline";
        newgame.style.visibility = "visible";
    }
});