const s = document.getElementById('s');
const h = document.getElementById('hr');
const m = document.getElementById('mn');

setInterval(updateClock,1000);
function updateClock(){
  let d= new Date();
  let sec = d.getSeconds() * 6;
  let min = d.getMinutes() * 6;
  let hour = d.getHours() * 30 + min/12;

  s.style.transform = `rotateZ(${sec}deg)`;
  m.style.transform = `rotateZ(${min}deg)`;
  h.style.transform = `rotateZ(${hour}deg)`
}
function toggleClass(){
  const body= document.querySelector('body');
body.classList.toggle('light');
}