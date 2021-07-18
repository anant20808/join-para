function getparagraph1(){

    var inputs = [];

    for(var i = 1 ; i <=5 ; i++){
        inputs.push(document.getElementById("para" + i).value);
    }

    document.getElementById("showpara1").innerHTML = inputs.join(". ");
}

function getparagraph2(){

    var inputs = [];

    for(var i = 1 ; i <=5 ; i++){
        inputs.push(document.getElementById("paraa" + i).value);
    }

    document.getElementById("showpara2").innerHTML = inputs.join(". ");
}
