var btnevent = document.querySelector("#btn-event");
var inputText = document.querySelector("#input-text");
var outputText = document.querySelector("#output-text");

 var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function urlBack(text) {
    return serverUrl + "?" + "text=" + text;
}
function errorhandler(error){
    console.log('If there is error',error);
}
function add() {
    var inpuText = inputText.value;
    fetch(urlBack(inpuText))
        .then(response => response.json())
        .then(json => {
            var TransText = json.contents.translated;
             outputText.innerText = TransText.value;
        })
        .catch(errorhandler)
    
        
};


btnevent.addEventListener('click', add)







