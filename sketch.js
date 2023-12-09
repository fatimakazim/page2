function preload() {
    img1 = loadImage("landscape1.png");
    img2 = loadImage("landscape2.png");
    img3 = loadImage("landscape3.png");
    img4 = loadImage("landscape4.png");
    img5 = loadImage("landscape5.png");
    img6 = loadImage("landscape6.png");
}


let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let canvasSize = 500;
let scrollSpeed1 = 2;
let scrollSpeed2 = 5;
let scrollSpeed3 = 1;
let scrollSpeed4 = 4;
let scrollSpeed5 = 3;
let scrollSpeed6 = 7;
let repetitions = 10;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;
let x3 = 0;
let y3 = 0;
let x4 = 0;
let y4 = 0;
let x5 = 0;
let y5 = 0;
let x6 = 0;
let y6 = 0;
let northButton, southButton, eastButton, westButton;



function setup() {
    createCanvas(windowWidth, windowHeight);

    northButton = createButton('Explore Valleys');
    styleButton(northButton);
    northButton.size(200, 40);
    northButton.position(width / 2 - northButton.width / 2, 10);
    northButton.mousePressed(goToWebsiteNorth);

    southButton = createButton('Explore Meadows');
    styleButton(southButton);
    southButton.size(200, 40);
    southButton.position(width / 2 - southButton.width / 2, height - 50);
    southButton.mousePressed(goToWebsiteSouth);

    eastButton = createButton('Explore Culture');
    styleButton(eastButton);
    eastButton.size(200, 40);
    eastButton.position(width - 220, height / 2 - eastButton.height / 2);
    eastButton.mousePressed(goToWebsiteEast);

    westButton = createButton('Explore Wildlife');
    styleButton(westButton);
    westButton.size(200, 40);
    westButton.position(20, height / 2 - westButton.height / 2);
    westButton.mousePressed(goToWebsiteWest);
}
function styleButton(button) {
    // 
}


function styleButton(button) {
    button.style('background-color', '#254726CC'); /* background color */
    button.style('color', '#fff'); /* Text color */
    button.style('padding', '15px 30px'); /* padding  */
    button.style('font-size', '1em'); /* font size  */
    button.style('border', 'none');
    button.style('border-radius', '10px'); /* Rounded corners */
    button.style('cursor', 'pointer');
    button.style('transition', 'background-color 0.3s ease'); /* Smooth transition effect */
}

function draw() {
    background(220);

    // Adjust scroll speed based on mouse position for img1
    let scrollSpeedX1 = map(mouseX, 0, width, scrollSpeed1, -scrollSpeed1);
    let scrollSpeedY1 = map(mouseY, 0, height, scrollSpeed1, -scrollSpeed1);
    x1 -= scrollSpeedX1;
    y1 -= scrollSpeedY1;

    //  scrolling collage for img1
    push();
    translate(x1, y1);
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
            let sx1 = img1.width;
            let sy1 = img1.height;
            let spacing = 100; // Adjust the spacing between repetitions
            image(img1, i * (sx1 + spacing), j * (sy1 + spacing), sx1, sy1);
        }
    }
    pop();

    // scroll speed based on mouse position for img2
    let scrollSpeedX2 = map(mouseX, 0, width, scrollSpeed2, -scrollSpeed2);
    let scrollSpeedY2 = map(mouseY, 0, height, scrollSpeed2, -scrollSpeed2);
    x2 -= scrollSpeedX2;
    y2 -= scrollSpeedY2;

    // Draw the scrolling collage for img2
    push();
    translate(x2, y2);
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
            let sx2 = img2.width;
            let sy2 = img2.height;
            let spacing = 100; //  the spacing between repetitions
      image(img2, i * (sx2 + spacing), j * (sy2 + spacing), sx2, sy2);
        }
    }
    pop();

    // Adjust scroll speed based on mouse position for img3
    let scrollSpeedX3 = map(mouseX, 0, width, scrollSpeed3, -scrollSpeed3);
    let scrollSpeedY3 = map(mouseY, 0, height, scrollSpeed3, -scrollSpeed3);
    x3 -= scrollSpeedX3;
    y3 -= scrollSpeedY3;

    // the scrolling collage for img3
    push();
    translate(x3, y3);
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
            let sx3 = img3.width;
            let sy3 = img3.height;
            let spacing = 100; // the spacing between repetitions
      image(img3, i * (sx3 + spacing), j * (sy3 + spacing), sx3, sy3);
        }
    }
    pop();

    // scroll speed based on mouse position for img4
    let scrollSpeedX4 = map(mouseX, 0, width, scrollSpeed4, -scrollSpeed4);
    let scrollSpeedY4 = map(mouseY, 0, height, scrollSpeed4, -scrollSpeed4);
    x4 -= scrollSpeedX4;
    y4 -= scrollSpeedY4;

    // the scrolling collage for img4
    push();
    translate(x4, y4);
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
            let sx4 = img4.width;
            let sy4 = img4.height;
            let spacing = 100; // the spacing between repetitions
      image(img4, i * (sx4 + spacing), j * (sy4 + spacing), sx4, sy4);
        }
    }
    pop();

    //  scroll speed based on mouse position for img5
    let scrollSpeedX5 = map(mouseX, 0, width, scrollSpeed5, -scrollSpeed5);
    let scrollSpeedY5 = map(mouseY, 0, height, scrollSpeed5, -scrollSpeed5);
    x5 -= scrollSpeedX5;
    y5 -= scrollSpeedY5;

    //  the scrolling collage for img5
    push();
    translate(x5, y5);
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
            let sx5 = img5.width;
            let sy5 = img5.height;
            let spacing = 100; // Adjust the spacing between repetitions
      image(img5, i * (sx5 + spacing), j * (sy5 + spacing), sx5, sy5);
        }
    }
    pop();

    //  scroll speed based on mouse position for img6
    let scrollSpeedX6 = map(mouseX, 0, width, scrollSpeed6, -scrollSpeed6);
    let scrollSpeedY6 = map(mouseY, 0, height, scrollSpeed6, -scrollSpeed6);
    x6 -= scrollSpeedX6;
    y6 -= scrollSpeedY6;

    //  the scrolling collage for img6
    push();
    translate(x6, y6);
    for (let i = 0; i < repetitions; i++) {
        for (let j = 0; j < repetitions; j++) {
            let sx6 = img6.width;
            let sy6 = img6.height;
            let spacing = 100; //  the spacing between repetitions
      image(img6, i * (sx6 + spacing), j * (sy6 + spacing), sx6, sy6);
        }
    }
    pop();
}

// Functions to go to different websites when the buttons are pressed
function goToWebsiteNorth() {
    window.location.href = "https://fatimakazim.github.io/valley-page/";
    
   
}

function goToWebsiteSouth() {
    window.location.href = "https://fatimakazim.github.io/meadow.page/";
}

function goToWebsiteEast() {
    window.location.href = 'https://fatimakazim.github.io/culture.page/';
}

function goToWebsiteWest() {
    window.location.href = 'https://fatimakazim.github.io/wildlife.page/';
}  
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}