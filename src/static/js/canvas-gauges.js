const multipleCanvas = document.querySelectorAll(".canvas-gauge");

multipleCanvas.forEach((canvas) => {
    var gauge = new RadialGauge({
        renderTo: canvas,
        value: 0,
        width: 250,
        height: 250,
        // units: "Km/h",
        minValue: 0,
        maxValue: 100,
        startAngle: 90,
        ticksAngle: 180,
        valueBox: true,
        valueBoxStroke: 0,
        valueText: 100,
        majorTicks: [
            "0",
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "100"
        ],
        minorTicks: 2,
        strokeTicks: true,
        highlights: [
            {
                "from": 0,
                "to": 100,
                "color": "rgb(28,131,148)"
            }
        ],
        // colorPlate: "blue",
        borderShadowWidth: 0,
        borders: false,
        needleType: "arrow",
        needleWidth: 2,
        needleCircleSize: 7,
        needleCircleOuter: true,
        needleCircleInner: false,
        animationDuration: 1500,
        animationRule: "linear"
    });
    // setInterval((value) => {
    //     gauge.value = Math.random() * -100 + 100;
    // }, 1000)
    console.log(gauge)
    gauge.draw();
});


