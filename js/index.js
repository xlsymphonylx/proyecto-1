(() => {
  if (!localStorage.getItem("tarjetas")) {
    const tajertas = [
      {
        numero: "1",
        pin: "1",
        quetzales: "10000",
        dolares: "2000",
      },
    ];
    localStorage.setItem("tarjetas", JSON.stringify(tajertas));
  }
})();

const checkCard = () => {
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const insertedCard = mainInput.value;
  const foundCard = cards.find((card) => card.numero === insertedCard);
  if (foundCard) {
    localStorage.setItem("currentCard", foundCard.numero);
    alert("Tarjeta Valida");
    window.location.href = "pinConfirmation.html";
  } else alert("Error, intente de nuevo");
};
