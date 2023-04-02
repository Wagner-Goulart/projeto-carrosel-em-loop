const slides = document.querySelectorAll('.slide');
const botoes = document.querySelectorAll('.botao');

let indiceAtual = 0
let botaoAtual = 0

setInterval(function(){

    if(indiceAtual > slides.length -1 || botaoAtual > botoes.length-1) {
        indiceAtual = 0
        botaoAtual = 0
    }
    
    trocarBotoes()
    esconderImagemAtutal()
    trocarSlides()


}, 1500)


function esconderImagemAtutal (indice) {
    const slideAtual = document.querySelector('.mostrar');
    slideAtual.classList.remove('mostrar')
}

function trocarSlides() {
    slides[indiceAtual].classList.toggle('mostrar')
    indiceAtual++
}

function trocarBotoes() {
    const botaMarcado =document.querySelector('.selecionado')
    botaMarcado.classList.remove('selecionado')
    botoes[botaoAtual].classList.toggle('selecionado')
    botaoAtual++
}