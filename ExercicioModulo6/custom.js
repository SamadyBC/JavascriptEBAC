// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {
  $(".owl-carousel").owlCarousel();

  let titulos = $("h4"); // tag

  let itens = $(".featured-item"); // class

  let destaques = $("#featured"); // id

  console.log(titulos.first());

  // Configuração de produtos

  $(".featured-item a").addClass("btn btn-dark stretch-link");

  $(".featured-item:first h4").append(
    '<span class="badge bg-secondary">Novo</span>'
  );
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

  /*
   * Callback
   * Entendendo ações que começam ao termino de outra
   */

  $(".featured-item:nth(1)")
    .hide(500, function () {
      console.log($(this).find("h4").text() + " esgotado");
    })
    .show(500, function () {
      console.log($(this).find("h4").text() + " em estoque");
    });

  /*
   * Animaçoes
   *
   */

  const time = 1000;

  $(".featured-item:nth(0)")
    .hide(time)
    .show(time)
    .fadeOut(time)
    .fadeIn(time)
    .toggle(time)
    .toggle(time);

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
   * Event Listener submit de form
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

  /*
   * Funcao de Validacao dos Campos do Formulario
   * TODO:
   * 1- Incrementar se o nome é valido (mais de 2 caracteres)
   * 2- Checar se o email é valido (necessita do formato padrao de email /[a-z]@[a-z]\.com/)
   * 3- Checar a validade da entrada do campo do CPF
   */

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

  $(".switch").on("click", function () {
    console.log("Entrou funcao dark mode")
    /*$([".navbar [class*='-light']", ".navbar [class*='-dark']"]).each((i, element) => {
      $(element).toggleClass("bg-light bg-dark");
      $(element).toggleClass("navbar-light navbar-dark"); 
    });*/
  });
});
