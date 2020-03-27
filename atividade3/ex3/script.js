function trocar(){
    var d = document.getElementById("select").selectedIndex;
    console.log(d);
    var body = document.getElementById("body");


    switch (d) {
        case 0:
            body.style.background = "yellow"
        break;
        case 1:
            body.style.background = "red"
        break;
        case 2:
            body.style.background = "green"
        break;
        case 3:
            body.style.background = "blue"
        break;
    }
}