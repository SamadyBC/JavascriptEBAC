/*
Declaracao que pode ser anexada numa classe ou ação, tem a função de fazer anotações 
Trbaalha com tipos diferentes.
Recebe parametros obrigatorios para iniciar tipos decorators Class, Property, Parameter, Method, Acessor
*/

// Factory

function log(prefix: string) {
  return (target: any) => {
    console.log(`prefix: ${prefix}, target: ${target}`);
  };
}

@log("Decorator")
class Foo {}
