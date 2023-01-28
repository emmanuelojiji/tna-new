const menu_button = document.querySelector(".menu-button");
const menu_container = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu_button.onclick = () => {
  console.log("clicked");

  if (!menu_container.classList.contains("fadeIn")) {
    menu_container.style.display = "block";
    setTimeout(() => {
      menu_container.classList.add("fadeIn");
    }, 50);
  } else {
    menu_container.classList.remove("fadeIn");
    setTimeout(() => {
      menu_container.style.display = "none";
    }, 50);
  }
};

close.onclick = () => {
  menu_container.classList.remove("fadeIn");
  setTimeout(() => {
    menu_container.style.display = "none";
  }, 200);
};
