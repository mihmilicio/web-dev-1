function calculaMedia() {
  var inputs = document.getElementsByTagName('input');
  var soma = 0, cont = 0, media;
  for (i = 0; i < inputs.length; i++) {
    cont++;
    soma += parseFloat(inputs[i].value);
  }

  media = soma / cont;
  document.getElementById('result').innerHTML = media;
}

