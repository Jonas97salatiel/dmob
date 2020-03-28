function formularioJuridica(){

  juridica = document.getElementById("1").value;
  console.log(juridica);
  
  document.getElementById("divJuridica").style.visibility ="visible";
  document.getElementById("divFisica").style.visibility ="collapse";

}


function formularioFisica(){


  fisica = document.getElementById("2").value;
  console.log(fisica);

  document.getElementById("divJuridica").style.visibility ="collapse";
  document.getElementById("divFisica").style.visibility ="visible";

}
