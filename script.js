const monsterh1 = document.getElementById("monsterh1");
const yourh1 = document.getElementById("yourh1");
const heal = document.getElementById("heal");
const end = document.getElementById("give-up");
const startNewGame = document.getElementById("startNewGame");
const results = document.getElementById("results");
const message = document.getElementById("message");
const attack1 = document.getElementById("attack1");


function subtract(a, b) {
    
    return Math.floor(a- b);
}

//giveup
 end.addEventListener("click", function (){

   
     document.querySelector(".buttons").style.display = "none";
     document.getElementById("results").innerHTML = "MONSTER WINS!";
     startNewGame.style.display = "inline";
   startNewGame.style.visibility = "visible";
});





let count = 0;
let maxvalue = 100;

heal.addEventListener("click", function () {
    
    count++;
    let random3 = Math.random() * 100;

    if (yourh1.value < maxvalue && count < 3) {
        yourh1.value += random3;
        document.getElementById("results").innerHTML += "<p> Player is healed by " + Math.floor(random3);
    } else if (yourh1.value = maxvalue) {
        document.getElementById("results").innerHTML += " <p>You cannot use heal now";
        if (count >= 3) {

            heal.style.display = "none";
        }

    }

});

attack1.addEventListener("click", function () {
    
    let random1 = Math.random() * 100;
    monsterh1.value -= random1;
    let random2 = Math.random() * 100;
    yourh1.value -= random2;

    document.getElementById("results").innerHTML += "<p>Monster attacks and deals " + subtract(100, random1) + "<p>Player attacks and deals " + subtract(100, random2);


    if (monsterh1.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU WIN!";
        //start new game
        
        startNewGame.style.display = "inline";
        startNewGame.style.visibility = "visible";
        
        

    }
    else if (yourh1.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU LOSE!";
        //start new game
        
        startNewGame.style.display = "inline";
        startNewGame.style.visibility = "visible";
        
    }
    else if (yourh1.value === 0 && monsterh1.value === 0) {
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "ITS A DRAW!";
        
        startNewGame.style.display = "inline";
        startNewGame.style.visibility = "visible";
        
    }

});
startNewGame.addEventListener("click",function(){
location.reload();
})
function specialAttack( ){
    let ran1 = Math.random() *100;
    let ran2= Math.random() *100;
    while(ran1 > ran2){
        monsterh1.value-=ran1;
        yourh1.value-=ran2;}
        document.getElementById("results").innerHTML += "<p>Monster attacks and deals " + subtract(100, random1) + "<p>Player attacks and deals " + subtract(100, random2);


    if (monsterh1.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU WIN!";
        //start new game
        
        startNewGame.style.display = "inline";
        startNewGame.style.visibility = "visible";
        
        

    }
    else if (yourh1.value === 0) {

        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "YOU LOSE!";
        //start new game
        
        startNewGame.style.display = "inline";
        startNewGame.style.visibility = "visible";
        
    }
    else if (yourh1.value === 0 && monsterh1.value === 0) {
        document.querySelector(".buttons").style.display = "none";
        document.getElementById("message").innerHTML = "ITS A DRAW!";
        
        startNewGame.style.display = "inline";
        startNewGame.style.visibility = "visible";
    }

    

}
