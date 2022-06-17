const output = document.querySelector(".output");
const text = "Hello! Welcome to my auto write text page.";

let index = 0;

function writeText() {
  output.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length - 1) {
    index = 0;
  }
}

setInterval(writeText, 100);
