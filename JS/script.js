const caixa = document.querySelectorAll(".main-IAgenerativas__section3__pontos__caixa");

caixa.forEach((item) => {
  const textoPrincipal = item.querySelector(".main-IAgenerativas__section3__pontos__caixa__texto-principal");

  textoPrincipal.addEventListener("click", () => {
    const textoSegundario = item.querySelector(".main-IAgenerativas__section3__pontos__caixa__texto-segundario");

    const active = document.querySelector(".active");

    verificarActive(item, textoSegundario, active);
  });
});

function verificarActive(item, content, content_actived) {
  const icon_item = item.querySelector(".icon");
  const icon_item_active = document.querySelectorAll(".icon");

  icon_item_active.forEach((item) => (item.innerHTML = "+"));

  if (content_actived) {
    content_actived.style.height = 0;
    content_actived.classList.remove("active");
  }

  if (content !== content_actived) {
    icon_item.innerHTML = "-";
    content.classList.add("active");
    content.style.height = content.scrollHeight + 10 + "px";
  }
}

const hamburguer = document.querySelector('.hamburguer')
const navMenu = document.querySelector('.nav__ul')

hamburguer.addEventListener("click", () =>{
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
})