function juntarNomes(){

  
  var nome1 = document.getElementById("1").value;
  var nome2 = document.getElementById("2").value;
  var nome3 =[];
  cont1 = 0;
  

  if(nome1.length > nome2.length){

    for (cont = 0; cont <= nome1.length; cont++){

      
      nome3[cont1] = nome1[cont]
      cont1 ++
      nome3[cont1] = nome2[cont]
      cont1 ++
    }

  }else{

    for (cont = 0; cont <= nome2.length; cont++){

      
      nome3[cont1] = nome1[cont]
      cont1 ++
      nome3[cont1] = nome2[cont]
      cont1 ++
    }

  }

  document.getElementById('3').value = nome3.join('');

  


}