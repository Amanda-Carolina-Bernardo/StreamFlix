function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
};

function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");
    console.log(elemento); //trazer todo o elemento
    console.log(elemento.tagName); //trazer qual a tag
    console.log(elemento.textContent); //trazer o texto
    console.log(elemento.id);

    hl('#titulo-filme', 'elemento-selecionado'); //hl é para a animação
    hl('#filme-principal', 'elemento-selecionado');
};

function selecionarPorClasse() {
    const elemento = document.getElementsByClassName("mini-catalogo");
    
    hl('.genero-acao', 'highlight-acao', 2500);
    hl('.genero-drama', 'highlight-acao', 2500);
    
};

function selecionarPorQuery() {
    const elemento = document.querySelector("filme-mini genero-drama");
    
    hl('.genero-drama', 'highlight-acao', 2500);
};

function selecionarTodos() {
    
}