
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btns = document.querySelectorAll(".btn");

const yourChoice = document.querySelector("#yourChoice");
const pcChoice = document.querySelector("#pcChoice");

const resultMsg = document.querySelector("#resultmsg")

let yourScore = document.querySelector("#yourscore");
let pcScore = document.querySelector("#pcscore");

let yourInitalScore = 1;
let pcInitalScore = 1;


function winnerVerify() {
  if(yourScore.textContent == 20) {
    alert(`Você de ganhou de ${yourScore.textContent} à ${yourScore.textContent}`)
    location.reload()
  } else if (pcScore.textContent == 20) {
    alert(`O computador ganhou de ${pcScore.textContent} à ${yourScore.textContent}`)
    location.reload()
  }
}

function verify() {
 if( yourScore.textContent > pcScore.textContent) {
  yourScore.style.color = 'green'
  pcScore.style.color = 'red'
 }  else if (yourScore.textContent < pcScore.textContent) {
  yourScore.style.color = 'red'
  pcScore.style.color = 'green'
 } else {
  yourScore.style.color = 'gold'
  pcScore.style.color = 'gold'
 }
}



const data = ["Pedra", "Papel", "Tesoura"];

function winVerify() {
  if (yourChoice.innerText === pcChoice.innerText) {
    resultMsg.innerText = 'Empate'
  } else if (
    (yourChoice.innerText === "Pedra" && pcChoice.innerText === "Tesoura") ||
    (yourChoice.innerText === "Papel" && pcChoice.innerText === "Pedra") ||
    (yourChoice.innerText === "Tesoura" && pcChoice.innerText === "Papel")
  ) {
    yourScore.innerText = yourInitalScore++;
    resultMsg.innerText = 'Você ganhou'
  } else {
    pcScore.innerText = pcInitalScore++;
    resultMsg.innerText = 'O computador ganhou'
  }
}

function getRandomElement() {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
}

btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    yourChoice.innerText = btn.textContent
    pcChoice.innerText = getRandomElement();    
    winVerify();
    verify()
    winnerVerify()
  });
});
