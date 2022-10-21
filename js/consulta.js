const dolaresAmount = document.querySelector("#mainTitle");
const quetzalesAmount = document.querySelector("#mainTitle2");
const cardNumber = document.querySelector("#mainTitle3");

(() => {
  const currentCard = localStorage.getItem("currentCard");
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const foundCard = cards.find((card) => card.numero === currentCard);
  dolaresAmount.innerHTML = `${dolaresAmount.innerHTML} $${foundCard.dolares}`;
  quetzalesAmount.innerHTML = `${quetzalesAmount.innerHTML} Q${foundCard.quetzales}`;
  cardNumber.innerHTML = `${cardNumber.innerHTML} ${foundCard.numero}`;
})();
