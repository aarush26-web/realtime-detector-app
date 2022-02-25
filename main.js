noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;




function setup() { 
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 410);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is intialized');
}


function gotPoses(results){
if (results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX" + noseX +"noseY" + noseY);

    rightWristX=results[0].pose.rightWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    difference= floor(rightWristX - leftWristY);

    console.log("rightWristX"+ rightWristX +"leftWristY"+ leftWristY);
}
}



function draw () {
background('#969A7');
fill('#F90093');
stroke('#F90093');
square(noseX, noseY, 100);
}

