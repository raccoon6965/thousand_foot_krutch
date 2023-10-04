
function apertouMouse() {
  console.log("Disparou o evento onMouseDown");
}

function soltouMouse() {
  console.log("Disparou o evento onMouseUp"); 
}

function mouseEmCima() {
  console.log("Disparou o evento onMouseOver");
}

function mouseSaiuDeCima() {
  console.log("Disparou o evento onMouseOut");
}

function moveuMouse() {
  console.log("Disparou o evento onMouseMove");
}

function clicou() {
  console.log("Disparou o evento onClick");
}

function botaoDireito() {
  console.log("Disparou o evento onContextMenu");

  return false;
}

function cliqueDuplo() {
  console.log("Disparou o evento ondblClick");
}

// DIV 
function clicar() {
  var area = document.getElementById('area');
  area.innerHTML = "Disparou onClick";
  area.style.background = "red";
}

function entrar() {
  var area2 = document.getElementById('area');
  area2.innerHTML = "Disparou onMouseOver";
}

function sair() {
  var area3 = document.getElementById('area');
  area.innerHTML = "Disparou onMouseOut";
  area3.style.background='green';
}