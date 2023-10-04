
// onkeydown - dispara quando a tecla é pressionada
function apertouTecla(event) {
  console.log("Apertou alguma tecla: " + event.keyCode);
}

function soltouTecla(event) {
  console.log("Soltou alguma tecla: " + event.keyCode);
}

function pressionouTecla(event) {
  console.log("Pressionou alguma tecla: " + event.keyCode);
}

function pressionouShift(event) {
  console.log(event.shiftKey);
  if (event.shiftKey == true) {
    console.log("Pressionou alguma tecla com o shift");
  }
}

function apertouAltMais(event) {
  if (event.altKey == true && event.keyCode == 65) {
    console.log("Pressionou a tecla Alt junto com a tecla A")
  }
}

function apertouCtrlMaisB(event) {
  if (event.ctrlKey == true && event.keyCode == 66) {
    console.log("Pressionou a tecla ctrl junto com a tecla B")
  }
}