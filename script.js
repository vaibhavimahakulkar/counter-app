const counter = document.querySelector("#count");
const increase = document.querySelector("#increase");
const resetBtn = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");

let count = 0;



const display = () => {
  counter.innerText = count;
};

display();

const increaseCount = () => {
  count++;
  display();
};

const decreaseCount = () => {
  count--;
  display();
};

const reset = () => {
  count = 0;
  display();
};

increase.addEventListener("click",increaseCount);
decrease.addEventListener("click",decreaseCount);
resetBtn.addEventListener("click",reset);