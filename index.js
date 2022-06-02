const container = document.querySelector(".main__container");
const modal = document.getElementById("modal");
const submitBtn = document.querySelector(".btn-submit");
let choice = document.querySelector(".answer");
let rate = 0;

const rateBtns = document.querySelectorAll(".rate");

for (let i = 0; i < rateBtns.length; i++) {
  rateBtns[i].addEventListener('click', () => {
    rate = Number(rateBtns[i].textContent)
  })
}

submitBtn.addEventListener("click", modalShow);

function modalShow() {
  if (rate === 0) {
    alert("Please Rate Us :)");
  } else {
    choice.innerHTML = rate;
    container.style.display = "none";
    modal.style.display = "block";
  }
}
