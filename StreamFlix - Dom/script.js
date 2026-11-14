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

    const badge = document.createElement ("span"); //colocar tag de span

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


function resetarDemo2(){

    //mudar titulo
    document.getElementById("titulo-destaque").textContent = "The Witcher";//sem guardar em uma variavél, trazer de volta
    //mudar sinopse
    document.getElementById ("sinopse-destaque").textContent = 'Geralt de Rívia, um caçador de monstros solitário, luta para encontrar seu lugar em um mundo onde as pessoas são mais perversas que bestas.';
    //poster
    document.getElementById ("poster-destaque").src = 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg';

    document.getElementById ("poster-destaque").alt = "The Witcher";

    document.getElementById ("poster-destaque").style.opacity = "1"; //colocar o valor em aspas quando opacity
    
    //tirar em Alta
    document.getElementById ('badge-container').innerHTML = ""; //com innerHTML consegue mexer na tag

    //tirar classe adicionada
    document.getElementById ('filme-destaque').classList.remove ("destaque");

    //limpar input
    document.getElementById ("input-busca").value = ""; //input traz valor e não texto, por isso usa /value/ e não /textContent/

}


function adicionarFilme() {

    const input = document.getElementById ("input-filme");

    const nomeFilme = input.value.trim();
    if (nomeFilme === ""){
        alert ("Digite o nome do filme!😒")
        return;
    }

    const li = document.createElement ("li");

    const span = document.createElement ("span");
    span.textContent = "🎬 " + nomeFilme;

    const btnRemover = document.createElement ("button");
    btnRemover.textContent = "🗑️ Remover";

    btnRemover.onclick = function (){  //quando o botão for clicado

        this.parentElement.remove(); 
        //this = é este objeto atual que estou mexendo
        //parentElement = o btnRemover é um filho da li, assim com parentElement consigo chamar a li

    };

    li.appendChild (span); //span fica dentro da li
    li.appendChild (btnRemover); //btnRemover fica dentro da li

    const lista = document.getElementById ("minha-lista");

    lista.appendChild (li); //li fica dentro de lista (ul lá do html)

    input.value = "";

    //voltar foco para o input
    input.focus();

    li.classList.add('item-novo');

}

document.addEventListener("DOMContentLoaded", function () { // função espera o html renderizar 

    inicializarGaleria(); //carregar todos os filmes e séries


const inputFiltro = document.getElementById("input-filtro");

if (inputFiltro) {
    
    //quando clicar, colar algo, ou digitar, precisa rodar a função
    inputFiltro.addEventListener("input", function () {

            filtrarFilmes(this.value)  //this= elemento que disparou a função / value = pegar cada disparo de valor / cada tecla
    });

}

});


const todosFilmes = [ //NodeList
    { nome: 'Stranger Things',      tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg' },
    { nome: 'Breaking Bad',         tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg' },
    { nome: 'The Witcher',          tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg' },
    { nome: 'La Casa de Papel',     tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/MoEKaPFHABtA1xKoOteirGaHl1.jpg' },
    { nome: 'Round 6',              tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg' },
    { nome: 'Peaky Blinders',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/i0uajcHH9yogXMfDHpOXexIukG9.jpg' },
    { nome: 'Wednesday',            tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg' },
    { nome: 'The Last of Us',       tipo: 'Série',  img: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg' },
    { nome: 'Oppenheimer',          tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg' },
    { nome: 'Barbie',               tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' },
    { nome: 'Duna',                 tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg' },
    { nome: 'Coringa',              tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' },
    { nome: 'A Origem',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg' },
    { nome: 'Interestelar',         tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
    { nome: 'Parasita',             tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg' },
    { nome: 'Vingadores: Ultimato', tipo: 'Filme',  img: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg' },
];

function inicializarGaleria (){

    const galeria = document.getElementById ("galeria-filmes");

    if (!galeria) return //!galeria = diferente de galeria

    todosFilmes.forEach (function(filme) { //posso usar forEach com uma Node List
        //criar os cards da galeria
        const card = document.createElement ("div");

        card.classList = "card-galeria"; //atribuir classe

        //criar atributo dentro da tag
        card.dataset.nome = filme.nome;

        //com crase é melhor pra funcionar, puxar a imagem do meu filme
        card.innerHTML = `
        <img
        src = "${filme.img}"
        alt = "${filme.nome}"
        oneerror = "this.style.background='#2a2a2a'" 
        >

        <div class= "card-nome"> 
        ${filme.nome}
        </div>

        <div class= "card-tipo">
        ${filme.tipo}
        </div>
        `;


        galeria.appendChild (card); //preciso trazer o card para a galeria
    });

}


function filtrarFilmes (termoBusca){


    const termo = termoBusca.toLowerCase().trim(); //tratar cada tecla que for clicada, o que esta sendo digitado


    const cards = document.querySelectorAll (".card-galeria"); //puxar todos


    let visiveis = 0;


    cards.forEach (function (card) {

        const nomeDoFilme = card.dataset.nome.toLowerCase();

        const combina = termo === "" || nomeDoFilme.includes(termo);//um ou outro, procurar algo dentro do nome 

        if (combina) {
            card.classList.remove ("oculto")//classList tira ou adiciona sem mexer no original
            visiveis ++;
        } else {
            card.classList.add("oculto");
        }
    });

    const semResultado = document.getElementById("sem-resultado"); //sem resultado = não tem card nenhum

    if (semResultado) { //verificar se o semResultado existe
        semResultado.style.display = visiveis === 0 ? "block" : "none" //aparecer e desaparecer com o paragrafo
    }

};

