const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", tossCoin);
}

function tossCoin(e) {
    let img = document.getElementById('img');
    let para = document.createElement('p');
    let text;
    let div = document.querySelector(".mother");
    let playerGuess = e.target.innerText
    let computerToss = Math.floor(Math.random() * 2);
    let computerGuess = coinArray[computerToss];
    message.innerHTML = "Computer Selected " + computerGuess;
    let output;
    if (playerGuess === computerGuess) {
        output = " Player Win .";
        score[0]++;
    }
    else {
        output = " Computer Win .";
        score[1]++;
    }
    if (score[0] === 20) {
        text = document.createTextNode("The Winner of this game is the player");
        para.appendChild(text);
        div.appendChild(para);
        div.insertBefore(para, img);
        buttons[0].removeEventListener("click", tossCoin);
        buttons[1].removeEventListener("click", tossCoin);
    }
    else if (score[1] === 20) {
        text = document.createTextNode("The Winner of this game is the computer");
        para.appendChild(text);
        div.appendChild(para);
        div.insertBefore(para, img);
        para.style.color = "green";
        para.style.fontSize = "20px";
        buttons[0].removeEventListener("click", tossCoin);
        buttons[1].removeEventListener("click", tossCoin);
    }
    message.style.color = "yellow";
    message.innerHTML += output + "<br/> Player : " + score[0] + " Computer : " + score[1];

}