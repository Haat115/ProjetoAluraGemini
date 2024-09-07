function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Caso o usuário não digite nada, exibe "Objeto não incontrado."
    if (campoPesquisa == "") {
        section.innerHTML = "Objeto não incontrado.";
        return;
    }

    // Caso o usuário digite "Sumario", exibe uma lista pré-definida
    if (campoPesquisa == "Sumario") {
        section.innerHTML = "1. Café Expresso, 2. Pingado, 3. Latte, 4. Cappuccino, 5. Mocha, 6. Frapuccino, 7. Iced coffee, 8. Espresso Tônica, 9. Café coado";
        // Interrompe a função, pois a pesquisa já foi realizada
        return;
    };

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";    

    // Itera sobre cada dado na array 'dados' (assumindo que 'dados' é um array de objetos)
    for (let dado of dados) {
        // Converte o título para lowercase para facilitar a comparação com a pesquisa
        titulo = dado.titulo.toLowerCase();

        // Verifica se o título ou o número contém o termo pesquisado
        if (dado.titulo.includes(campoPesquisa) || dado.numero.includes(campoPesquisa)) {
            // Cria uma string com a estrutura HTML de cada resultado
            resultados += `
                <div class="item-resultado">
                    <img class="descricao-nome" src="${dado.imagem}">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais..</a>
                    <h3> Ingredientes e receita </h3>
                    <p> ${dado.ingredientes} </p>
                    <p> ${dado.receita} </p>
                </div>
            `;
        }
    }

    // Atribui a string com os resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
}





