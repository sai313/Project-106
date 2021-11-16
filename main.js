//https://teachablemachine.withgoogle.com/models/96XWxC6LU/
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/96XWxC6LU/model.json",{ probabilityThreshold: 0.7 }
,    modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

var dog = 0;
var cat = 0;
var lion = 0;

function gotResult(error,result) {
    if(error) {
        console.error(error);
    } else {
        console.log(result);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_lbl").innerHTML="Animal - "+result[0].label;
        document.getElementById("result_count").innerHTML="Detected Dog - "+dog+" Detected Cat - "+cat+" Detected Lion - "+lion;
        document.getElementById("result_lbl").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_count").style.color="rgb("+r+","+g+","+b+")";

        img = document.getElementById("animal");
        if(result[0].label == "Dog") {
            img.src="dog.png";
            dog = dog + 1;
        } else if (result[0].label == "Cat") {
            img.src="Cat.gif";
            cat = cat + 1;
        } else if (result[0].label == "Lion") {
            img.src="lion.jpg";
            lion = lion + 1;
        }
    }
}