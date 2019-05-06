const cv = require('opencv4nodejs');

const cap = new cv.VideoCapture(0);

const delay = 1;

setInterval(() => {

    let frame = cap.read();

    cv.imshow("facial landmarks detection", frame);
    cv.waitKey(delay);
}, 0);