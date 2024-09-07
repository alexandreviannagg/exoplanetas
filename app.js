let sectionNomesPlanetas = document.getElementById("planetas-conteudo-nomes");
let sectionPlanetas = document.getElementById("planetas-conteudo");
sectionNomesPlanetas.style.display = 'none';
sectionPlanetas.style.display = 'none';

function pesquisar() {
    sectionNomesPlanetas.style.display = 'none';
    sectionPlanetas.style.display = 'block';

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    if (campoPesquisa == "") {
       
        sectionPlanetas.innerHTML = `
        <div class="img-planetas">
                <img src="./img/planetachorando.png" alt="">
                <p class="aviso">Ops! Vi que você não digitou nada. Tente novamente para o James Web encontrar seu planeta</p>
            </div>
        `;

        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o HTML gerado
    let resultado = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada planeta nos dados
    for (let index of dados) {
        nome = index.nome.toLowerCase();
        descricao = index.descricao.toLowerCase();
        tags = index.tags.toLowerCase();

        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento div para cada planeta
            resultado += `
            <div class="conteudo-planeta">
                <div class="nome-planeta">
                    <h3>${index.nome}</h3>
                </div>
                <div class="img-planetas">
                    <img src=${index.img} alt="">
                    <p class="aviso">${index.ftnaoencontrada}</p> <!--Adicionei essa informação caso o planeta não ter uma ilustração ideal, ai optei por colocar a foto do planeta terra no lugar-->
                </div>
                <div class="descricao-planetas">
                    <p class="descricao-texto" style="color: black;">
                        ${index.descricao}
                    </p>
                </div>
                <a href=${index.link} target="_blank">
                    <button class="botao-info">Mais informações</button>
                </a>
            </div>
        `;
        } 
    }

    if(!resultado) {
        sectionPlanetas.innerHTML = `
            <div class="img-planetas">
                <img src="./img/planetachorando.png" alt="">
                <p class="aviso">Ops! Parece que o James Web não tem o conhecimento do seu planeta ainda. Tente novamente para o James Web encontrar seu planeta</p>
            </div>
        `;
        return;
    }

    // Atribui o HTML gerado à seção de planetas
    sectionPlanetas.innerHTML = resultado;
}



  

  function verNomes() {

    sectionPlanetas.style.display = 'none';
    sectionNomesPlanetas.style.display = 'block';
    
    // Inicializa uma string vazia para armazenar o HTML gerado
    let resultadoNomes = "";
  
    // Itera sobre cada planeta nos dados e adiciona à div existente
    for (let index of dados) {
      resultadoNomes += `
      <button class="excluir-lista" onclick="excluirLista()">X</button>
        <div class="conteudo-planeta">
          <div class="nome-planeta">
            <a href=""><h3 class="nomes-planetas--titulo">${index.nome}</h3></a>
          </div>
        </div>
      `;
    }

    // Adiciona o conteúdo da lista à div correspondente
    sectionNomesPlanetas.innerHTML = resultadoNomes;
  }

  function excluirLista() {

    while (sectionNomesPlanetas.firstChild) {
        sectionNomesPlanetas.removeChild(sectionNomesPlanetas.firstChild);
    }

    sectionNomesPlanetas.style.display = 'none';
    
  }