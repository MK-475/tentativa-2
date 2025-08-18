// Botão "Não" que foge
const button = document.getElementById('no');

if (button) {
  button.addEventListener('mouseover', moverBotao);
  button.addEventListener('touchstart', moverBotao);

  function moverBotao() {
    const height = window.innerHeight - button.offsetHeight - 20;
    const width = window.innerWidth - button.offsetWidth - 20;

    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
  }
}
