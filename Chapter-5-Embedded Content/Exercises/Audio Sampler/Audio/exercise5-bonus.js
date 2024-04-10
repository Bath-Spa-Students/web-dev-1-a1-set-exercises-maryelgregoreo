document.addEventListener("DOMContentLoaded", function() {

    // get the soundboard element and audio element from HTML
    var soundboard = document.getElementById("soundboard");
    var audio = document.getElementById("audio");

    // variable of the audios 
    var samplesData = [
        { name: "Ah-Ha", file: "ah-ha.mp3" },
        { name: "Back of the Net", file: "back-of-the-net.mp3" },
        { name: "Bang out of Order", file: "bangoutoforder.mp3" },
        { name: "Dan", file: "dan.mp3" },
        { name: "Email of the Evening", file: "emailoftheevening.mp3" },
        { name: "Hello Partridge", file: "hellopartridge.mp3" },
        { name: "I Ate a Scotch Egg", file: "iateascotchegg.mp3" },
        { name: "I'm Confused", file: "imconfused.mp3" }
    ];


    // goes through the audios to create a button for each one
    samplesData.forEach(sampleData => {
        var button = document.createElement("button");

        // sets the button name to the button
        button.textContent = sampleData.name;
        button.classList.add("sample-button");

        // event listener that has a function to play the audio when clicked
        button.addEventListener("click", function() {
            playAudio(sampleData.file);
        });
        soundboard.appendChild(button);
    });

    // function to play an audio file
    function playAudio(file) {
        audio.src = file;
        audio.play();
    }
});