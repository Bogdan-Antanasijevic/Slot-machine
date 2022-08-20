
// SELECTORS
let headImg = document.querySelectorAll('.head-img');
let boxMiddle = document.querySelectorAll('.box-middle');
let boxRight = document.querySelectorAll('.box-right');

// METHODS
let startSpin = db.startSpin();

//MOVE SIGNS IN LEFT MAIN BOX
document.addEventListener('keyup',leftArrow);
function leftArrow(e) {
    e.preventDefault();
    if (e.keyCode === 37) {
        db.moveLeft();
        db.startSpin();
        db.checkLeftLines();
    }
}
//MOVE SIGNS IN MIDDLE MAIN BOX
document.addEventListener('keyup',downArrow);
function downArrow(e) {
    e.preventDefault();
    if (e.keyCode === 40) {
        db.moveMiddle();
        db.startSpin();
        db.checkMiddleLines();
    }
}

//MOVE SIGNS IN RIGHT MAIN BOX
document.addEventListener('keyup',rightArrow);
function rightArrow(e) {
    e.preventDefault();
    if (e.keyCode === 39) {
        db.moveRight();
        db.startSpin();
        db.checkRightLines();
    }
}

// BUY 1 MORE SPIN
document.addEventListener('keyup',buySpin);
function buySpin(e) {
    e.preventDefault();
    if (e.keyCode === 32) {
        db.buySpin();
    }
}
