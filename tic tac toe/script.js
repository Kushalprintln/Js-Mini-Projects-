console.log("welocome to the game");
let turn = "X";
let gameover = false;
let x = 0;
let o = 0;
const changeTurn = ()=>{
    return turn === "X"?"O":"X";
}
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 5, 5, 0, 20],
        [3, 4, 5, 5, 15, 0, 20],
        [6, 7, 8, 5, 25, 0, 20],
        [0, 3, 6, 5, 5, 90, 20],
        [1, 4, 7, 15, 5, 90, 20],
        [2, 5, 8, 25, 5, 90, 20],
        [0, 4, 8, 5, 5, 45, 28.28],
        [2, 4, 6, 25, 5, 135, 28.28],  
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "" ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText+" WON";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = `${e[6]}vw`;
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            scoreupdate(boxtext[e[0]].innerText);
            // setTimeout(()=>{
            //     document.querySelector('.reset').click();
            // },5000);
        }
    })
}
const scoreupdate = (winner)=>{
    if (winner === "X"){
        x++;
        document.getElementsByClassName("xscore")[0].innerText = "X Wins : "+ x;
    }
    else if (winner === "O"){
        o++;
        document.getElementsByClassName("oscore")[0].innerText = "O Wins : "+ o;
    }
    else{
        document.getElementsByClassName("xscore")[0].innerText = "X Wins : "+ x;
        document.getElementsByClassName("oscore")[0].innerText = "O Wins : "+ o;
    }

}
// GAME LOGIC
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn; 
            }

        }
    })
})

// add onclick listen to reset button
reset.addEventListener('click',()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = '';
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0px";
})
// adding same for the renew
renew.addEventListener('click',()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = '';
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0px";
    x = 0;
    o = 0;
    scoreupdate();
})