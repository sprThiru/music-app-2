song = "";

function preload()
{
    song = loadSound("music.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
}

function play()
{
    song.play();

}

function draw()
{
    image(video,0,0,600,500)
}

function modelLoaded()
{
    console.log('Model Loaded');
}


