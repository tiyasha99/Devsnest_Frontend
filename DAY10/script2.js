const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard,secondCard;
let lockBoard;
let firstClick=false;

function flipCard(){ 
  if(!firstClick)
  {
    time();
  }
  if(lockBoard)
    return;
  if(this===firstCard)
    return;
  this.classList.toggle('flip');

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  
  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();

  
}
function checkForMatch(){
 let isMatch=firstCard.dataset.name===secondCard.dataset.name;
 isMatch?disableCards():unflipCards();
}
function disableCards(){
  firstCard.removeEventListener('click',flipCard);
  secondCard.removeEventListener('click',flipCard);
}

function unflipCards(){
  lockBoard=true;
  setTimeout(()=> {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard=false;
  },1500);
}
function resetBoard(){
  hasFlippedCard=false;
  lockBoard =false;
  firstCard = null;
  secondCard = null;
}
(function shuffle(){
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random()*12);
    card.style.order = randomPos;
  });
})();
function time()
{
  let secs=0;
  let min= 0
}
let t0 = performance.now();
cards.forEach(card => card.addEventListener('click',flipCard)
);
let t1= performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");




