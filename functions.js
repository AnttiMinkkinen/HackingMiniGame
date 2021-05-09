// delete and write, old
function typewrite(message) {
  let wait = deletetext();
  write(message, wait);
}

let isWriting = false;
// write
function write(message, wait = 0) {
  setTimeout(function () {
    for (let i = 0; i < message.length; i++) {
      setTimeout(function () {
        document.getElementById("text").innerHTML += message[i];
      }, i * 60);
    }
  }, wait);
}

// delete and return time
function deletetext() {
  let length = document.getElementById("text").innerHTML.length;
  let text = document.getElementById("text").innerHTML;
  for (let i = 0; i < length; i++) {
    setTimeout(function () {
      document.getElementById("text").innerHTML = text.slice(0, -1 * i - 1);
    }, i * 20);
  }
  return length * 20;
}

// show front page
function frontPage() {
  document.getElementById("root").innerHTML = `
    <div id="page_background">
        <div id="initiate_wrapper">
            <div id="initiate_header">CONSOLE READY</div>
            <div id="initiate_text">CLICK TO</div>
            <div id="initiate_hacking">INITIATE HACKING SEQUENCE</div>
        </div>
    </div>
  `;
  document.getElementById("initiate_wrapper").addEventListener("click", start);
}

// open background
function start() {
  document.getElementById("root").requestFullscreen();
  document.getElementById("page_background").innerHTML = `
    <div id="game_area_layer1">
      <div id="game_area_layer2">
      </div>
    </div>
    `;

  setTimeout(function () {
    document.getElementById("game_area_layer2").innerHTML = `
        <div id="header_area">
            CONSOLE&#8209;COM&nbspINDUSTRIES&reg;&nbsp;&nbsp; CONSOLE&nbspMODEL&nbspC&#8209;4     
        </div>

        <div id="text_area">
            
        </div>
        <div id="writing_area">
            > <div id="text"></div><div id="blink">&#9608</div>
        </div>
`;

    initiationAnimation();
  }, 1000);
}

// add text to body
function addText(externalMessage, wait = 0, TargetArea = "text_area") {
  setTimeout(function () {
    let child = document.createElement("div");
    let message = "";
    if (externalMessage) {
      message = externalMessage;
    } else {
      message = document.getElementById("text").innerHTML;
    }
    document.getElementById("text").innerHTML = "";
    child.className = "text";
    child.innerHTML = message;

    document.getElementById(TargetArea).prepend(child);
  }, wait);
}

// animation
function initiationAnimation() {
  let message = "INITIALIZE CONSOLEHACKER.EXE";
  write(message, 500);
  addText(null, 2600);

  message = "USERNAME: ADMIN";
  write(message, 2900);
  addText(null, 4100);

  message = "PASSWORD: ";
  write(message, 4500);
  addText(null, 5700);

  message = "HACKING LEVEL: EASY";
  write(message, 6300);
  setTimeout(function () {
    let text = document.getElementById("text").innerHTML;
    for (let i = 0; i < 3; i++) {
      setTimeout(function () {
        document.getElementById("text").innerHTML = text.slice(0, -1 * i - 1);
      }, i * 300);
    }
  }, 8300);

  message = "XTREME";
  write(message, 9300);
  addText(null, 10300);

  message = "RUN CONSOLEHACKER.EXE";
  write(message, 10500);
  addText(null, 12300);

  message = "<br>HACKING IN PROGRESS:  0%<br><br>";
  addText(message, 12500);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 7%<br><br>";
  }, 13350);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 12%<br><br>";
  }, 13450);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 23%<br><br>";
  }, 13550);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 34%<br><br>";
  }, 13650);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 41%<br><br>";
  }, 13750);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 60%<br><br>";
  }, 13850);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 78%<br><br>";
  }, 13950);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 86%<br><br>";
  }, 14050);

  setTimeout(function () {
    document.getElementById("text_area").firstChild.innerHTML =
      "<br>HACKING IN PROGRESS: 100%<br>READY<br><br>";
  }, 14150);

  message = "SECURITIES BYPASSED";
  addText(message, 14600);

  message = "DATASTRUCTURE FRACTURED";
  addText(message, 14700);

  message = "SHOWING COLLECTED DATA";
  addText(message, 14800);

  setTimeout(function () {
    document.getElementById("text_area").innerHTML = `
    <div id="fracment_area_footer">

    </div>

    <div id="fracment_area_body">

    </div>

    <div id="fracment_area_header">
      COLLECTED FRACTURED DATASET:
    </div>
    `;
  }, 14850);

  setTimeout(fillFracmentAreaBody, 14900);
  message = '<div class="fracment clickable">Fracment</div> ';

  setTimeout(function () {
    document.getElementById("writing_area").innerHTML += `
      <div id="exe">.EXE</div>
    `;

    document.getElementById("exe").addEventListener("click", function () {
      write(this.innerHTML);
      enterCode();
    });
    window.addEventListener("orientationchange", fillFracmentAreaBody);
  }, 15000);

  setTimeout(function () {
    document
      .getElementById("header_area")
      .addEventListener("click", fillFracmentAreaBody);
  }, 15000); //remove this
}

