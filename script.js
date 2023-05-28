console.log("Welcome to Tic Tac Toe")
let audioTurn = new Audio("ting.mp3")
let music = new Audio("music.mp3")
let isgameover = false;
let turn = "X"


//FUNCTION TO CHANGE THE TURN
const changeTurn =()=>{
    return turn === "X"?"0" :"X"
}


//FUNCTION TO CHECK FOR A WIN
const checkWin =()=> {
    let boxText = document.getElementsByClassName('boxText')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6], 
    ]
    wins.forEach(e =>{
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " Won" 
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "300px";
        }

    })
}

//GAME LOGIC
music.muted = true;
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=> {
        if(boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover) {

                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }
        }
    })
})