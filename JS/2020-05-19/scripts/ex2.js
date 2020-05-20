function calculaQuadrados () {
  var inputs = document.getElementsByTagName('input');
  for (i = 0; i < inputs.length; i++) {
    var num = parseFloat(inputs[i].value) || 0;
    var quad = Math.pow(num, 2);
    document.getElementById('result'+(i+1)).innerHTML = `${num}² = ${quad}`;
  }
}