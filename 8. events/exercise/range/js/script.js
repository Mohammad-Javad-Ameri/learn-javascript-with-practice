const rangeInput = document.querySelector("input");
const container = document.querySelector(".container");

rangeInput.addEventListener("change", function (event) {
  console.log(event.target.value);
  container.style.filter = `brightness(${event.target.value}%)`;
});
