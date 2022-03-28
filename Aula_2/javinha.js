document.querySelector("#click").addEventListener('click', () => {
    alert("Você clicou no botão")
});

document.querySelector("#texto").addEventListener('keydown', (event) => {
    console.log(event.target.value)
})

function square(number){
    return number * number
}

function print(text = "Olá"){
    alert(text)
}

const print2 = (text = "Olá") => {
    return text
}