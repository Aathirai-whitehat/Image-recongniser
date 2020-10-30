Webcam.set({
    width:300,
    height:300,
    image_format:'jpg',
    png_quality:90,

    constraints:{
        facingMode: "enviroment"
    }
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML=`<img id='image' src=${data_uri}>`
    });

}

console.log("ml5 version= ",ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelloaded);

function modelloaded(){
    console.log("modelloaded");
}

function identify(){
    img= document.getElementById('image');
    classifier.classify(img,gotresult);
}

function gotresult(error,results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        document.getElementById("object name").innerHTML=results[0].label;
    }
}