"use strict";
/*
Declaracao que pode ser anexada numa classe ou ação, tem a função de fazer anotações
Trbaalha com tipos diferentes.
Recebe parametros obrigatorios para iniciar tipos decorators Class, Property, Parameter, Method, Acessor
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Factory
function log(prefix) {
    return (target) => {
        console.log(`prefix: ${prefix}, target: ${target}`);
    };
}
let Foo = class Foo {
};
Foo = __decorate([
    log("Decorator")
], Foo);
//# sourceMappingURL=decorators.js.map