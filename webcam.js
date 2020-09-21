// import thằng so sánh vào nè
import { Compare } from './compare';

var array_point = [];
var p = document.createElement("p");

// chạy
async function run() {
    let picture = webcam.snap();
    var image = new Image();
    image.src = picture;

    await posenet.load({
        architecture: 'ResNet50',
        outputStride: 32,
        inputResolution: { width: 257, height: 200 },
        quantBytes: 2
    }).then(function (net) {
        const pose = net.estimateSinglePose(image, {
            flipHorizontal: true
        });
        return pose;
    })
        .then(function (pose) {
            // in ra các key points
            console.log(pose)
            for (let i = 0; i < pose.keypoints.length * 2; i = i + 2) {
                array_point[i] = pose.keypoints[i / 2].position.x;
                array_point[i + 1] = pose.keypoints[i / 2].position.y;
            }
            // in ra so sánh mà ko import vào được :<
            console.log(Compare(array_point, array_point))
        })
}
var myVar = setInterval(run, 5000);