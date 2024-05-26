noseX = 0;
noseY = 0;


function preload(){
    picture = loadImage("mustache.png");
}

function draw(){
    image(video,0,0,450,400);
}

function setup(){
    canvas = createCanvas(450,400);
    canvas.position(350,350);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(450,400);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Model is initialized");
}

function save(){
    video.save();
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        console.log("Nose X: "+ results[0].pose.nose.x);
        console.log("Nose Y: "+ results[0].pose.nose.y);
    }
}