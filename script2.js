window.onload = function() {
    alert("Welcome");
    var sound = new Howl({
        src: ['intromusic.mp3']

    });
    sound.loop = false;
    sound.play();
}

function playclap() {
    var sound = new Howl({
        src: ['clap.mp3']
    });
    
    sound.play();

}

function playfail() {
    var sound = new Howl({
        src: ['fail.mp3']
    });

    sound.play();
}
