

let ulFigures = document.querySelector(".AllCardsFigures")
let ulPaintings = document.querySelector(".AllCardsPaintings")

function listarProdutos(listaProdutos, departamentoVitrine, vitrine){

    for(let i = 0; i<listaProdutos.length; i++){
        
        let produto             = listaProdutos[i]
        let departamentoProduto = produto.departamento
    

    if(departamentoProduto == departamentoVitrine){
        let cardProduto    = criarCardProduto(produto)
        vitrine.appendChild(cardProduto)
    }
    }

    function criarCardProduto(produto){

         
        let nome        = produto.nome
        let preco       = produto.valor
        let imgeUrl     = produto.imagem
        
        let tagLi       = document.createElement("li")
        let tagImge     = document.createElement("img")
        let tagNome     = document.createElement("h4")
        let tagPreco    = document.createElement("p")
         
        tagImge.src          = imgeUrl
        tagImge.alt          = nome
        tagNome.innerText    = nome
        tagPreco.innerText   = preco
    
        tagLi.appendChild(tagImge)
        tagLi.appendChild(tagNome)
        tagLi.appendChild(tagPreco)
        
        return tagLi
    }
    
}
listarProdutos(listFigure, "actionFigures", ulFigures)
listarProdutos(listPainting, "paintings", ulPaintings)
