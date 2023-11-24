function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  var img = document.querySelector("#profile img");


  if (html.classList.contains("light")) {
    img.setAttribute("src","./assets/avatar-light.png");
    img.setAttribute(
      "alt",
      "foto de thiago rocha utilizando camisa preta, sem oculos  e fundo de um quarto."
    )
  } else {
    html.classList.remove("light");
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "foto de thiago rocha utilizando camisa preta, oculos  e fundo cinza.")
  }
}


