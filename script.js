const text1 = "gcc -o welcome foo.c";
const text2 = "./welcome";
const text3 =
  "Hi there! My name is Antti. \n\nI'm a 24-year-old IT engineering student from Vaasa UAS.\n" +
  "Currently studying my second year with a focus on embedded systems.\n\nI'm really intrested in technology," +
  " especially in Linux operating systems,\n and C/C++ programming. Eager to learn and embrace new challenges.\n\n" +
  "Feel free to contact me through email, or the social medias linked down below!\n\nKind Regards\nAntti Pirinen";
const inputText = document.getElementById("inputText");
const inputText2 = document.getElementById("inputText2");
const prompt2 = document.getElementById("prompt2");
//constant holding textfield elements
const textField1 = document.getElementById("Q1");
//constants holding link elements
const linkElement1 = document.getElementById("link1");
const linkElement2 = document.getElementById("link2");
const linkElement3 = document.getElementById("email");

let counter = 0;

setTimeout(main, 1000);

function main() {
  if (counter === 0) {
    typeToPrompt(0, text1, inputText, 50);
  } else if (counter === 1) {
    showPromtLine();
    setTimeout(() => typeToPrompt(0, text2, inputText2, 50), 2000);
  } else if (counter === 2) {
    typeToPrompt(0, text3, textField1, 25);
  } else if (counter === 3) {
    typeToPrompt(0, "GitHub", linkElement1, 5);
  } else if (counter === 4) {
    typeToPrompt(0, "LinkedIn", linkElement2, 5);
  } else if (counter === 5) {
    typeToPrompt(0, "e2202869@edu.vamk.fi", linkElement3, 5);
  }
}

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

function clearElement() {
  inputText.innerHTML = "";
}

function showPromtLine() {
  prompt2.style.display = "flex";
}

const span = document.querySelector("span");

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
