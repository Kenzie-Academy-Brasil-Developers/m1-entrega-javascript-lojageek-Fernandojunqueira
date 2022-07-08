
let listFigure = [];
let listPainting = [];

function createActionItem(imagem,nome,valor,departamento){
    
    const obj = {};
    obj.imagem = imagem;
    obj.nome = nome;
    obj.valor = valor;
    obj.departamento = departamento;

    listFigure.push(obj)

    
    };
function createPaintingItem(imagem,nome,valor,departamento){
    
    const obj = {};
    obj.imagem = imagem;
    obj.nome = nome;
    obj.valor = valor;
    obj.departamento = departamento;

    listPainting.push(obj)

    }    
    
    createActionItem('./assets/img/actions/animewoman.jpg','Anime Woman','R$250,00','actionFigures')
    createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Goku Live Action','R$290,00','actionFigures')
    createActionItem('./assets/img/actions/starwarspersonagem.jpg','Yoda','R$500,00','actionFigures')
    createPaintingItem('./assets/img/painting/clock.jpg','Quadro Relógio','R$150,00',"paintings")
    createPaintingItem('./assets/img/painting/gamepad.jpg','Quadro Gamepad','R$150,00',"paintings")
    createPaintingItem('./assets/img/painting/personagem.jpg','Quadro do C-3PO','R$150,00',"paintings")
    
    console.log(listFigure)
    console.log(listPainting)

