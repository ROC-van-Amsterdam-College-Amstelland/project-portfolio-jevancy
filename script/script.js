function verander() {
    //hide foto 1
    document.getElementById("foto1").style.display= "none";
    //show foto 2
    document.getElementById("foto2").style.display="block";
}

//en dan voor elke foto
function verander2() {
    //hide foto 1
    document.getElementById("foto2").style.display= "none";
    //show foto 2
    document.getElementById("foto3").style.display="block";
}
function verander3() {
    //hide foto 1
    document.getElementById("foto3").style.display= "none";
    //show foto 2
    document.getElementById("foto4").style.display="block";
}

datum= new Date()
document.getElementById("vandaag").innerHTML = datum.getDate() + "-" + (datum.getMonth()+1)
    + "-" + datum.getFullYear();
