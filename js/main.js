// Selezionare hamburger menù

const btnMenu = document.querySelector(".fa-bars");

// Scatenare evento al click sull'icona del menù hamburger, ovvero mostrarlo
btnMenu.addEventListener("click", function () {
  const hamburgerMenuOpen = document.querySelector(".hamburger-menu");
  hamburgerMenuOpen.style.display = "block";
});

// Nascondere menù hamburger al click sulla X

const btnClose = document.querySelector(".fa-times");

btnClose.addEventListener("click", function () {
  const hamburgerMenuClosed = document.querySelector(".hamburger-menu");
  hamburgerMenuClosed.style.display = "none";
});
