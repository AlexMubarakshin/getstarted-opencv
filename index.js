const cv = require('opencv4nodejs');

const cap = new cv.VideoCapture(0);
const delay = 1;
const numDetectionsTh = 10;

const classifier = new cv.CascadeClassifier(cv.HAAR_FRONTALFACE_ALT2);

setInterval(() => {

    let frame = cap.read();


    const { objects, numDetections } = classifier.detectMultiScale(frame.bgrToGray());
    objects.forEach((rect, i) => {
        const thickness = numDetections[i] < numDetectionsTh ? 1 : 2;

        if (rect) {
            frame.drawRectangle(rect, new cv.Vec3(0, 255, 0), thickness, cv.LINE_8);
            cv.drawTextBox(frame, { x: rect.x, y: rect.y }, [{ text: "Kek" }], 1)
        }
    });

    cv.imshow("Alex's experiments", frame);
    cv.waitKey(delay);
}, 0);