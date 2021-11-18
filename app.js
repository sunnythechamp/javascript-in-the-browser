var btnTranslate = document.querySelector("#btn-event");
var txtInput = document.querySelector("#input-text")
var outputDiv = document.querySelector("#output-text")

// server url stored in placeholder
var serverURL = "https://api.funtranslations.com/translate/minion.json"

// adding event listener to button
btnTranslate.addEventListener("click", clickHandler)

function clickHandler() {
var inputText = txtInput.value;
outputDiv.innerText = "Translation in progress..." // message shown to client until we get translated value
fetch(getTranslationURL(inputText))
 .then(response => response.json())
  .then(json => {
    var translatedText = json.contents.translated
    outputDiv.innerText = translatedText
  })
  // error handling
   .catch(errorHandler) // calling a function

 };

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
  //? and something= are query parameters
}

function errorHandler(error) {
  console.log("error occured",error);
  alert("something is wrong with server! try again later")
}
