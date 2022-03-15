//alert("Bom dia!")
//console.log("Bom dia!")
//document.write("<h2>Bom dia!</h2>")
//document.getElementById("demo").innerHTML="Seja bem vindo"
document.getElementById("demo").style.color = "#fff"
document.getElementById("demo").style.textAlign = "center"
document.getElementById("demo").style.margin = "10px"

var btn = document.querySelector('button');

btn.addEventListener('click', function () {
    document.getElementById('demo').innerHTML = Date()
  });