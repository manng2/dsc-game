# dsc-game
This is a game use pose detection for my club at FPT University. Users can get scores by showing their poses like images (95% accuracy) on the screen.

## Description
I use a pre-trained ML model [pose estimation](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection) for detecting poses. In order to find poses similarity without doubt about distance, I convert coordinates into vectors and use the [cosine similarity in the Euclidean distance formula](https://medium.com/@cavaldovinos/human-pose-estimation-pose-similarity-dc8bf9f78556).

## Technical details
Javascript, TensorFlow.js

## Features
- Detecting user’s poses
- Estimating the accuracy of user’s poses
