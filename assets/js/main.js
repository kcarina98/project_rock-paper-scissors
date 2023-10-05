const satz = document.querySelector(".win-lose");
const nameOutput = document.querySelector(".you");
const nameInput = document.querySelector("#input-name");

const scissors = document.querySelector("#schere");
const rock = document.querySelector("#stein");
const paper = document.querySelector("#papier");

let clickCounter = 0;

const inputFn = () => {
  nameOutput.innerHTML = nameInput.value;
};

nameInput.addEventListener("input", inputFn);

//! Punktestand
let countYou = 0;
let countComp = 0;

let counter = document.querySelector("#punktestand");
counter.innerHTML = `${countYou} : ${countComp}`;

//! Punkte vergeben
// - wenn ich Schere wähle
scissors.addEventListener("click", () => {
  event.preventDefault;
  // Auswahl Computer
  const auswahlArray = ["Scissors", "Rock", "Paper"];
  const auswahl = ~~(Math.random() * auswahlArray.length);
  const compValue = auswahlArray[auswahl];

  if (nameInput.value === "") {
    window.alert("Bitte gib deinen Namen ein");
    document.querySelector("#you").innerHTML = "";
  } else {
    if (compValue == "Scissors") {
      document.querySelector("#computer").innerHTML = "✄";
    } else if (compValue == "Rock") {
      document.querySelector("#computer").innerHTML = "🪨";
    } else {
      document.querySelector("#computer").innerHTML = "📄";
    }

    document.querySelector("#you").innerHTML = "✄";

    if ("Scissors" === compValue) {
      countYou++;
      countComp++;
      counter.innerHTML = `${countYou} : ${countComp}`;
      satz.innerHTML = `You both choose scissors`;
      satz.style.color = "lightblue";
    } else {
      if (compValue === "Rock") {
        countComp++;
        counter.innerHTML = `${countYou} : ${countComp}`;
        satz.innerHTML = `${compValue} beats scissors. You lose!`;
        satz.style.color = "tomato";
      } else {
        countYou++;
        counter.innerHTML = `${countYou} : ${countComp}`;
        satz.innerHTML = `Scissors beats ${compValue}. You win!`;
        satz.style.color = "lightgreen";
      }
    }
  }
});

// -wenn ich Stein wähle
rock.addEventListener("click", () => {
  event.preventDefault;
  // Auswahl Computer
  const auswahlArray = ["Scissors", "Rock", "Paper"];
  const auswahl = ~~(Math.random() * auswahlArray.length);
  const compValue = auswahlArray[auswahl];

  if (nameInput.value === "") {
    window.alert("Bitte gib deinen Namen ein");
    document.querySelector("#you").innerHTML = "";
  } else {
    console.log(clickCounter);
    if (compValue == "Scissors") {
      document.querySelector("#computer").innerHTML = "✄";
    } else if (compValue == "Rock") {
      document.querySelector("#computer").innerHTML = "🪨";
    } else {
      document.querySelector("#computer").innerHTML = "📄";
    }

    document.querySelector("#you").innerHTML = "🪨";

    if ("Rock" === compValue) {
      countYou++;
      countComp++;
      counter.innerHTML = `${countYou} : ${countComp}`;
      satz.innerHTML = `You both choose rock`;
      satz.style.color = "lightblue";
    } else {
      if (compValue === "Paper") {
        countComp++;
        counter.innerHTML = `${countYou} : ${countComp}`;
        satz.innerHTML = `${compValue} beats rock. You lose!`;
        satz.style.color = "tomato";
      } else {
        countYou++;
        counter.innerHTML = `${countYou} : ${countComp}`;
        satz.innerHTML = `Rock beats ${compValue}. You win!`;
        satz.style.color = "lightgreen";
      }
    }
  }
});

// - wenn ich Papier wähle
paper.addEventListener("click", () => {
  event.preventDefault;
  // Auswahl Computer
  const auswahlArray = ["Scissors", "Rock", "Paper"];
  const auswahl = ~~(Math.random() * auswahlArray.length);
  const compValue = auswahlArray[auswahl];

  if (nameInput.value === "") {
    document.querySelector("#you").innerHTML = "";
    window.alert("Bitte gib deinen Namen ein");
  } else {
    if (compValue == "Scissors") {
      document.querySelector("#computer").innerHTML = "✄";
    } else if (compValue == "Rock") {
      document.querySelector("#computer").innerHTML = "🪨";
    } else {
      document.querySelector("#computer").innerHTML = "📄";
    }

    document.querySelector("#you").innerHTML = "📄";

    if ("Paper" === compValue) {
      countYou++;
      countComp++;
      counter.innerHTML = `${countYou} : ${countComp}`;
      satz.innerHTML = `You both choose paper`;
      satz.style.color = "lightblue";
    } else {
      if (compValue === "Scissors") {
        countComp++;
        counter.innerHTML = `${countYou} : ${countComp}`;
        satz.innerHTML = `${compValue} beats paper. You lose!`;
        satz.style.color = "tomato";
      } else {
        countYou++;
        counter.innerHTML = `${countYou} : ${countComp}`;
        satz.innerHTML = `Paper beats ${compValue}. You win!`;
        satz.style.color = "lightgreen";
      }
    }
  }
});

//! Click-Zähler für die Runden

function clicks() {
  // clickCounter++;

  let five = document.querySelector("#fünf").checked;
  let ten = document.querySelector("#zehn").checked;
  let fifteen = document.querySelector("#fünfzehn").checked;
  let twenty = document.querySelector("#zwanzig").checked;

  if (nameInput.value === "") {
    clickCounter = 0;
    console.log("geht nicht");
  } else {
    clickCounter++;
    console.log("zählt");
    if (clickCounter > 4 && five === true) {
      if (countYou > countComp) {
        //- neues Fenster öffnet sich
        let timeOut = setTimeout(function () {
          window.open("./assets/html/win.html");
        }, 800);
      } else if (countYou < countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/loser.html");
        }, 800);
      } else {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/draw.html");
        }, 800);
      }
    } else if (clickCounter > 9 && ten === true) {
      if (countYou > countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/win.html");
        }, 800);
      } else if (countYou < countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/loser.html");
        }, 800);
      } else {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/draw.html");
        }, 800);
      }
    } else if (clickCounter > 14 && fifteen === true) {
      if (countYou > countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/win.html");
        }, 800);
      } else if (countYou < countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/loser.html");
        }, 800);
      } else {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/draw.html");
        }, 800);
      }
    } else if (clickCounter > 19 && twenty === true) {
      if (countYou > countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/win.html");
        }, 800);
      } else if (countYou < countComp) {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/loser.html");
        }, 800);
      } else {
        let timeOut = setTimeout(function () {
          window.open("./assets/html/draw.html");
        }, 800);
      }
    }
  }
}
