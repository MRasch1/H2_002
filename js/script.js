
const gameBoard = document.querySelector(".gameboard")

// gameBoard.addEventListener("click", function(e) {
//     if(e.target.tagName != "BUTTON")
//     alert(e.target.tagName);
// })

let playerXTurn = true;

const createEvt = (fields) => {
    fields.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.innerText == "") {
                e.target.innerText = playerXTurn ? "X" : "O";
                // Er der fundet en vinder?
                if (isWinnerFound()) alert("Vinder er fundet");
                playerXTurn = !playerXTurn;
            }
        });
    });
}

// 00 01 02
// 10 11 12
// 20 21 22

// const isWinnerFound = () => {

//     if (document.querySelector("#r0c0").innerText === document.querySelector("#r0c1").innerText &&
//         document.querySelector("#r0c0").innerText === document.querySelector("#r0c2").innerText &&
//         document.querySelector("#r0c0").innerText !== ""
//     )
//         return true;
// }

const isWinnerFound = () => {
    const combinations = [
        // Rows
        ['#r0c0', '#r0c1', '#r0c2'],
        ['#r1c0', '#r1c1', '#r1c2'],
        ['#r2c0', '#r2c1', '#r2c2'],
        // Columns
        ['#r0c0', '#r1c0', '#r2c0'],
        ['#r0c1', '#r1c1', '#r2c1'],
        ['#r0c2', '#r1c2', '#r2c2'],
        // Diagonals
        ['#r0c0', '#r1c1', '#r2c2'],
        ['#r0c2', '#r1c1', '#r2c0']
    ];

    for (const combination of combinations) {
        const cells = combination.map(cellId => document.querySelector(cellId));
        const textContent = cells[0].innerText;
        
        if (textContent !== "" && cells.every(cell => cell.innerText === textContent)) {
            return true;
        }
    }
    
    return false;
};



const init = () => {
    // for(let i = 0; i < 9; i++) {
    //     let btn = document.createElement("button");
    //     btn.className = "field";
    //     gameBoard.appendChild(btn);
    // }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            let btn = document.createElement("button");
            btn.className = "field"
            btn.id = `r${row}c${col}`;
            gameBoard.appendChild(btn);
        }

    }

    const fields = document.querySelectorAll(".field");
    createEvt(fields);
}

init();