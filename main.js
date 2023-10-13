song="";
song2="";

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video= createCapture(VIDEO);
    video.hide();

}

function preload(){
    song=loadSong('music.mp3');
    song=loadSong('music2.mp3');
}

function draw(){
    image(video,0,0,600,500);
}