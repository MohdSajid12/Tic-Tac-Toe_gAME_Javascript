window.addEventListener('DOMContentLoaded', () => {
    let boxes = document.querySelectorAll('.box');
    let reset_btn = document.querySelector('#reset-btn');
    let newGameButton = document.querySelector('#new-btn');
    let msgContainer = document.querySelector('.msg-container');
    let msgPara = document.querySelector('#msg');
  
    let turn0 = true; //playerX , player0;

    const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8]
    ]

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (turn0) // player 0 turn
            {
                box.innerHTML = "0";
                turn0 = false;
            }
            else    //player x turn
            {
                box.innerHTML = "X";
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
        })
    })

    function checkWinner()
    {
        for ( let patterns of winPatterns)
        {    
            let pos1Value = boxes[patterns[0]].innerText
            let pos2Value = boxes[patterns[1]].innerText
            let pos3Value = boxes[patterns[2]].innerText

            if (pos1Value != "" && pos2Value != "" && pos3Value != "")
            {
                if (pos1Value == pos2Value && pos2Value == pos3Value) {
                    console.log('winner', pos1Value);
                    showWinner(pos1Value);
                } 
               }
           }
    }
    const enableBoxex = () => {
        for (let box of boxes)
        {
            box.disabled = false;
            box.innerText = "";
            }
    }

    const disableBoxex = () => {
        for (let box of boxes)
        {
            box.disabled = true;
            }
    }

    function showWinner(winner)
    {
        msgPara.innerText = `Winner is ${winner}`;
        msgContainer.classList.remove('hide');
        disableBoxex();

    }
    const resetGame = () => {
        turn0 = true;
        enableBoxex();
        msgContainer.classList.add("hide");
    }

    newGameButton.addEventListener('click', () => {
        resetGame();
    })
    reset_btn.addEventListener('click', () => {
        resetGame();
    })

})