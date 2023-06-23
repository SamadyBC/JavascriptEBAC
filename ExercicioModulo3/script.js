const formulario1 = document.getElementById('formulario-01');
const formulario02 = document.getElementById("formulario-02");

function calcularMedia( notas ) {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

function aprovacao( notas ) {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}

function contagemRegressiva(numero){
    // Função Recursivas
    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0){
        contagemRegressiva(proximoNumero);
    }
}

function verifyMessage(element, status){

    let elementClasses = element.classList;

    if(status){
        //document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
        if(!elementClasses.contains("erro")){
            element.classList.add('erro');
            element.parentNode.classList.add('erro');
        }
        return true;
    }else{
        //document.querySelector('.mensagem').innerHTML = "";
        if(elementClasses.contains("erro")){
            element.classList.remove('erro');
            element.parentNode.classList.remove('erro');
        }
        return false;
    }
}

function verifyFieldsAlert(){
    let message = "Verifique o preenchimento dos campos em destaque"
    return alert(message);
}

function createDiv(){
    const submitedFormDiv = document.createElement("div");
    const currentDiv = document.getElementById("container");

    const newContent = document.createTextNode("Formulario Submetido com Sucesso!");
    
    submitedFormDiv.appendChild(newContent);
    submitedFormDiv.classList.add("submetido");

    currentDiv.append(submitedFormDiv);
}

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

if(formulario02){
    formulario02.addEventListener('submit', (event)=>{
        
        event.preventDefault(); //Prevent the default behaviour of the event, in this case is preventing the submission of the event;
        event.stopPropagation();

        let formClasses = formulario02.classList;
        
        if( formClasses.contains("erro")) { //this.getAttribute('class').match(/erro/)
            verifyFieldsAlert();
            return false;
        }else{
            createDiv();
            return true;
        }
    })
}

if(formulario1){
    // The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
    // In this specific case, the event is submit. Which is an event of the HTML Form Element; One Event is an interface representing an event which takes place in the DOM.
    // Many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them. Event-handlers are usually 
    // connected (or "attached") to various HTML elements (such as <button>, <div>, <span>, etc.) using EventTarget.addEventListener(), 

    formulario1.addEventListener('submit', function( evento ){
        // The preventDefault() method of the Event interface tells the user agent, for exampleinternet browser, that if the event does not get explicitly handled, 
        // its default action should not be taken as it normally would be.
        evento.preventDefault(); 

        // The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.
        evento.stopPropagation();

        // In this IF statement the this expression refers to the formulario01 itself. The getAttribute() method of the Element interface returns the value of a specified attribute on the element. 
        // The matches() method of the Element interface tests whether the element would be selected by the specified CSS selector.
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
}
// Global escope variables

let media;

// the Document's querySelectorAll method search for all of the CCS selectors that match the string passed as argument.
// It returns a static NodeList datatype; Nodelists are a collection of nodes. Nodelists can be static and live. Live nodeLists uptdate themselves when changes in the DOM occur.
// While, in static cases any changes in the DOM do not affect the content of the collection.
// Besides all of this, It's important to define the DOM node datatype, which basically is an interface, an abstract base class upon which many other DOM API objects are based.

let camposObrigatorios = document.querySelectorAll('input.obrigatorio'); 
let camposNumericos = document.querySelectorAll('input.numerico');
let camposCEP = document.querySelectorAll('input.cep');
let camposEmail = document.querySelectorAll('input.email');
let camposUF = document.querySelectorAll('input.uf');


// Loops to iterate through the array of objects retured by the document's method querySelectorAll
// How it works: 
// Basically, the JavaScript For Of statement loops through the values of an iterable object.
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, etc..

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