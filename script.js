const compileText = "gcc -o introduction foo.c";
const executeText = "./introduction";
const introText =
  "Hi there! My name is Antti. \n\nI'm a 24-year-old IT engineering student at Vaasa UAS.\n" +
  "I am currently in my second year, focusing on embedded systems.\n\nI'm really interested in technology," +
  " especially in Linux operating systems\n and C/C++ programming. Eager to learn and embrace new challenges.\n\n" +
  "Feel free to contact me through email, or the social medias linked down below!\n\nKind Regards,\nAntti Pirinen";
//constants holding "input" elements
const inputText = document.getElementById("inputText");
const inputText2 = document.getElementById("inputText2");
//constant holding element of the second "input" line of terminal
const line2 = document.getElementById("line2");
//constant holding textfield elements
const textField1 = document.getElementById("Q1");
//constants holding link elements
const linkElement1 = document.getElementById("link1");
const linkElement2 = document.getElementById("link2");
const linkElement3 = document.getElementById("email");
//const for the email queryselector
const span = document.querySelector("span");
//skip button element
const skipButton = document.getElementById("skip-button");

let counter = 0;
let skip = false;

setTimeout(setParameters, 1000);

// setting parameters for typeToTerminal
function setParameters() {
  if (!skip) {
    if (counter === 0) {
      typeToScreen(0, compileText, inputText, 50);
    } else if (counter === 1) {
      showSecondLine();
      setTimeout(() => typeToScreen(0, executeText, inputText2, 50), 1000);
    } else if (counter === 2) {
      typeToScreen(0, introText, textField1, 25);
    } else if (counter === 3) {
      typeToScreen(0, "GitHub", linkElement1, 5);
    } else if (counter === 4) {
      typeToScreen(0, "LinkedIn", linkElement2, 5);
    } else if (counter === 5) {
      typeToScreen(0, "pirinenao@proton.me", linkElement3, 5);
      skipButton.style.display = "none";
    }
  }
}

// function for the text typing
function typeToScreen(index, text, element, speed) {
  if (!skip) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(() => typeToScreen(index, text, element, speed), speed); // Adjust typing speed (milliseconds)

      if (index === text.length) {
        counter++;
        setTimeout(setParameters, 1000);
      }
    }
  }
}

// makes the second line appear
function showSecondLine() {
  line2.style.display = "flex";
}

//these are for copying the email address on click
span.onclick = function () {
  document.execCommand("copy");
};

span.addEventListener("copy", function (event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});

// for skip button
function skipTyping() {
  skip = true;
  inputText.innerHTML = compileText;
  showSecondLine();
  inputText2.innerHTML = executeText;
  textField1.innerHTML = introText;
  linkElement1.innerHTML = "GitHub";
  linkElement2.innerHTML = "LinkedIn";
  linkElement3.innerHTML = "pirinenao@proton.me";
  skipButton.style.display = "none";
}

// Find the element, and attach event listener
document.addEventListener("DOMContentLoaded", function () {
  var skipButton = document.querySelector(".skip-button");
  skipButton.addEventListener("click", skipTyping);
});
