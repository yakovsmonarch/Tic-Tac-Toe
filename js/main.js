class Board{
    #arrBoard;
    #stepGamer;
    #class0 = 'btn-field-zero';
    #classX = 'btn-field-x';
    #classBtnField = 'btn-field';

    constructor(stepGamer){
        this.#arrBoard = new Array(9).fill(0);
        this.#stepGamer = stepGamer;
    }

    stepGame(indexBoard, btnField){
        this.#arrBoard[indexBoard] = 1;
        this.#printFigure(this.#stepGamer, btnField)
    }

    clear(){
        this.#arrBoard = new Array(9).fill(0);
        const arrBtn = document.getElementsByClassName(this.#classBtnField);
        for(const element of arrBtn){
            element.classList.remove(this.#class0);
            element.classList.remove(this.#classX);
        }
    }


    #printFigure(stepGamer, btnField){
        if(stepGamer === true){
            btnField.classList.remove(this.#class0);
            btnField.classList.add(this.#classX);
            
        }else{
            btnField.classList.remove(this.#classX);
            btnField.classList.add(this.#class0);
        }
        this.#stepGamer = !stepGamer;
    }

}

const board = new Board(true);