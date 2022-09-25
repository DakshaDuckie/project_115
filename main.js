var nose_x = "";
var nose_y = "";

function preload(){

}

function setup(){
    canvas = createCanvas(400,350);
    canvas.center();
    img = createCapture(VIDEO);
    img.size(400,350);
    img.hide();

    poseNet = ml5.poseNet(img,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(img,0,0,400,350);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x = "+ nose_x + " and nose y = "+ nose_y);
    };
}

