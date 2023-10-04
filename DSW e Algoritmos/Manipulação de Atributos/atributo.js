
function trocarImagem(filename) {
  document.querySelector('.imagem').setAttribute('src', 'img/'+filename);
}

function trocarImagem2(filename, animalname) {
  document.querySelector('.imagem2').setAttribute('src', 'img/' + filename);
  document.querySelector('.imagem2').setAttribute('data-animal', animalname);
}

function pegarAnimal() {
  let animal = document.querySelector('.imagem2').getAttribute('data-animal');
  alert("O animal é: "+animal);
}
