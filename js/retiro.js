const setAmount = (amount) => {
  localStorage.setItem("currentRetireAmount", amount);
  goToRoute("tipo.html");
};

const setVariableAmount = () => {
  localStorage.setItem("currentRetireAmount", mainInput.value);
  goToRoute("tipo.html");
};

const removeQuetzales = () => {
  const currentAmount = localStorage.getItem("currentRetireAmount");
  const currentCard = localStorage.getItem("currentCard");
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const newData = cards.map((card) => {
    if (card.numero === currentCard) {
      console.log(currentAmount);
      console.log(card.quetzales);

      console.log(currentAmount > Number.parseInt(card.quetzales));

      if (currentAmount > Number.parseInt(card.quetzales)) {
        alert("Fondos insuficientes, regresando a menu");
        return card;
      } else {
        alert("Regresando a menu");
        return {
          ...card,
          quetzales: Number.parseInt(card.quetzales) - currentAmount,
        };
      }
    } else {
      return card;
    }
  });
  localStorage.setItem("tarjetas", JSON.stringify(newData));
  goToRoute("menu.html");
};

const removeDolares = () => {
  const currentAmount = localStorage.getItem("currentRetireAmount");
  const currentCard = localStorage.getItem("currentCard");
  const cards = JSON.parse(localStorage.getItem("tarjetas"));
  const newData = cards.map((card) => {
    if (card.numero === currentCard) {
      if (currentAmount > Number.parseInt(card.dolares)) {
        alert("Fondos insuficientes, regresando a menu");
        return card;
      } else {
        alert("Regresando a menu");
        return {
          ...card,
          dolares: Number.parseInt(card.dolares) - currentAmount,
        };
      }
    } else {
      return card;
    }
  });
  localStorage.setItem("tarjetas", JSON.stringify(newData));
  goToRoute("menu.html");
};
