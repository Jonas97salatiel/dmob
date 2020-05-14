
function teste(){

    var array = ["1", "2", "3", "4", "5"];

    var arrayInt = [];
    console.log(array);

    for (var c = 0; c < array.length; c++){

      arrayInt[c] = parseInt(array[c], 10);


    }
    
    var total =  arrayInt.reduce((total, number) => total + number, 0);

    console.log(total);  


}

