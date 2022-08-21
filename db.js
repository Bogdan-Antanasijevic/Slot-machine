class Db {
    images;
    box;
    result = 0;
    arr = [];
    pointsArr = [];
    finalSum = [];
    constructor(images, result, arr, pointsArr, finalSum) {
        this.arr = [];
        this.images = images;
        this.result = 0;
        this.pointsArr = [];
        this.finalSum = [];        
    }



    // GIVES FIRST 3 SIGNS IN TOP BOXES
    startSpin() {
        headImg.forEach(img => {
            let rand = Math.floor(Math.random() * images.length);
            img.setAttribute('src', images[rand].src);
            this.arr.push(rand);
            // this.pointsArr.push(this.images[rand].points)
            // console.log(this.pointsArr);
        });
    };

    // BUY ONE MORE SPIN
    buySpin() {
        this.arr = [];
        headImg.forEach(img => {
            let rand = Math.floor(Math.random() * images.length);
            img.setAttribute('src', images[rand].src);
            this.arr.push(rand);
        });
    }

    //MOVE SIGNS IN LEFT MAIN BOX
    moveLeft() {
        let i = 0;
        db.startSpin();
        let boxesLeft = document.querySelectorAll('.box-left');
        let columns = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];
        columns.forEach(column => {
            let box1 = boxesLeft[column[0]];
            let box2 = boxesLeft[column[1]];
            let box3 = boxesLeft[column[2]];

            let text = `
            <img src="images/${this.arr[i]}.png" alt = "images/${this.arr[i]}.png" data-points = ${this.images[this.arr[i]].points}></img>
            `

            i++;

            if (!box1.innerHTML == "" && !box2.innerHTML == "") {
                document.removeEventListener('keyup', leftArrow)
            }
            if (box1.innerHTML == "") {
                box1.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
            if (!box1.innerHTML == "" && box2.innerHTML == "") {
                box2.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
            if (!box1.innerHTML == "" && !box2.innerHTML == "" && box3.innerHTML == "") {
                box3.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }

        })
    }


    //MOVE SIGNS IN MIDDLE MAIN BOX
    moveMiddle() {
        let i = 0;
        db.startSpin();
        let boxesMiddle = document.querySelectorAll('.box-middle');
        let columns = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];
        columns.forEach(column => {
            let box1 = boxesMiddle[column[0]];
            let box2 = boxesMiddle[column[1]];
            let box3 = boxesMiddle[column[2]];

            let text = `
            <img src="images/${this.arr[i]}.png" alt = "images/${this.arr[i]}.png" data-points = ${this.images[this.arr[i]].points}></img>
            `
            i++;

            if (!box1.innerHTML == "" && !box2.innerHTML == "") {
                document.removeEventListener('keyup', downArrow)
            }
            if (box1.innerHTML == "") {
                box1.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
            if (!box1.innerHTML == "" && box2.innerHTML == "") {
                box2.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
            if (!box1.innerHTML == "" && !box2.innerHTML == "" && box3.innerHTML == "") {
                box3.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }

        })
    }

    //MOVE SIGNS IN RIGHT MAIN BOX
    moveRight() {
        let i = 0;
        db.startSpin();
        let boxesRight = document.querySelectorAll('.box-right');
        let columns = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ];
        columns.forEach(column => {
            let box1 = boxesRight[column[0]];
            let box2 = boxesRight[column[1]];
            let box3 = boxesRight[column[2]];

            let text = `
            <img src="images/${this.arr[i]}.png" alt = "images/${this.arr[i]}.png" data-points = ${this.images[this.arr[i]].points}></img>
            `
            i++;

            if (!box1.innerHTML == "" && !box2.innerHTML == "") {
                document.removeEventListener('keyup', rightArrow)
            }
            if (box1.innerHTML == "") {
                box1.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
            if (!box1.innerHTML == "" && box2.innerHTML == "") {
                box2.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
            if (!box1.innerHTML == "" && !box2.innerHTML == "" && box3.innerHTML == "") {
                box3.innerHTML = text;

                if (i > 2) {
                    this.arr = [];
                }
                return;
            }
        })
    }

    // CHECK WIN IN LEFT MAIN BOX
    checkLeftLines() {
        let boxesLeft = document.querySelectorAll('.box-left');
        let resultBoxLeft = document.querySelector('.result-box-left');
        let lines = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        lines.forEach(line => {
            let line1 = boxesLeft[line[0]];
            let line2 = boxesLeft[line[1]];
            let line3 = boxesLeft[line[2]];

            if (line1.childNodes[1].alt == line2.childNodes[1].alt && line1.childNodes[1].alt == line3.childNodes[1].alt && !line1.childNodes[1].alt == "") {
                line1.style.border = "5px solid green"
                line2.style.border = "5px solid green"
                line3.style.border = "5px solid green"

                sumPoints(this.finalSum);
                this.finalSumPoints();

            }                        

            function sumPoints(finalSum) {
                let num1 = parseInt(line1.childNodes[1].attributes[2].nodeValue)
                let num2 = parseInt(line2.childNodes[1].attributes[2].nodeValue)
                let num3 = parseInt(line3.childNodes[1].attributes[2].nodeValue)

                let sum = num1 + num2 + num3
                console.log(resultBoxLeft);
                resultBoxLeft.style.background = 'rgb(5, 252, 58)'
                resultBoxLeft.style.border = '2px solid black'
                resultBoxLeft.innerHTML = sum;
                console.log(sum);
                finalSum.push(sum);
                console.log(finalSum);

            }

        })
    }

    // CHECK WIN IN MIDDLE MAIN BOX
    checkMiddleLines() {
        let boxesMiddle = document.querySelectorAll('.box-middle');
        let resultBoxMiddle = document.querySelector('.result-box-middle');
        let lines = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        lines.forEach(line => {
            let line1 = boxesMiddle[line[0]];
            let line2 = boxesMiddle[line[1]];
            let line3 = boxesMiddle[line[2]];

            if (line1.childNodes[1].alt == line2.childNodes[1].alt && line1.childNodes[1].alt == line3.childNodes[1].alt && !line1.childNodes[1].alt == "") {
                line1.style.border = "5px solid green"
                line2.style.border = "5px solid green"
                line3.style.border = "5px solid green"

                sumPoints(this.finalSum);
                this.finalSumPoints();

            }

            function sumPoints(finalSum) {
                let num1 = parseInt(line1.childNodes[1].attributes[2].nodeValue)
                let num2 = parseInt(line2.childNodes[1].attributes[2].nodeValue)
                let num3 = parseInt(line3.childNodes[1].attributes[2].nodeValue)

                let sum = num1 + num2 + num3
                resultBoxMiddle.style.background = 'rgb(5, 252, 58)'
                resultBoxMiddle.style.border = '2px solid black'
                resultBoxMiddle.innerHTML = sum;
                console.log(sum);
                finalSum.push(sum);
                console.log(finalSum);

            }

        })
    }

    // CHECK WIN IN RIGHT MAIN BOX
    checkRightLines() {
        let boxesRight = document.querySelectorAll('.box-right');
        let resultBoxRight = document.querySelector('.result-box-right');
        let lines = [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        lines.forEach(line => {
            let line1 = boxesRight[line[0]];
            let line2 = boxesRight[line[1]];
            let line3 = boxesRight[line[2]];

            if (line1.childNodes[1].alt == line2.childNodes[1].alt && line1.childNodes[1].alt == line3.childNodes[1].alt && !line1.childNodes[1].alt == "") {
                line1.style.border = "5px solid green"
                line2.style.border = "5px solid green"
                line3.style.border = "5px solid green"

                sumPoints(this.finalSum);
                this.finalSumPoints();

            }

            function sumPoints(finalSum) {
                let num1 = parseInt(line1.childNodes[1].attributes[2].nodeValue)
                let num2 = parseInt(line2.childNodes[1].attributes[2].nodeValue)
                let num3 = parseInt(line3.childNodes[1].attributes[2].nodeValue)

                let sum = num1 + num2 + num3
                resultBoxRight.style.background = 'rgb(5, 252, 58)'
                resultBoxRight.style.border = '2px solid black'
                resultBoxRight.innerHTML = sum;
                console.log(sum);
                finalSum.push(sum);
                console.log(finalSum);
            }
        })
    }

    finalSumPoints() {
        let sumArr = this.finalSum
        const reducer = (prevNum, currNum) => prevNum + currNum;
        let result = sumArr.reduce(reducer);
        console.log('result', result);

    }
}
let db = new Db(images);
