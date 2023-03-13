document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    { name: "1", img: "imagenes/1.png" },
    { name: "2", img: "imagenes/2.png" },
    { name: "3", img: "imagenes/3.png" },
    { name: "4", img: "imagenes/4.png" },
    { name: "5", img: "imagenes/5.png" },
    { name: "6", img: "imagenes/6.png" },
    { name: "1", img: "imagenes/1.png" },
    { name: "2", img: "imagenes/2.png" },
    { name: "3", img: "imagenes/3.png" },
    { name: "4", img: "imagenes/4.png" },
    { name: "5", img: "imagenes/5.png" },
    { name: "6", img: "imagenes/6.png" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1500);
    }
  }

  crearTablero();
});
