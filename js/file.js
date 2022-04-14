//active counter;

let field = document.querySelector('#field');
let balls = document.querySelector('.balls');
let form=document.querySelector("button");
let increase = document.querySelector('#increase');
let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let counter = document.querySelector('#counter');
let count = 0;

// button
reset.addEventListener('mouseover',()=>{
  let form = document.querySelector('#reset');
form.style.color="red";
});

reset.addEventListener('mouseout',()=>{
    let form=document.querySelector('#reset');
    form.style.color="";
});

increase .addEventListener('mouseover',()=>{
  let form = document.querySelector('#increase');
form.style.background="darkgreen";
});

increase .addEventListener('mouseout',()=>{
    let form=document.querySelector('#increase');
    form.style.background="";
});

decrease.addEventListener('mouseover',()=>{
  let form = document.querySelector('#decrease');
form.style.background="red";
});

decrease.addEventListener('mouseout',()=>{
    let form=document.querySelector('#decrease');
    form.style.background="";
});

//counter+balls

increase.addEventListener('click', () => {
  count++;

  if (count > 0) {
    let div = document.createElement("div");
    div.classList.add('balls');
    document.querySelector('#field').appendChild(div);
  };
  counter.innerHTML = count;
});

decrease.addEventListener('click', () => {
  count--;

  if (count >= 0) {
    let balls = document.querySelector('.balls');
    document.querySelector('#field').removeChild(balls);
  };
  counter.innerHTML = count;
});

reset.addEventListener('click', () => {
  count = 0;
  document.querySelector('#field').innerHTML = "";
  counter.innerHTML = count;
});
