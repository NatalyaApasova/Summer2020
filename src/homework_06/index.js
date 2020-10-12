1.
function selectDirectDivsQuery() {
  return document.querySelectorAll("div>div");
}

function selectDirectDivsTag() {
  const divs = document.getElementsByTagName("div");
  const children = [];
  for(let div of divs) {
    if (div.parentElement.tagName === "DIV") {
      children.push(div);
    }
  }
  return children;
}

2.
function inputInConsol() {
  const div = document.createElement("div");
  document.body.append(div);
  
  const textInput = document.createElement("input");
  textInput.id = "consol-print";
  textInput.type = "text";
  div.append(textInput);
  textInput.addEventListener("input", () => {
    console.log(textInput.value);
  })
}
inputInConsol()

3.
function changeColorOnInput() {
  const div = document.createElement("div");
  document.body.append(div);
  
  const colorInput = document.createElement("input");
  colorInput.id = "color-on-input";
  colorInput.type = "color";
  div.append(colorInput);
  colorInput.addEventListener("input", () => {
    document.body.style.backgroundColor = colorInput.value;
  })
}
changeColorOnInput()

4.
const buttonFour = document.getElementById("task-four");

function getRandomPosition(element) {
  let x = document.body.offsetHeight - element.clientHeight;
  let y = document.body.offsetWidth - element.clientWidth;
  let randomX = Math.floor(Math.random() * x);
  let randomY = Math.floor(Math.random() * y);
  return [randomX,randomY];
}

function divsWithRandomParams() {
  const divs = [];
  const mainDiv = document.createElement("div");
  mainDiv.style.height = 100 + "vh";
  buttonFour.after(mainDiv);

  const min = 5;
  const max = 10;
  let rand = Math.floor(Math.random() * (max - min)) + min;

  for (let i = 0; i <= rand; i++) {
    const minWidthHeight = 20;
    const maxWidthHeight = 100;
    let randomWidthHeight = Math.floor(Math.random() * (maxWidthHeight - minWidthHeight)) + minWidthHeight;
    
    const minBorderWidth = 1;
    const maxBorderWidth = 20;
    let randomBorderWidth = (Math.floor(Math.random() * (maxBorderWidth - minBorderWidth)) + minBorderWidth) + "px";    

    let randomBgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let randomFontColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    let randomBorderColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    divs[i] = document.createElement("div");
    const textElem = document.createElement("b");
    textElem.textContent = `div`;
    divs[i].append(textElem);
    divs[i].style.width = randomWidthHeight + "px";
    divs[i].style.height = randomWidthHeight + "px";
    divs[i].style.position = "absolute";
    divs[i].style.borderWidth = randomBorderWidth;
    divs[i].style.borderStyle = "solid";
    divs[i].style.borderColor = randomBorderColor;
    divs[i].style.borderRadius = Math.floor(Math.random() * 100) + "px";
    divs[i].style.backgroundColor = randomBgColor;
    divs[i].style.color = randomFontColor;
    mainDiv.append(divs[i]);
    let xy = getRandomPosition(divs[i]);
    divs[i].style.top = xy[0] + 'px';
    divs[i].style.left = xy[1] + 'px';
  }
    console.log(divs)
}

buttonFour.addEventListener("click", divsWithRandomParams, false);

5.
const buttonFive = document.getElementById("task-five");

function divsCircle() {
  const mainDiv = document.createElement("div");
  mainDiv.style.width = 400 + "px";
  mainDiv.style.height = 400 + "px";
  mainDiv.style.borderRadius = 50 + "%";
  mainDiv.style.position = "relative";
  mainDiv.classList.add("circle");
  buttonFive.after(mainDiv);
  const divs = [];
  for (let i = 0; i < 5; i++) {
    let randomBgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    divs[i] = document.createElement("div");
    divs[i].style.width = 40 + "px";
    divs[i].style.height = 40 + "px";
    divs[i].style.position = "relative";
    divs[i].style.top += 50 + "px";
    divs[i].style.bottom = 50 + "%";
    divs[i].style.left = 50 + "%";
    divs[i].style.backgroundColor = randomBgColor;
    divs[i].classList.add("circle");
    mainDiv.append(divs[i]);
  }
}

buttonFive.addEventListener("click", divsCircle, false);

6.
function changeTextareaColors() {
  const textAreaDiv = document.createElement("div");
  document.body.append(textAreaDiv);
  const colorsDiv = document.createElement("div");
  document.body.append(colorsDiv);
  
  const textArea = document.createElement("textArea");
  textArea.id = "text-area";
  textAreaDiv.append(textArea);

  const fontColor = document.createElement("input");
  fontColor.id = "font-color-on-input";
  fontColor.type = "color";
  colorsDiv.append(fontColor);

  const textAreaColor = document.createElement("input");
  textAreaColor.id = "textarea-color-on-input";
  textAreaColor.type = "color";
  colorsDiv.append(textAreaColor);

  fontColor.addEventListener("input", () => {
    textArea.style.color = fontColor.value;
  })
  textAreaColor.addEventListener("input", () => {
    textArea.style.backgroundColor = textAreaColor.value;
  })
}
changeTextareaColors()

7.

const buttonSeven = document.getElementById("task-seven");

function createTagField(tags, minFont, maxFont) {
  const container = document.createElement("div");
  container.style.width = 500 + "px";
  container.style.height = 100 + "%";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.borderWidth = 1 + "px";
  container.style.borderStyle = "solid";
  container.style.borderColor = "#" + 000;
  buttonSeven.after(container);
  const cloud = [];
  const counters = [];
  tags.sort();
  counter = 1;
  tags.forEach((el) => {
    let cloudEl = cloud.find((tag) => tag === el);
    if (el !== cloudEl) {
      if (tags.indexOf(el) !== 0){
        counters.push(counter)
      };
      cloud.push(el);
      counter = 1;
    } else if (el !== tags[tags.indexOf(el - 1)]) {
      counter++;
    }
  })

  cloud.forEach((tag) => {
    const textNode = document.createTextNode(tag + "\u00A0");
    const span = document.createElement("span");
    let fontSize = (minFont * counters[cloud.indexOf(tag)]) + "px";
    span.style.fontSize = fontSize;
    if (span.style.fontSize > maxFont) {
      span.style.fontSize = maxFont;
    }
    span.append(textNode);
    container.append(span);
  })
}

const createField = function() {
  return createTagField(["DOM", "HTML", "tag", "CSS", "CSS", "tag", "DOM",
    "JS", "animation", "CSS", "JS", "JS", "HTML", "DOM", "DOM", "style", "DOM", "JS", "type"], 24, 72)
}

buttonSeven.addEventListener("click", createField, false);
