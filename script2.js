window.onload = function() {
    alert("This website for children");
    var sound = new Howl({
        src: ['intromusic.mp3']

    });
    sound.loop = true;
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
