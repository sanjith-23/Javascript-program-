HTMLButtonElement
let player=document.querySelector('#player')
let computer=document.querySelector('#computer')
let result=document.querySelector('#result')
let choice=document.querySelectorAll('.submit')
let index=document.querySelector('.main')
let plyscr=document.querySelector('#plyscr')
let cmpscr=document.querySelector('#cmpscr')
let ply
let cmp     
let res
let playerscore=0
let computerscore=0
let a=["STONE","PAPER","SCISSER"]
choice.forEach(button => button.addEventListener("click",()=>{
     ply=button.textContent;
     computerturn()
     player.textContent=ply
     computer.textContent=cmp
     plyscr.textContent=`Player Score: ${playerscore}`
     cmpscr.textContent=`Computer Score: ${computerscore}`
     result.textContent=checkWinner()
     if(checkWinner()=="You Lose")
     {
      computerscore++
      index.style.border="2px solid red"
      document.querySelector('.c').style.background="red"

}
     else if(checkWinner()=="You Win"){
      playerscore++
      index.style.border="2px solid green"
      document.querySelector('.c').style.background="green"

     }
      else if(checkWinner()=="Tie"){
            index.style.border="2px solid yellow"
            document.querySelector('.c').style.background="yellow"

      }

      if(playerscore>=10){
            alert("YOU WINNER",resetGame)
            playerscore=0
            computerscore=0
            plyscr.textContent=`Player Score: ${playerscore}`
            cmpscr.textContent=`Computer Score: ${computerscore}`}
      else if(computerscore>=10){
            alert("YOUR LOSS") 
            playerscore=0
            computerscore=0
            plyscr.textContent=`Player Score: ${playerscore}`
            cmpscr.textContent=`Computer Score: ${computerscore}`}

      if(ply=="STONE")
            document.querySelector('.a').style.background="pink"
      else if(ply=="PAPER")
            document.querySelector('.a').style.background="orange"
      else if(ply=="SCISSER")
            document.querySelector('.a').style.background="blue"

      if(cmp=="STONE")
            document.querySelector('.b').style.background="pink"
      else if(cmp=="PAPER")
            document.querySelector('.b').style.background="orange"
      else if(cmp=="SCISSER")
            document.querySelector('.b').style.background="blue"
}))
function computerturn(){
      let re =a[Math.floor(Math.random()*a.length)]
      cmp=re
      
}
function checkWinner()
{
      if(ply==cmp){
            return "Tie"
      }
      else if(cmp=="STONE"){
            return (ply=="PAPER") ? "You Win":"You Lose"
      }
      else if(cmp=="PAPER"){
            return (ply=="SCISSER") ? "You Win":"You Lose"
            }
      else if(cmp=="SCISSER"){
            return (ply=="STONE") ? "You Win":"You Lose"
            }
}
function resetGame(){
      playerscore=0
      computerscore=0
      plyscr.textContent=`Player Score: ${playerscore}`
      cmpscr.textContent=`Computer Score: ${computerscore}`
}
