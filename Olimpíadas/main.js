// Selecionando o botão com a classe 'botao'
const botao = document.querySelector(".botao");

// Adicionando um evento de clique ao botão que chama a função 'pesquisar' quando clicado
botao.addEventListener('click', pesquisar);

// Função que será chamada quando o botão for clicado
function pesquisar(){
    // Selecionando o campo de pesquisa onde os resultados serão exibidos
    const pesquisa = document.querySelector(".resultados-pesquisa");

    // Selecionando a barra de pesquisa com o id 'campo-pesquisa'
    // Convertendo o valor inserido para letras minúsculas
    const campoPesquisa = document.querySelector("#campo-pesquisa").value.toLowerCase();

    // Variável que irá armazenar o HTML gerado para os resultados da pesquisa
    let resultados = '';
    // Variável que armazena temporariamente o título do item atual na lista 'dados'
    let titulo = '';
    // Variável que armazena temporariamente a descrição do item atual na lista 'dados'
    let descricao = '';
     // Variável que armazena temporariamente o tags do item atual na lista 'dados'
    let tags = '';

    // Para cada item na lista de 'dados', um HTML correspondente será gerado
    for(let dado of dados){
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        // Se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <!-- Criando um link com o título do dado, que abre em uma nova aba com o perfil de Instagram -->
                    <a href=${dado.instagram} target="_blank"> ${dado.titulo}</a>
                </h2>
                <!-- Descrição do dado -->
                <p>${dado.descricao}</p>
                <!-- Link adicional para mais informações -->
                <a href=${dado.link} target="_blank" class="link-wiki">Mais informações</a>
            </div>
            `;
        }
    }

    // Se campoPesquisa for uma string vazia
    if(!campoPesquisa){
        pesquisa.innerHTML = '<p>Nada foi encontrado. Você precisar digitar o nome de um atleta ou esporte </P>'
        return;
    }

    // Se campoPesquisa não estiver vazia, mas não encontar nada
    if(!resultados){
        pesquisa.innerHTML = '<p>Nada foi encontrado</P>'
        return;
    }

    // Inserindo o HTML gerado dentro do elemento 'resultados-pesquisa'
    pesquisa.innerHTML = resultados;
}





