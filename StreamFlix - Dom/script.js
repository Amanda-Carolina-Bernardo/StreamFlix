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

function selecionarPorClasse() { //selecionar só classe
    const elementos = document.getElementsByClassName("genero-acao");
    
    console.log ("Quantidade:", elemento.lenght);

    for (let i = 0; i < elementos.length; i ++){ //não existe for it, serve para trazer o elemento 
        console.log (i, elementos [i].textContent.trim());
    }
    hl('.genero-acao', 'highlight-acao', 2500);
    hl('.genero-drama', 'highlight-acao', 2500);
};

function selecionarPorQuery() { //seleciona qualquer coisa, porém deve usar ., # para definir o que é, cuidado porque ele pega o primeiro
    const elemento = document.querySelector(".filme-mini"); //vai trazer o primeiro com essa classe, no caso o genero acao
    
    console.log (elemento);
     hl(elemento, 'elemento-selecionado');
};

function selecionarTodos() {
    const elemento = document.querySelectorAll (".filme-mini");  

    console.log ("Quantidade:", elemento.length);  

    elemento.forEach ((el, indice) => {
        console.log(indice, el.textContent.trim());
    })// ForEach só existe com uma NodeList -> é um laço de repetição para percorrer o array e animar algo por cada elemento, roda com uma função 

    elemento.forEach((el, i) => hl(el, 'elemento-selecionado', 2500, i * 300));
};

function mudarTexto(){

    const titulo = document.getElementById ("titulo-destaque");

    titulo.textContent = "Amanda";

    console.log("Novo texto:", titulo.textContent);
    
    titulo.classList.add ("texto-animado"); 
      setTimeout(() => titulo.classList.remove('texto-animado'), 1500);   //setTimeout segura a animação por alguns segundos
    hl('#titulo-destaque', 'elemento-selecionado', 2000);
};

function adicionarBadge(){

    const badge = document.createElement ("span");

    badge.className = "badge"  //className = pega a classe e coloca no span 

    badge.textContent = "⭐ Em Alta";

    const container = document.getElementById ("badge-container");
    container.innerHTML = "";//apagar tags, assim vai ficar apenas uma

    container.appendChild (badge);
    console.log ("Badge criado:", badge);

     hl('#badge-container', 'elemento-selecionado', 2000);
};



function mudarPoster() {

    const poster = document.getElementById ("poster-destaque");

    const titulo = document.getElementById ("titulo-destaque");

    const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        },
    ]
    
    //sortear o poster
    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)];
    //com array usar colchetes, Math.floor -> arredondar pra baixo, Math.random -> sortear um número aleatório
    
    poster.src = sorteado.url; //src é onde está a imagem

    poster.alt = sorteado.nome; //alt é onde tá o titulo

    titulo.textContent = sorteado.nome;

    console.log ("Poster trocado para:", sorteado.nome);

    poster.style.opacity = "0"; //opacity para esconder o poster, 0 = escondido, 1= aparente 

    poster.style.transition = "opacity 0.3s";
     
    setTimeout(() => {
        
        poster.style.opacity = "1";

    }, 300); // milisegundos

    poster.classList.add ("poster-fade-in"); //adiciona sem mudar a classe existente

    setTimeout(() => {
        poster.classList.remove("poster-fade-in"),
        600 //Roda com 300 milisegundos e remove o poster depois de 600 milisegundos
    }, 300);
}; 


function adicionarDestaque () {

    const card = document.getElementById ("filme-destaque");

    card.classList.add ("destaque"); //adiciona sem apagar a classe existente enquando com className ele remove e adiciona

    console.log ("Classes atuais:", card.className) //trazer os nomes

    setTimeout(() => {

        card.classList.remove("destaque");
        console.log ("Classe removida!")

    }, 3000);

};

function lerInput (){

    const input = document.getElementById ("input-busca");

    console.log (input);

    const texto = input.value.trim(); //trazer o valor que está no input

    //verificação valor vazio
    if (texto === "") {
        alert ("⚠️ Digite algo no primeiro campo");
        return  //retorna a função e para aqui
    };

    const titulo = document.getElementById ("titulo-destaque");

    titulo.textContent = texto //atribui ao titulo o que está no texto 

    console.log ("Valor lido:", texto);
    console.log ("Caracteres:", texto.length);

    titulo.classList.add ("texto-animado");

    setTimeout(() => titulo.classList.remove("texto-animado"), 1500); //setTimeout -> reduzir código
      
    hl(
    '#input-busca',          // elemento
    'elemento-selecionado', // classe CSS
    1500                    // duração
    );
}
