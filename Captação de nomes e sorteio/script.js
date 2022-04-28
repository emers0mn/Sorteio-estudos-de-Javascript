let cadastrar = document.getElementById("cadastro")
const lista = [];
let nome = document.getElementById("nome");

function sorte() {
    
    if (nome.value.includes(",")) {
        lista.push(nome.value);
    }
    
    sortudo.innerText = "A pessoa sorteada é: " + lista[Math.round(Math.random()*lista.length)] 
}

cadastrar.addEventListener("click", sorte)