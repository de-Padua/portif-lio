const bars = document.querySelector(".hiddenmenu");
const menu = document.querySelector(".links");

bars.addEventListener("click", () => {
  menu.classList.toggle("show");
});
menu.addEventListener("click", () => {
  menu.classList.remove("show");
});

const blob = document.querySelector(".blob");

window.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
