var nameBtn=document.getElementById ('nameAlert');
var nameInput=document.getElementById ('name')
nameBtn.addEventListener ('click', function(){
    
    if(nameInput.value=""){
    alert('Please enter a name');
}
else {
    alert (nameInput.value);
}


});


var heading=document.querySelector ('#heading');
var red_btn=document.querySelector ('#red-btn');
var blue_btn=document.querySelector ('#blue-btn');
 red_btn.addEventListener ("click", ()=>{
    heading.style.color = 'red';
 });
 blue_btn.addEventListener ("click", ()=>{
    heading.style.color = 'blue';
 });


 var readButton=document.getElementById('readButton');
 readButton.addEventListener('click',function(){

    var textToRead=document.getElementById('textToRead').value.trim();
    const speech=new SpeechSynthesisUtterance();
    speech.text=textToRead;
    speech.volume=20;
    speech.rate=9;

    speechSynthesis.speak(speech);

 });

