const fakeDataJson = {
  "status": "success",
  "data": [
    {
      "id": "1",
      "employee_name": "Tiger Nixon",
      "employee_salary": "320800",
      "employee_age": "61",
      "profile_image": ""
    },
    {
      "id": "2",
      "employee_name": "Garrett Winters",
      "employee_salary": "170750",
      "employee_age": "63",
      "profile_image": ""
    },
    {
      "id": "3",
      "employee_name": "Ashton Cox",
      "employee_salary": "86000",
      "employee_age": "66",
      "profile_image": ""
    },
    {
      "id": "4",
      "employee_name": "Cedric Kelly",
      "employee_salary": "433060",
      "employee_age": "22",
      "profile_image": ""
    },
    {
      "id": "5",
      "employee_name": "Airi Satou",
      "employee_salary": "162700",
      "employee_age": "33",
      "profile_image": ""
    },
    {
      "id": "6",
      "employee_name": "Brielle Williamson",
      "employee_salary": "372000",
      "employee_age": "61",
      "profile_image": ""
    },
    {
      "id": "7",
      "employee_name": "Herrod Chandler",
      "employee_salary": "137500",
      "employee_age": "59",
      "profile_image": ""
    },
    {
      "id": "8",
      "employee_name": "Rhona Davidson",
      "employee_salary": "327900",
      "employee_age": "55",
      "profile_image": ""
    },
    {
      "id": "9",
      "employee_name": "Colleen Hurst",
      "employee_salary": "205500",
      "employee_age": "39",
      "profile_image": ""
    },
    {
      "id": "10",
      "employee_name": "Sonya Frost",
      "employee_salary": "103600",
      "employee_age": "23",
      "profile_image": ""
    },
    {
      "id": "11",
      "employee_name": "Jena Gaines",
      "employee_salary": "90560",
      "employee_age": "30",
      "profile_image": ""
    },
    {
      "id": "12",
      "employee_name": "Quinn Flynn",
      "employee_salary": "342000",
      "employee_age": "22",
      "profile_image": ""
    },
    {
      "id": "13",
      "employee_name": "Charde Marshall",
      "employee_salary": "470600",
      "employee_age": "36",
      "profile_image": ""
    },
    {
      "id": "14",
      "employee_name": "Haley Kennedy",
      "employee_salary": "313500",
      "employee_age": "43",
      "profile_image": ""
    },
    {
      "id": "15",
      "employee_name": "Tatyana Fitzpatrick",
      "employee_salary": "385750",
      "employee_age": "19",
      "profile_image": ""
    },
    {
      "id": "16",
      "employee_name": "Michael Silva",
      "employee_salary": "198500",
      "employee_age": "66",
      "profile_image": ""
    },
    {
      "id": "17",
      "employee_name": "Paul Byrd",
      "employee_salary": "725000",
      "employee_age": "64",
      "profile_image": ""
    },
    {
      "id": "18",
      "employee_name": "Gloria Little",
      "employee_salary": "237500",
      "employee_age": "59",
      "profile_image": ""
    },
    {
      "id": "19",
      "employee_name": "Bradley Greer",
      "employee_salary": "132000",
      "employee_age": "41",
      "profile_image": ""
    },
    {
      "id": "20",
      "employee_name": "Dai Rios",
      "employee_salary": "217500",
      "employee_age": "35",
      "profile_image": ""
    },
    {
      "id": "21",
      "employee_name": "Jenette Caldwell",
      "employee_salary": "345000",
      "employee_age": "30",
      "profile_image": ""
    },
    {
      "id": "22",
      "employee_name": "Yuri Berry",
      "employee_salary": "675000",
      "employee_age": "40",
      "profile_image": ""
    },
    {
      "id": "23",
      "employee_name": "Caesar Vance",
      "employee_salary": "106450",
      "employee_age": "21",
      "profile_image": ""
    },
    {
      "id": "24",
      "employee_name": "Doris Wilder",
      "employee_salary": "85600",
      "employee_age": "23",
      "profile_image": ""
    }
  ]
}

1.
const div = document.createElement("div");

const textInput = document.createElement("input");
textInput.type = "text";
textInput.value = "data";
textInput.id = "dataText";
textInput.style.width = 500 + "px";
textInput.style.height = 40 + "px";

const numberInput = document.createElement("input");
numberInput.type = "number";
numberInput.value = "3";
numberInput.id = "secondsInput";
numberInput.placeholder = "seconds";

const button = document.createElement("button");
button.innerHTML = "click";
button.style.width = 100 + "px";
button.style.height = 20 + "px";

div.append(numberInput);
div.append(button);

document.body.append(textInput);
document.body.append(div);

1.1
function alertData() {
  const dataText = document.getElementById("dataText");
  alert(dataText.value);
}

const handleButtonClickCallback = function() {
  const secondsInput = document.getElementById("secondsInput");
  let sec = +secondsInput.value * 1000;
  setTimeout(alertData, sec);
}

button.addEventListener('click', handleButtonClickCallback);

1.2
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

const handleButtonClickPromise = function() {
  const secondsInput = document.getElementById("secondsInput");
  const dataText = document.getElementById("dataText");
  
  let sec = +secondsInput.value * 1000;

  delay(sec)
    .then(() => {
      alert(dataText.value)
    });
}

button.addEventListener('click', handleButtonClickPromise);

1.3
const handleButtonClickAsync = async function() {
  const secondsInput = document.getElementById("secondsInput");
  const dataText = document.getElementById("dataText");
  let sec = +secondsInput.value * 1000;
  
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataText.value)
    }, sec)
  });

  let result = await promise;

  alert(result)
}

button.addEventListener('click', handleButtonClickAsync);

2.
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

async function httpGet(url, data) {
  let randSec = Math.floor(getRandom(0, 3)) * 1000;
  let random;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      random = getRandom(0, 2);
      if (random >= 1) {
        resolve(data);
      } else {
        reject("Unsuccess data call."); 
      }
    }, randSec)
  });
  let result = await promise;
  return result;
}

3.
const dataDiv = document.createElement("div");

const dataButton = document.createElement("button");
dataButton.style.marginTop = 100 + "px";
dataButton.innerHTML = "Get data";
dataButton.style.width = 100 + "px";
dataButton.style.height = 20 + "px";

document.body.append(dataButton);
document.body.append(dataDiv);

function getData(url, fakeData) {
  fakeData = fakeDataJson;

  Array.from(dataDiv.childNodes).forEach((child) => {
    child.remove();
  });

  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  httpGet(url, fakeData)
    .then((result) => {
      let jsonResult = JSON.stringify(result);
      return JSON.parse(jsonResult);
    })
    .then((res) => {
      res.data.map((item) => {
        const itemDiv = document.createElement("div");
        const p = document.createElement("p");
        Object.values(item).forEach((val) => {
          const textNode = document.createTextNode(`${val}\u00A0`);
          p.append(textNode);
          itemDiv.append(p);
          dataDiv.append(itemDiv);
        });
      });
    })
    .catch((err) => {
      const errorDiv = document.createElement("div");
      const errMessage = document.createTextNode(`Error! ${err} Try again`);
      errorDiv.append(errMessage);      
      dataDiv.append(errorDiv);
      return new Error(err);
    })
    .finally(() => {
      spinner.style.display = "none";
    });
}

dataButton.addEventListener("click", getData);
