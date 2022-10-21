const checkPin = () => {
  const currentCard = localStorage.getItem("currentCard");
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const foundCard = cards.find((card) => card.numero === currentCard);
  console.log(foundCard);
  if (foundCard.pin === mainInput.value) {
    alert("Pin Valido");
    window.location.href = "menu.html";
  } else alert("Error, intente de nuevo");
};
