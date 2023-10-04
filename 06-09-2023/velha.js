// Criar variáveis para controlar o estado do jogo
var jogador, vencedor = null;

// Elementos HTML para exibir informações sobre o jogador atual e o vencedor
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');

//  Inicializa o jogo com o jogador X
mudarJogador('X');

// Função para atualizar o jogador atual na interface do jogo
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function escolherQuadrado(id) {
  // Verificando o id pego
  // console.log(id);

  // Verifica se o jogo já tem um vencedor, se sim, retorna sem fazer nada
  if (vencedor !== null) {
    return;
  }

  // obtem o elemento do quadrado clicado pelo ID
  var quadrado = document.getElementById(id);

  // Verifica se o quadrado já foi escolhido, se sim, retorna sem fazer nada
  if (quadrado.innerHTML !== '-') {
    return;
  }

  // Define o conteúdo do quadrado com o símbolo do jogador atual ('X' ou 'O')
  quadrado.innerHTML = jogador;

  // Altera a cor do texto dentro do quadrado para preto
  quadrado.style.color = '#000';

  // Alterna para o próximo jogador ('X' para 'O' e vice-versa)
  if (jogador === 'X') {
    jogador = 'O';
  } else {
    jogador = 'X'
  }

  // Atualiza o elemento que exibe o jogador atual
  mudarJogador(jogador);

  checaVencedor();
}

// Função para verificar se há um vencedor
function checaVencedor() {
  // Obtem os elementos dos quadrados para todas as possíveis sequências vencedoras
  var quadrado1 = document.getElementById(1);
  var quadrado2 = document.getElementById(2);
  var quadrado3 = document.getElementById(3);
  var quadrado4 = document.getElementById(4);
  var quadrado5 = document.getElementById(5);
  var quadrado6 = document.getElementById(6);
  var quadrado7 = document.getElementById(7);
  var quadrado8 = document.getElementById(8);
  var quadrado9 = document.getElementById(9);

  // Verifica todas as posíveis sequências vencedoras e chama as funções para atualzar o jogo
  if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }

  if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }

  if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }

   if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }

  if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }

  if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado3);
    return;
  }
}

// Função para atualizar o vencedor
function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

// Função para mudar a cor dos quadrados vencedores
function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#4876FF'; // Azul Royal
  quadrado2.style.background = '#4876FF';
  quadrado3.style.background = '#4876FF';
}


function checaSequencia(quadrado1, quadrado2, quadrado3) {
  var eIgual = false;
  if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
    eIgual = true;
  }
  return eIgual;
}

/*
function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = '';
  
  var quadrado1 = document.getElementById(1);
  quadrado1.style.background = #eee;
  quadrado1.style.color = #eee;
  quadrado1.innerHTML = '-';

  var quadrado2 = document.getElementById(2);
  quadrado2.style.background = #eee;
  quadrado2.style.color = #eee;
  quadrado2.innerHTML = '-';

  var quadrado3 = document.getElementById(3);
  quadrado3.style.background = #eee;
  quadrado3.style.color = #eee;
  quadrado3.innerHTML = '-';

  var quadrado4 = document.getElementById(4);
  quadrado4.style.background = #eee;
  quadrado4.style.color = #eee;
  quadrado4.innerHTML = '-';

  var quadrado5 = document.getElementById(5);
  quadrado5.style.background = #eee;
  quadrado5.style.color = #eee;
  quadrado5.innerHTML = '-';

  var quadrado6 = document.getElementById(6);
  quadrado6.style.background = #eee;
  quadrado6.style.color = #eee;
  quadrado6.innerHTML = '-';

  var quadrado7 = document.getElementById(7);
  quadrado7.style.background = #eee;
  quadrado7.style.color = #eee;
  quadrado7.innerHTML = '-';

  var quadrado8 = document.getElementById(8);
  quadrado8.style.background = #eee;
  quadrado8.style.color = #eee;
  quadrado8.innerHTML = '-';

  var quadrado9 = document.getElementById(9);
  quadrado9.style.background = #eee;
  quadrado9.style.color = #eee;
  quadrado9.innerHTML = '-';

  mudarJogador('X');
}
*/

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = ' ';
  var i = 1;
  while (i <= 9) {
    var quadrado = document.getElementById(i);
    quadrado.style.background = '#eee';
    quadrado.style.color = '#eee';
    quadrado.innerHTML = '-';
    i++;
  }

  mudarJogador('X');
}
