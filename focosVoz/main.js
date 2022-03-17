const texts = document.querySelector(".texts");
const fo1 = document.getElementById("F1");
const fo2 = document.getElementById("F2");
const fo3 = document.getElementById("F3");
const fo4 = document.getElementById("F4");
const fo5 = document.getElementById("F5");

  window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

recognition.addEventListener("result", (e) => {
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");
    
  console.log(text);
  if (e.results[0].isFinal) {
    if (text.includes("luz 1")) {
      fo1.style.background="URL(bulb_on.jpg)";
    }
    if (text.includes("apaga luz 1")) {
      fo1.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("luz 2")) {
      fo2.style.background ="URL(bulb_on.jpg)";
    }
    if (text.includes("apaga luz 2")) {
      fo2.style.background ="URL(bulb_off.jpg)";
    } 
    if (text.includes("luz 3")) {
      fo3.style.background ="URL(bulb_on.jpg)";
    }
    if (text.includes("apaga luz 3")) {
      fo3.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("luz 4")) {
      fo4.style.background ="URL(bulb_on.jpg)";
    }
    if (text.includes("apaga luz 4")) {
      fo4.style.background ="URL(bulb_off.jpg)";
    }
    if (text.includes("luz 5")) {
      fo5.style.background ="URL(bulb_on.jpg)";
    }
    if (text.includes("apaga luz 5")) {
      fo5.style.background ="URL(bulb_off.jpg)";
    }
    
  }
    //p = document.createElement("p");
});

  recognition.addEventListener("end", () => {
  recognition.start();
});

recognition.start();