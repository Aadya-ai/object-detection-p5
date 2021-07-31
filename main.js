img = "";
status = "";
objects = [];

function preload() {
    img = loadImage('hallroom.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected...";

            fill("#800080");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#800080");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function Kchat() {
    window.location.href = "https://aadya-ai.github.io/OBJECT_DETECTION_ON_IMAGES-Kchat/";
}

function Back() {
    window.location.href = "https://aadya-ai.github.io/object-detection-p1/";
}