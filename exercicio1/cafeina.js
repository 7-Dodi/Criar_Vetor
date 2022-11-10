const resultado= document.querySelector("#result"); //Criando as constantes
const button= document.querySelector("button");

function maiorNum (vetor){ //Função para encontrar o maior valor
    let maior= vetor[0];
    for (const k in vetor) {
        if((vetor[k]*1)>maior){
            maior= vetor[k];
        }
    }
    return maior;
}

function menorNum (vetor){ //Função para encontar o menor valor
    let menor= vetor[0];
    for (const k in vetor) {
        if((vetor[k]*1)<menor){
            menor= vetor[k];
        }
    }
    return menor;
}

button.addEventListener("click", () =>{
    const numero= document.querySelector("#num").value; //Capturando os elementos
    const termo= document.querySelector("#sep").value; //Capturando o separador

    const vetor= numero.split(","); //Transformando o elemento em vetor
    let numMaior= maiorNum(vetor); //Chamando as funções
    let numMenor= menorNum(vetor);

    const item= document.createElement("div");  //Criando os itens de resposta
    const div= document.createElement("div"); 
    const texto= document.createElement("span");
    const resp= document.createElement("span");

    texto.textContent= `Vetor: ${vetor.join(termo)}`;//Imprimindo o vetor com o separdor escolhido
    resp.textContent= `O maior numero eh: ${numMaior}, e o menor numero eh: ${numMenor} `;
 
    item.appendChild(texto); //Organiazando os elementos criados
    div.appendChild(resp);
    resultado.appendChild(item);
    resultado.appendChild(div);
});