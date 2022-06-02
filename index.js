const container = document.querySelector(".main__container");
const modal = document.getElementById("modal");
const submitBtn = document.querySelector(".btn-submit");
let choice = document.querySelector(".answer");
let rate = 0;

const rateBtns = document.querySelectorAll(".rate");

rateBtns.forEach((b) => {
  b.addEventListener("click", () => {
    rate = this.innerHTML;
    rateBtns.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});

submitBtn.addEventListener("click", modalShow);

function modalShow() {
  if (rate === 0) {
    alert("Please rate us");
  } else {
    choice.innerHTML = rate;
    container.style.display = "none";
    modal.style.display = "block";
  }
}
