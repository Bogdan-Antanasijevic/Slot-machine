
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
    }
}
//MOVE SIGNS IN MIDDLE MAIN BOX
document.addEventListener('keyup',downArrow);
function downArrow(e) {
    e.preventDefault();
    if (e.keyCode === 40) {
        db.moveMiddle();
        db.startSpin();
    }
}

//MOVE SIGNS IN RIGHT MAIN BOX
document.addEventListener('keyup',rightArrow);
function rightArrow(e) {
    e.preventDefault();
    if (e.keyCode === 39) {
        db.moveRight();
        db.startSpin();
    }
}

