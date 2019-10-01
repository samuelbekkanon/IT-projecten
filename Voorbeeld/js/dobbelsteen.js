var btnDobbelsteen = document.getElementById("btnDobbelsteen");
var uitvoerDobbelsteen = document.getElementById("uitvoerDobbelsteen");

btnDobbelsteen.addEventListener("click", function(){
    let getal = getRandomInt(1,6);
    let image = document.createElement("img")
    if(getal === 1) {
    	image.src = "../img/dice1.jpg"
    }
    if (getal === 2) {
    	image.src = "../img/dice2.png"
    }
    if (getal === 3) {
    	image.src = "../img/dice3.png"
    }
    if (getal === 4) {
    	image.src = "../img/dice4.png"
    }
    if (getal === 5) {
    	image.src = "../img/dice5.png"
    }
    if (getal === 6) {
    	image.src = "../img/dice6.png"
    }
    uitvoerDobbelsteen.innerHTML = getal;
    uitvoerDobbelsteen.append(image);
});

function getRandomInt (min, max) {
    return Math.round(Math.random() * (max - min )+ min)  ;
}
