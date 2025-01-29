let userSeq = [];
let gameSeq = [];
let colr = ["green","red","yellow","blue"];
let level = 0;
let score = 0;
let start = false;
let SC = document.querySelector(".SC");
let h2 = document.querySelector("h2");
let red = document.querySelector(".red")
document.addEventListener("keypress",function(){
    if(start == false){
        start = true;
        levelUp();
    }

});
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    //random
    let rndidx = Math.floor(Math.random()*4);
    let rndclr = colr[rndidx];
    gameSeq.push(rndclr);
    //console.log(gameSeq);
    let btn = document.querySelector(`.${rndclr}`);
    btnflash(btn);
}
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 200);

}
function check(indx){
    if(userSeq[indx] === gameSeq[indx]){
        if(userSeq.length ==  gameSeq.length){
            score=score+5;
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = "!!GAME OVER!!<br>Enter any key to start the game";
        SC.innerHTML = `<b>Score : ${score}</b>`;
        reset();
    }
}
function btnpress(){
    let btn = this;
    btnflash(btn);
    let userclr = btn.getAttribute("id");
    userSeq.push(userclr);
    check(userSeq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for(allbtns of allbtn){
    allbtns.addEventListener("click",btnpress);
}
function reset(){
    let bdy = document.querySelector("body");
    bdy.classList.add("over");
    setTimeout(() => {
        bdy.classList.remove("over");
    }, 1000);
    start = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
    score = 0;
}