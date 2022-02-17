// Target all the elements first
const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoText = inputPart.querySelector(".info-text"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");

inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
});

// function requestApi(city){
//     api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=your_api_key`;
//     fetchData();
// }


function requestApi(city){
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`;
}