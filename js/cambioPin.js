

const changePin = () => {
  const currentCard = localStorage.getItem("currentCard");
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const newData = cards.map((card) => {
    if (card.numero === currentCard) {
      return {
        ...card,
        pin: mainInput.value,
      };
    } else {
      return card;
    }
  });
  localStorage.setItem("tarjetas", JSON.stringify(newData));
  alert("Pin Cambiado");
  goToRoute("index.html");
};
