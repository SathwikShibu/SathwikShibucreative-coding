var mic, fft;

function setup() {
    background(30, 30, 30); // Changed background color to a dark gray
    createCanvas(windowWidth, windowHeight); // Adjusted canvas size to fit window
    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT();
    fft.setInput(mic);
    noStroke();
}

function draw() {
    poz = [];
    centerX = width / 2;
    centerY = height / 2;
    translate(centerX, centerY);
    fill(50); // Changed shape background color to a lighter gray
    ellipse(0, 0, centerX * 2, centerY * 2); // Changed shape to an ellipse
    var spectrum = fft.analyze();
    for (it = 0; it < spectrum.length; it++) {
        freq = spectrum[it];
        fill(255);
        x = cos(it * it * it + freq / 200 * cos(it) + frameCount * sin(it) / 700) * centerX;
        y = sin(it * it + frameCount * cos(it) / 900 + freq / 200 * sin(it * 2)) * centerY;
        triangle(x, y, x + 2 + freq / 2, y + 2 + freq / 2, x + 2 + freq / 2, y); // Changed shape to a triangle
        poz.push([x, y, freq]);
    }
    for (lineId = 0; lineId < 0; lineId++) {
        src = random(poz);
        dest = random(poz);
        stroke(0, 0, 56 + cos(lineId + frameCount / 99) * 80);
        strokeWeight(8);
        if (src[2] > 30 && dest[2] > 30)
            line(src[0], src[1], dest[0], dest[1]);
        noStroke();
    }
}
