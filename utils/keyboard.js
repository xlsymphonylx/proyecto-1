const mainInput = document.querySelector("#mainInput");

const keyBoardInput = (input) => {
  mainInput.value = `${mainInput.value}${input}`;
};

const cleanInput = () => {
  mainInput.value = "";
};
