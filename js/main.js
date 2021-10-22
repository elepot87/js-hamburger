// Selezionare hamburger menù

const btnMenu = document.querySelector(".fa-bars");

// Scatenare evento al click sull'icona del menù hamburger, ovvero mostrarlo
btnMenu.addEventListener("click", function () {
  const hamburgerMenuOpen = document.querySelector(".hamburger-menu");
  // hamburgerMenuOpen.style.display = "block";

  // Variante con l'aggiunta della classe richiamata dal CSS
  hamburgerMenuOpen.classList.add("active");
});

// Nascondere menù hamburger al click sulla X

const btnClose = document.querySelector(".fa-times");

btnClose.addEventListener("click", function () {
  const hamburgerMenuClosed = document.querySelector(".hamburger-menu");
  // hamburgerMenuClosed.style.display = "none";

  // Variante con eliminazione della classe del CSS
  hamburgerMenuClosed.classList.remove("active");
});
