function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

function contagemRegressiva(numero){

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

function verifyMessage(element, status){

    if(status){
        document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        element.classList.add('erro');
        element.parentNode.classList.add('erro');
        return true;
    }else{
        document.querySelector('.mensagem').innerHTML = "";
        element.classList.remove('erro');
        element.parentNode.classList.remove('erro');
    }

    return false;
}

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault(); //Prevent the default behaviour of the event, in this case is preventing the submission of the event;
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

    });


function validaCampo(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault(); //Prevent the default behaviour of the event, in this case is preventing the submission of the event;
        let verified;
        if(this.value != ""){
            verified = verifyMessage(elemento, 0);
        } else {
            verified = verifyMessage(elemento, 1);
        }

    });

}

function validaCampoNumerico(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault(); //Prevent the default behaviour of the event, in this case is preventing the submission of the event;

        let verified;
        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; //Check weather the inputed data is a "CEP" or not

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){ //Check whether the inputed data is not empty AND is a digit AND is between 0 and 10
            verified = verifyMessage(elemento, 0);
        } else {
            verified = verifyMessage(elemento, 1);
        }

    });

}

function validaCEP(element){
    
    element.addEventListener('focusout', function(event) {

        event.preventDefault(); //Prevent the default behaviour of the event, in this case is preventing the submission of the event;

        let verified;
        let numero = this.value.match(/^[\d]{5}-[\d]{3}/) ? this.value.replace(/-/, "") : this.value; //Check weather the inputed data is a "CEP" or not

        if(numero != "" && numero.length <= 8){ //Check whether the inputed data is not empty AND is a digit AND is between 0 and 10
            verified = verifyMessage(element, 0);
        } else {
            verified = verifyMessage(element, 1);
        }

    });
}


function validaEmail(elemento){

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault(); //Prevent the default behaviour of the event, in this case is preventing the submission of the event;

        let verified;
        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i; //check the format of an email address - The flag "i" indicate that capital letters and regular are ignored
        if(this.value.match(emailValido)) {
            verified = verifyMessage(elemento, 0);
        } else {
            verified = verifyMessage(elemento, 1);
        }

    });

}


function validaUF(element){
    element.addEventListener('focusout', function(event){
        
        event.preventDefault();

        let verified;
        const ufValida = /^[A-Z]{2}$/;
        if(this.value.match(ufValida)){
            verified = verifyMessage(element, 0);
        }else{
            verified = verifyMessage(element, 1);
        }
    });
}

let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numerico');
let camposCEP = document.querySelectorAll('input.cep');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.uf');

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposCEP) {
    validaCEP(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}

for (let emFoco of camposUF){
    validaUF(emFoco);
}
