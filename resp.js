const bars = document.querySelector(".hiddenmenu");
const menu = document.querySelector(".links");

bars.addEventListener("click", () => {
  menu.classList.toggle("show");
});
menu.addEventListener("click", () => {
  menu.classList.remove("show");
});

document.body.style.backgroundImage =
  " radial-gradient(at 20% 64%, rgba(0, 97, 204, 0.1) 0px, transparent 50%),radial-gradient(at 20% 50%, rgba(0, 97, 204, 0.5) 0px, transparent 50%), radial-gradient(at 66% 0%, rgba(0, 22, 132, 0.4) 0px, transparent 50%)";

function scrollPosition(event) {
  let top = this.scrollY;

  document.body.style.backgroundImage = `radial-gradient(at 20% 64%, rgba(${top}, 97, 204, 0.1) 0px, transparent 50%),radial-gradient(at 20% 50%, rgba(${top}, 97, 204, 0.5) 0px, transparent 50%), radial-gradient(at 66% 0%, rgba(${top}, 22, 132, 0.4) 0px, transparent 50%)`;
}

window.addEventListener("scroll", scrollPosition, false);
