// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

  let titulos = $("h4"); // tag

  let itens = $(".featured-item"); // class

  let destaques = $("#featured"); // id

  console.log(titulos.first());

  // Configuração de produtos
  let randomNumber;
  function gerarNumeroAleatorio(){
    return Math.floor(Math.random() * 100);
  };

  function verificaEstoque(){

    randomNumber = gerarNumeroAleatorio();
    console.log(randomNumber);

    let numberProducts = $('.featured-item').length;
    for (let i = 0; i < numberProducts; i++){
      let quocientNumber = i * randomNumber;
      console.log(quocientNumber);
      if(quocientNumber % 2 != 0){
        $(".featured-item:nth("+ i +") a ").html("Indisponivel");
        $(".featured-item:nth("+ i +") a ").toggleClass("btn-primary btn-dark");
      }
    }
  }

  $(".featured-item a").addClass("btn btn-primary stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-secondary">Novo</span>'
  );

  verificaEstoque();

  /* Manipulação de Html e Css*/

  $(".featured-item h4").dblclick(function () {
    $(this).css({
      color: "#f00",
      background: "#ff0",
      "font-weight": "100",
    });
  });

  /* Manipulação de eventos*/

  $(".featured-item a").on("click", function (event) {
    event.preventDefault();

    alert("Produto esgotado");
  });


  $("#form-submit").on("click", function (event) {
    event.preventDefault();
    if ($("#email").val() != "") {
      // verifica se o tamanho da string no campo de formulario
      $("#email").animate(
        {
          opacity: "toggle",
          top: "-50",
        },
        time,
        function () {
          console.log($(this).val());
        }
      );
    }
  });

  /*
   * Event Listener .nav-modal-open
   */

  $(".nav-modal-open").on("click", function (event) {
    event.preventDefault();

    let element = $(this).attr("rel");
    let modalTitle = $(this).text();
    let modalContent = $("#" + element).html();

    //let modalBody = $("div.modal-body").html();
    //modalBody.html(modalContent);

    $(".modal-body").html(modalContent);
    $(".modal-header h5.modal-title").html(modalTitle);

    let modal1 = new bootstrap.Modal($("#modelId"));
    modal1.show();
  });

  /*
   * Event Listener submit form
   */

  $("body").on("submit", ".modal-body .form", function (event) {
    event.preventDefault();

    const inputName = $("#nome");
    const inputEmail = $("#email");

    valFormFields(inputName);
    valFormFields(inputEmail);

    if (inputName.hasClass("invalid") || inputEmail.hasClass("invalid")) {
      console.log("Verificar campos obrigatorios");
      return false;
    } else {
      $(this).submit();
    }
  });

  function valFormFields(element) {
    if (element.val() == "") {
      console.log("O campo " + element.attr("name") + " é obrigatório");

      element.parent().find(".text-muted").show();

      element.addClass("invalid");

      return false;
    } else {
      element.parent().find(".text-muted").hide();
      element.removeClass("invalid");
    }
  }

  /*
   * Event Listener blur de campos de form
   */

  $("body").on("blur", "#nome", function () {
    valFormFields($(this));
  });

  $("body").on("blur", "#email", function () {
    valFormFields($(this));
  });

  $("body").on("focus", "#date", function () {
    $(this).datepicker();
  });

  $("body").on("blur", "#date", function () {
    valFormFields($(this));
    $(this).mask("00/00/0000");
  });

  $("body").on("blur", "#time", function () {
    valFormFields($(this));
    $(this).mask("00:00:00");
  });

  $("body").on("blur", "#cep", function () {
    valFormFields($(this));
    $(this).mask("00000-000");
  });

  $("body").on("blur", "#phone", function () {
    valFormFields($(this));
    $(this).mask("00000-0000");
  });

  $("body").on("focus", "#cpf", function () {
    $(this).mask("000.000.000-00");
  });

  $("body").on("blur", "#cpf", function () {
    valFormFields($(this));
    $(this).mask("000.000.000-00");
  });

  /*
   *Event Listener - Dark mode button
   *
   */

  $(".switch").on("click", function (event) {

    event.preventDefault();

    console.log("Entrou funcao dark mode");
    let elemSelected = $(".navbar[class*='-light']").length;
    console.log(elemSelected);
    if(elemSelected){
      console.log('Elemento encontrado');
      $('body').toggleClass('bg-dark');
      $(".navbar[class*='-light']").toggleClass("navbar-light navbar-dark");
      $(".navbar[class*='-light']").toggleClass("bg-light bg-dark");
      $('.section-heading h1').toggleClass("text-light");
      $('.featured-item h4').toggleClass('text-light');
      
      let testeBtn = $(".featured-item a.btn-dark").length;
      console.log(testeBtn);
      $(".featured-item a.btn-dark").toggleClass('btn-dark btn-light');
    } else {
      console.log('Elemento nao encontrado');
      $('body').toggleClass('bg-dark');
      $(".navbar[class*='-dark']").toggleClass("navbar-light navbar-dark");
      $(".navbar[class*='-dark']").toggleClass("bg-light bg-dark");
      $('.section-heading h1').toggleClass("text-light");
      $('.featured-item h4').toggleClass('text-light');
      $(".featured-item a.btn-light").toggleClass('btn-dark btn-light');
    }
  });
});
