function clicou () {
  console.log('Clicou no botão!')
}

let botao = document.querySelector('.botao');

// PRIMEIRA FORMA
// botao.addEventListener("click", clicou);

// SEGUNDA FORMA
// botao.addEventListener("click", function() {
//   console.log('Clicou no botão!')
// });

// TERCEIRA FORMA
// botao.addEventListener("click", () => {
//  console.log('clicou no botao!')
// });


// QUARTA FORMA
document.querySelector('.botao').addEventListener("click", clicou);