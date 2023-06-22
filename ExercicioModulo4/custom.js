//jQuery( function($){
$(document).ready(function(){

    $('.owl-carrousel').owlCarousel();

    let titulo = $('h4'); //busca por tag

    let itens = $('.featured-item'); // busca por class

    let destaques = $('#featured'); // id 

    console.log(titulo.first());
});
