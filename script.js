const compile = "gcc -o welcome foo.c";
const execute = "./welcome";
const introText =
  "Hi there! My name is Antti. \n\nI'm a 24-year-old IT engineering student at Vaasa UAS.\n" +
  "I am currently in my second year, focusing on embedded systems.\n\nI'm really interested in technology," +
  " especially in Linux operating systems\n and C/C++ programming. Eager to learn and embrace new challenges.\n\n" +
  "Feel free to contact me through email, or the social medias linked down below!\n\nKind Regards,\nAntti Pirinen";
//constants holding "input" elements
const inputText = document.getElementById("inputText");
const inputText2 = document.getElementById("inputText2");
//constant holding element of the second "input" line
const prompt2 = document.getElementById("prompt2");
//constant holding textfield elements
const textField1 = document.getElementById("Q1");
//constants holding link elements
const linkElement1 = document.getElementById("link1");
const linkElement2 = document.getElementById("link2");
const linkElement3 = document.getElementById("email");
//const for the email queryselector
const span = document.querySelector("span");

let counter = 0;

setTimeout(main, 1000);

function main() {
  if (counter === 0) {
    typeToPrompt(0, compile, inputText, 50);
  } else if (counter === 1) {
    showPromtLine();
    setTimeout(() => typeToPrompt(0, execute, inputText2, 50), 1000);
  } else if (counter === 2) {
    typeToPrompt(0, introText, textField1, 25);
  } else if (counter === 3) {
    typeToPrompt(0, "GitHub", linkElement1, 5);
  } else if (counter === 4) {
    typeToPrompt(0, "LinkedIn", linkElement2, 5);
  } else if (counter === 5) {
    typeToPrompt(0, "pirinenao@proton.me", linkElement3, 5);
  }
}

//function for the text typing
function typeToPrompt(index, text, element, speed) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(() => typeToPrompt(index, text, element, speed), speed); // Adjust typing speed (milliseconds)

    if (index === text.length) {
      counter++;
      setTimeout(main, 1000);
    }
  }
}

//makes the second line visible after the first input
function showPromtLine() {
  prompt2.style.display = "flex";
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
