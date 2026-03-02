let boxCell = document.querySelectorAll('.box-cell')
let move = document.querySelector('.move')
let curentMove = 'X'
let cellOvered = 0

for (let cell of boxCell){
    cell.addEventListener('click',function(){
        if (cell.textContent == ''){
            cell.textContent = curentMove
            cellOvered += 1
            if(curentMove == 'X') {
                curentMove = 'O'
                move.textContent = `Ход: ${curentMove}`
            }else{
                curentMove = 'X'
                move.textContent = `Ход: ${curentMove}`
            }
        }
        if (cellOvered === 9) {
            move.textContent = 'Итог: Ничья '
        }
        isVictory()
})}
let combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
function isVictory(){
    for(let combination of combinations){
        checkWin(combination[0],combination[1],combination[2])
    }
}

function checkWin(i1,i2,i3){
    if(boxCell[i1].textContent == 'X' && boxCell[i2].textContent == 'X' && boxCell[i3].textContent == 'X') {
        move.textContent = 'Итог: Победа X '
    }
    if(boxCell[i1].textContent == 'O' && boxCell[i2].textContent == 'O' && boxCell[i3].textContent == 'O') {
        move.textContent = 'Итог: Победа O '
    }
}