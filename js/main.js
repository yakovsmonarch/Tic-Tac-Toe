class Board{
    #arrBoard;
    #stepGamer;
    #class0 = 'btn-field-zero';
    #classX = 'btn-field-x';
    #classBtnField = 'btn-field';
    #computerGame;

    constructor(stepGamer){
        this.#arrBoard = new Array(9).fill(0);
        this.#stepGamer = stepGamer;
        this.#computerGame = new ComputerGamer(this.#arrBoard);
    }

    stepGame(indexBoard, btnField){
        if(this.#validateStep(indexBoard) === false){
            console.log('Неправильный ход!');
            return;
        }

        this.#arrBoard[indexBoard] = 1;
        this.#printFigure(this.#stepGamer, btnField);
        if(this.#checkVictory(1) === 1){
            alert('Крестики победили!');
            return;
        }

        const responseIndexMove = this.#computerGame.responseMove();
        this.#arrBoard[responseIndexMove] = -1;
        const btnComputer = this.#getBtn(responseIndexMove);
        this.#printFigure(this.stepGame, btnComputer);
        if(this.#checkVictory(-1) === -1){
            alert('Нолики победили!');
            return;
        }
    }

    clear(){
        this.#arrBoard = new Array(9).fill(0);
        this.#computerGame = new ComputerGamer(this.#arrBoard);
        const arrBtn = document.getElementsByClassName(this.#classBtnField);
        for(const element of arrBtn){
            element.classList.remove(this.#class0);
            element.classList.remove(this.#classX);
        }
    }


    #printFigure(stepGamer, btnField){
        if(!btnField) return;

        if(stepGamer === true){
            btnField.classList.remove(this.#class0);
            btnField.classList.add(this.#classX);
            
        }else{
            btnField.classList.remove(this.#classX);
            btnField.classList.add(this.#class0);
        }
    }

    #validateStep(stepGame){
        return this.#arrBoard[stepGame] === 0;
    }

    #getBtn(indexBoard){
        const btn = document.getElementById(indexBoard);
        return btn;
    }

    // 0 - ничья, 1 - крестики выиграли, -1 - нолики выиграли.
    #checkVictory(figure){
        let sum = 0;
        let counter = 0;
        for(let i = 0; i < this.#arrBoard.length; i++){
            if(this.#arrBoard[i] === figure){
                sum++;
            }

            counter++;

            if(counter === 3){
                if(sum === 3){
                    return this.#arrBoard[i];
                }else{
                    counter = 0;
                    sum = 0;
                }
            }
        }
        return 0;
    }

}

class ComputerGamer{
    #arrBoard;

    constructor(arrBoard){
        this.#arrBoard = arrBoard;
    }

    responseMove(){
        let resultIndex = this.#generateStep();
        return resultIndex;
    }

    #generateStep(){
        const arrFreeFields = [];
        for(let i = 0; i < this.#arrBoard.length; i++){
            if(this.#arrBoard[i] === 0){
                arrFreeFields.push(i);
            }
        }
        const indexFreeFields = this.#getRandomNumber(0, arrFreeFields.length);
        return arrFreeFields[indexFreeFields];
    }

    #getRandomNumber(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min)
      }
}

const board = new Board(true);