// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').after() Add some html after the given element
    // $('.featured-item:first h4').before() Add  some html before some given element
    // $('.featured-item:first h4').hide() Hide the html adding the atributte display:none at the element
    // $('.featured-item:first h4').show() Take out the display:none atributte
    // $('.featured-item:first h4').remove() remove the element from the DOM
    // $('.featured-item:first h4').fadeIn(2000) Add a transition to the element's apparance
    // $('.featured-item:first h4').fadeOut() Add a transition to the element's desapparance
    // $('.featured-item:first h4').css('color', '#f00')
    /* $('.featured-item:first h4').css({
                                          'color': '#f00',
                                          'background': '#ff0',
                                          'font-weight': '100'
                                       }) */

      /* Manipulação de Html e Css*/                                 
     
      $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

      });
     
      /* Manipulação de eventos*/
      
     $('.featured-item a').on('click', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
   
     $('.featured-item:nth(1)')
        .hide(500, function(){
          console.log( $(this).find('h4').text() + "esgotado");
        })
        .show(500, function(){
          console.log( $(this).find('h4').text() + "em estoque");
        })
     
     
     







})