//add fracment
function addFracment(message, wait = 0) {
  setTimeout(function () {
    document.getElementById("fracment_area_body").innerHTML += message;
  }, wait);
}

//fill whole fracment area
function fillFracmentAreaBody() {
  setTimeout(function () {
    let height = document.getElementById("fracment_area_body").clientHeight;
    let width = document.getElementById("fracment_area_body").clientWidth;
    let lineLenght = Math.floor(width / 8);
    let lineCount = Math.floor(height / 16);
    let emptyLines = lineCount - 9;
    document.getElementById("fracment_area_body").innerHTML = "";

    if (emptyLines >= 4) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 27) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 31) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("CT", Math.floor(lineLenght * 0.05), lineLenght);
    if (emptyLines >= 1) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 13) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 22) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("AU", Math.floor(lineLenght * 0.75), lineLenght);
    if (emptyLines >= 6) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 21) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 24) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("SEV", Math.floor(lineLenght * 0.2), lineLenght);
    if (emptyLines >= 14) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 5) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 30) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("ENV", Math.floor(lineLenght * 0.5), lineLenght);
    if (emptyLines >= 12) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 8) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 25) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("OR", Math.floor(lineLenght * 0.9), lineLenght);
    if (emptyLines >= 16) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 9) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 20) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("LT", Math.floor(lineLenght * 0.35), lineLenght);
    if (emptyLines >= 15) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 2) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 19) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("OP", Math.floor(lineLenght * 0.8), lineLenght);
    if (emptyLines >= 10) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 17) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 26) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("CLO", Math.floor(lineLenght * 0.15), lineLenght);
    if (emptyLines >= 7) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 23) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 29) {
      addFracmentLine("", 0, lineLenght);
    }
    addFracmentLine("DO", Math.floor(lineLenght * 0.7), lineLenght);
    if (emptyLines >= 18) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 3) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 11) {
      addFracmentLine("", 0, lineLenght);
    }
    if (emptyLines >= 28) {
      addFracmentLine("", 0, lineLenght);
    }
  }, 10);

  setTimeout(addClickableListeners, 20);
}

//one fracmentline
function addFracmentLine(fracment, spacing, lineLenght) {
  if (fracment) {
    addFracment(
      `<div class="text">${returnRandomLetters(spacing)}</div>` +
        `<div class="clickable">${fracment}</div>` +
        `<div class="text">${returnRandomLetters(
          lineLenght - spacing - fracment.length
        )}</div>`
    );
  } else {
    addFracment(`<div class="text">${returnRandomLetters(lineLenght)}</div>`);
  }
}

//return random letters
function returnRandomLetters(number) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let returningString = "";
  for (i = 0; i < number; i++) {
    returningString += letters[Math.floor(Math.random() * 26)];
  }
  return returningString;
}

//add listeners
function addClickableListeners() {
  let clickables = document.getElementsByClassName("clickable");
  for (clickable of clickables) {
    clickable.addEventListener("click", function () {
      write(this.innerHTML);
    });
  }
}

let triesLeft = 2;

function enterCode() {
  setTimeout(function () {
    let message = document.getElementById("text").innerHTML;
    document.getElementById("text").innerHTML = "";
    if (message === "OPENVAULTDOOR.EXE") {
      addText(message, 0, "fracment_area_footer");
      message = "VAULT DOOR OPENING";
      addText(message, 500, "fracment_area_footer");
      message = "TERMINATING CONSOLE CONNECTION";
      addText(message, 1600, "fracment_area_footer");
      endGame();
    } else if (message === "CLOSEVAULTDOOR.EXE") {
      addText(message, 0, "fracment_area_footer");
      message = "VAULT DOOR ALREADY CLOSED";
      addText(message, 500, "fracment_area_footer");
      message = "TERMINATING CONSOLE CONNECTION";
      addText(message, 1600, "fracment_area_footer");
      endGame();
    } else {
      message += ` : CMD ERR:${triesLeft}`;
      addText(message, 0, "fracment_area_footer");
      triesLeft -= 1;
      if (triesLeft < 0) {
        message = "TERMINATING CONSOLE CONNECTION";
        addText(message, 500, "fracment_area_footer");
        endGame();
      }
    }
  }, 400);
}

function endGame() {
  setTimeout(function () {
    document.getElementById("text_area").innerHTML = "";
  }, 1500);
  setTimeout(function () {
    document.getElementById("game_area_layer2").innerHTML = "";
  }, 2500);
  setTimeout(function () {
    document.getElementById("game_area_layer2").style.animationName = "close";
  }, 2500);
}
