function palavraPolindroma(){

var palavra = document.getElementById("palavra").value;

if (palavra == palavra.split('').reverse().join('')) {
   alert(palavra + ' é uma palavra polindroma.');
 } else {
   alert(palavra + ' não é uma palavra polindroma');
  }


}