let cadastrar = document.getElementById("cadastro")
const lista = [];
let sortear = document.getElementById("sorteado");
let sortudo = document.getElementById("sortudo");
let nome = document.getElementById("nome");

function sorte() {
    lista.push(nome.value);
    console.log(lista)
    console.log(Math.round(Math.random()*lista.length))
    
}

function eita(){

    sortudo.innerText = lista[Math.round(Math.random()*lista.length)]
    }

cadastrar.addEventListener("click", sorte)
sortear.addEventListener("click", eita)