const input = document.querySelector("#NumberInput");
const display = document.querySelector("#display");
const tentativasRestantes = document.querySelector("#tentativasRestantes");
const result = document.querySelector("#result");
const recom = document.querySelector("#recom");
const sendButton = document.querySelector(".sendButton");

const sorteia = () => {
  const aleatorio = Math.round(Math.random() * 10);
  return aleatorio;
};

let valor = sorteia();

let tentativas = 4;

function valorTentativa() {
  tentativasRestantes.innerHTML = tentativas;
}

valorTentativa();

function handleSubmit() {
  if (input.value > 10 || input.value < 0 || input.value == "") {
    alert("escolha um numero valido de 0 a 10");
    valorTentativa();
  } else if (valor < input.value) {
    valorTentativa();
    tentativas--;
    display.innerHTML = "o numero é menor";
  } else if (valor > input.value) {
    tentativas--;
    valorTentativa();
    display.innerHTML = "o numero é maior";
  } else {
    result.innerHTML = "voce acertou";

    setTimeout(() => {
      handleReset();
      tentativasRestantes.innerHTML = tentativas;
    }, 2000);
  }

  if (tentativas == 0) {
    result.innerHTML = "voce perdeu";
    setTimeout(() => {
      handleReset();
      tentativasRestantes.innerHTML = tentativas;
    }, 2000);
    sendButton.setAttribute("disabled", "disabled");
  }
}

function handleReset() {
  tentativas = 4;
  tentativasRestantes.innerHTML = tentativas;
  valor = sorteia();
  limparDados();
  setTimeout(() => {
    sendButton.removeAttribute("disabled");
  }, 2000);
}

function limparDados() {
  recom.innerHTML = "Recomeçando...";
  input.value = "";
  display.innerHTML = "";
  result.innerHTML = "";
  setTimeout(() => {
    recom.innerHTML = "";
  }, 2000);
}
