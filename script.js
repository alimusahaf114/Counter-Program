const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increasebtn.onclick = () => {
  count++;
  countLabel.textContent = count;
};
resetbtn.onclick = () => {
    count = 0 ;
  countLabel.textContent = count ;
};
decreasebtn.onclick = () => {
  count--;
  countLabel.textContent = count;
};
