function multiForm(){

    var cont = document.getElementById("n1").value;

    console.log(cont)

    var d = 1;

    for( var c = 0; c < cont; c++){

        

        var input = document.createElement("input");

        document.getElementById("form").appendChild(input);

        document.getElementsByTagName("input")[d].setAttribute("name", "numbers");

        d++;

        
    }
    
}

