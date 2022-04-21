//active counter;

let field = document.querySelector('#field');
let balls = document.querySelector('.balls');
let form = document.querySelector("button");
let count = 0;

//create Counter

let counter = document.createElement("span");
counter.id = "counter";
document.body.appendChild(counter);
document.getElementById("counter").textContent = "0";
field.after(counter);

//create button
let btns = document.createElement("div");
btns.classList.add('counter');
document.body.appendChild(btns);
counter.after(btns);

//btn increase
let increase = document.createElement("button");
increase.id = "increase";
increase.classList.add('btn');
document.querySelector('.counter').appendChild(increase);
document.getElementById("increase").textContent = "+";

//btn reset
let reset = document.createElement("button");
reset.id = "reset";
reset.classList.add('btn');
document.querySelector('.counter').appendChild(reset);
document.getElementById("reset").textContent = "Reset";

//btn decrease
let decrease = document.createElement("button");
decrease.id = "decrease";
decrease.classList.add('btn');
document.querySelector('.counter').appendChild(decrease);
document.getElementById("decrease").textContent = "-";


// button
reset.addEventListener('mouseover', () => {
  let form = document.querySelector('#reset');
  form.style.color = "red";
});

reset.addEventListener('mouseout', () => {
  let form = document.querySelector('#reset');
  form.style.color = "";
});

increase.addEventListener('mouseover', () => {
  let form = document.querySelector('#increase');
  form.style.background = "darkgreen";
});

increase.addEventListener('mouseout', () => {
  let form = document.querySelector('#increase');
  form.style.background = "";
});

decrease.addEventListener('mouseover', () => {
  let form = document.querySelector('#decrease');
  form.style.background = "red";
});

decrease.addEventListener('mouseout', () => {
  let form = document.querySelector('#decrease');
  form.style.background = "";
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
