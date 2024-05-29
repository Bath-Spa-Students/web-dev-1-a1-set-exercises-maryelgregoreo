var readButton=document.getElementById('readButton');
readButton.addEventListener('click',function(){

   var textToRead=document.getElementById('textToRead').value.trim();
   const speech=new SpeechSynthesisUtterance();
   speech.text=textToRead;
   speech.volume=20;
   speech.rate=5000;

   speechSynthesis.speak(speech);

});

var h1=document.queryselector("#heading");
var input=document.queryselector("#name");
