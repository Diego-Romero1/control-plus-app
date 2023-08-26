import {
    buildOptionsAsJSON,
    clearCanvas, drawBackground,
    drawTicks, drawTextMarkers,
    drawSpeedometerColourArc, drawNeedle
} from './speedometer-creation.js'


var iCurrentSpeed = 20,
    iTargetSpeed = 40,
    bDecrement = null,
    job = null;


function draw() {
    /* Main entry point for drawing the speedometer
    * If canvas is not support alert the user.
    */

    console.log('Target: ' + iTargetSpeed);
    console.log('Current: ' + iCurrentSpeed);

    const canvasElement = document.querySelectorAll('.speedometer');
    var options = null;

    canvasElement.forEach(canvas => {

        // Canvas good?
        if (canvas !== null && canvas.getContext) {
            options = buildOptionsAsJSON(canvas, iCurrentSpeed);

            // Clear canvas
            clearCanvas(options);

            // Draw thw background
            drawBackground(options);

            // Draw tick marks
            drawTicks(options);

            // Draw labels on markers
            drawTextMarkers(options);

            // Draw speeometer colour arc
            drawSpeedometerColourArc(options);

            // Draw the needle and base
            drawNeedle(options);

        } else {
            alert("Canvas not supported by your browser!");
        }

        if (iTargetSpeed == iCurrentSpeed) {
            clearTimeout(job);
            return;
        } else if (iTargetSpeed < iCurrentSpeed) {
            bDecrement = true;
        } else if (iTargetSpeed > iCurrentSpeed) {
            bDecrement = false;
        }

        if (bDecrement) {
            if (iCurrentSpeed - 10 < iTargetSpeed)
                iCurrentSpeed = iCurrentSpeed - 1;
            else
                iCurrentSpeed = iCurrentSpeed - 5;
        } else {

            if (iCurrentSpeed + 10 > iTargetSpeed)
                iCurrentSpeed = iCurrentSpeed + 1;
            else
                iCurrentSpeed = iCurrentSpeed + 5;
        }

        job = setTimeout("draw()", 5);
    });
};

draw();