
         
function validacao() { 
         
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var senha = document.getElementById("senha").value;
        var senharep = document.getElementById("senharep").value;
        
        

        if (nome == "") {
            alert("Nome não informado");
        
           nome.focus();

            return;
          }


        if (email == "" || email.indexOf("@") === -1 ) {
            alert("Campo E-mail preenchido incorretamente");
        
            regsiter.email.focus();
            
            return false;
          }





        if ((senha.length <= 4) ||(senha.length > 10)){
            
            alert("Senha invalida. Informe uma senha com 6 a 10 caracteres")
            
            regsiter.senha.focus();

            return false;

        }

        if (senha !== senharep ){
            
            alert("Senha não confere")
            
            regsiter.senharep.focus();

            return false;

        }


}
            
    
