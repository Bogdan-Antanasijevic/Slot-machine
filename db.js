class Db {
    images;
    box;
    result = 0;
    arr = [];
    pointsArr = [];
    constructor(images, result, arr, pointsArr) {
        this.arr = [];
        this.images = images;
        this.result = 0;
        this.pointsArr = [];
    }

    

    // DAJE PRVA TRI ZNAKA NA POCETKU IGRE
    startSpin() {
        headImg.forEach(img => {
            let rand = Math.floor(Math.random() * images.length);
            img.setAttribute('src', images[rand].src);
            this.arr.push(rand);
            // this.pointsArr.push(this.images[rand].points)
            // console.log(this.pointsArr);
        });
    };

    //MOVE SIGNS IN LEFT MAIN BOX
    moveLeft () {
        let i = 0;
        db.startSpin();
        let boxesLeft = document.querySelectorAll('.box-left');
        let lines = [
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];
        lines.forEach(line=>{
            let box1 = boxesLeft[line[0]];
            let box2 = boxesLeft[line[1]];
            let box3 = boxesLeft[line[2]];

            let text = `
            <img src="images/${this.arr[i]}.png"></img>
            `
            
            i++;
            
            
            if(box1.innerHTML == ""){
                box1.innerHTML = text;
                
                if(i>2){
                this.arr = [];
                }
                return;
            }
            if(!box1.innerHTML == "" && box2.innerHTML == ""){
                box2.innerHTML = text;
                
                if(i>2){
                    this.arr = [];
                    }
                return;
            }
            if(!box1.innerHTML == "" && !box2.innerHTML == "" && box3.innerHTML == ""){
                box3.innerHTML = text;
                
                if(i>2){
                    this.arr = [];
                    }
                return;
            }
            
        })
    }

      //MOVE SIGNS IN DOWN MAIN BOX
      moveMiddle () {
        let i = 0;
        db.startSpin();
        let boxesMiddle = document.querySelectorAll('.box-middle');
        let lines = [
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];
        lines.forEach(line=>{
            let box1 = boxesMiddle[line[0]];
            let box2 = boxesMiddle[line[1]];
            let box3 = boxesMiddle[line[2]];

            let text = `
            <img src="images/${this.arr[i]}.png"></img>
            `
            i++;
            
            
            if(box1.innerHTML == ""){
                box1.innerHTML = text;
                
                if(i>2){
                this.arr = [];
                }
                return;
            }
            if(!box1.innerHTML == "" && box2.innerHTML == ""){
                box2.innerHTML = text;
                
                if(i>2){
                    this.arr = [];
                    }
                return;
            }
            if(!box1.innerHTML == "" && !box2.innerHTML == "" && box3.innerHTML == ""){
                box3.innerHTML = text;
                
                if(i>2){
                    this.arr = [];
                    }
                return;
            }
            
        })
    }

     //MOVE SIGNS IN RIGHT MAIN BOX
     moveRight () {
        let i = 0;
        db.startSpin();
        let boxesRight = document.querySelectorAll('.box-right');
        let lines = [
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];
        lines.forEach(line=>{
            let box1 = boxesRight[line[0]];
            let box2 = boxesRight[line[1]];
            let box3 = boxesRight[line[2]];

            let text = `
            <img src="images/${this.arr[i]}.png"></img>
            `
            i++;
            
            
            if(box1.innerHTML == ""){
                box1.innerHTML = text;
                
                if(i>2){
                this.arr = [];
                }
                return;
            }
            if(!box1.innerHTML == "" && box2.innerHTML == ""){
                box2.innerHTML = text;
                
                if(i>2){
                    this.arr = [];
                    }
                return;
            }
            if(!box1.innerHTML == "" && !box2.innerHTML == "" && box3.innerHTML == ""){
                box3.innerHTML = text;
                
                if(i>2){
                    this.arr = [];
                    }
                return;
            }
            
        })
    }

};

let db = new Db(images);
