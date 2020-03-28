
function trocarPessoas(){

    var form = document.getElementById("myForm").length;

    console.log(form);

    var pessoas = [];

    for ( cont = 0; cont < form; cont++){

      pessoas[cont] = [document.forms[0].elements[cont].value];
       
      console.log(pessoas);

    }

    document.getElementById('1').value = pessoas[4];
    document.getElementById('2').value = pessoas[3];
    document.getElementById('3').value = pessoas[2];
    document.getElementById('4').value = pessoas[1];
    document.getElementById('5').value = pessoas[0];

}

