const goToRoute = (link) => {
  window.location.href = link;
};

const reset = () => {
  const tajertas = [
    {
      numero: "090922951",
      pin: "2020",
      quetzales: "10000",
      dolares: "2000",
    },
  ];
  localStorage.setItem("tarjetas", JSON.stringify(tajertas));
  alert("Reiniciado tarjetas");
};
