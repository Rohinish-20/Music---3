sound_hey = " ";
sound_dreams = " ";

leftWrist_x = 0;
leftWrist_y = 0;

rightWrist_x = 0;
rightWrist_y = 0;

function preload()
{
 sound_hey = loadSound("hey.mp3");
 sound_dreams = loadSound("dreams.mp3");
}

function setup()
{
 canvas = createCanvas(500, 500);
 canvas.center();

 video = createCapture(VIDEO);
 video.hide();

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on("pose", gotPoses);
}

function draw()
{
 image(video, 0, 0, 600, 500);
}

function modelLoaded()
{
 console.log("Model is loaded");
}

function gotPoses(results)
{
 if(results.length > 0);
 {
  console.log(results);

  leftWrist_x = results[0].pose.leftWrist.x;
  leftWrist_y = results[0].pose.leftWrist.y;
  console.log("Left wrist x = "+ leftWrist_x +"Left wrist y = "+ leftWrist_y);

  rightWrist_x = results[0].pose.rightWrist.x;
  rightWrist_y = results[0].pose.rightWrist.y;
  console.log("Right wrist x = "+ rightWrist_x +"Right wrist y = "+ rightWrist_y);
 }
}