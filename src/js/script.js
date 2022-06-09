function boxCard(card){
    const tagUl = document.querySelector(".container");
    const tagLi = document.createElement("li")
    tagLi.classList.add("card")

    const tagFigure = tagFigureFunction(card);
    const tagDiv = tagDivFunction(card);

    tagLi.append(tagFigure, tagDiv)
    tagUl.appendChild(tagLi)
}



function tagFigureFunction(card){
    const tagFigure = document.createElement("figure");

    const tagImg = document.createElement("img")
    tagImg.src = card.urlImage;

    tagFigure.appendChild(tagImg)

    return tagFigure
}

function tagDivFunction(card) {
    const tagDiv = document.createElement("div");

    const tagH3 = tagH3Function(card);
    const tagSpan = tagSpanFunction(card);
    const tagP = tagPFunction(card);

    tagDiv.append(tagH3, tagSpan, tagP)

    return tagDiv

}

function tagH3Function(card) {
    const tagH3 = document.createElement("h2")
    tagH3.innerText = card.nome;

    return tagH3
}


function tagSpanFunction(card) {
    const tagH3 = document.createElement("h3");
    tagH3.innerText = card.idade


    return tagH3
}

function tagPFunction(card) {
    const tagP = document.createElement("p");
    tagP.innerText = card.bio

    return tagP
}

function loopCard(card) {

    for(let i in card){
        boxCard(card[i])
    }
}

loopCard(pessoas)