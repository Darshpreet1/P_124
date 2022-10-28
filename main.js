    function preload(){

    }
    
    function setup(){
        Canvas = createCanvas(300,300);
        Canvas.center();
        video = createCapture(VIDEO);
        video.hide();
        posenet = ml5.poseNet(video ,modelloded);
        posenet.on("pose",Gotposes);
    }
    
    function draw(){
        image(video,0,0,300,300);
    }
    
    function take_snapshot(){
        save("filtered_image.jpg");
    }

    function modelloded(){
        console.log("modelloded");
    }

    function Gotposes(resultes)
    {
        if(resultes.length >0){
            console.log("poseNet is working");
            console.log(resultes)
            console.log("nose x = "+resultes[0].pose.nose.x);
            console.log("nose y = "+resultes[0].pose.nose.y);
        }
    }