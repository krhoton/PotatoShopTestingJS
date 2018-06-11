//pillamos el texto
module.exports = {

    getTexto: function(selector,index){
        return ($$(selector).map((elemento) => elemento.getText()))[index];
    },
    //compramos el numero de productos que indicamos en catidad,
    comprarProductos: function(selectorProducto, cantidad, index){
        for(let i = 0; i<cantidad; i++){
            $$(selectorProducto)[index].click();
        }return cantidad;
    },
    //validamos que el stock sea correcto
    validarStock: function(stockInicial, stockFinal, numeroDeCompras){
        let res = stockInicial - numeroDeCompras;
        return parseInt(stockFinal) === res;
    },

    limpiarCarrito: function(){
        browser.element('#dropdownCart').click();
        browser.element('#clearcart').click();
        browser.element('#dropdownCart').click();
        browser.pause(1000);
    }
}
//const assert = require ('assert').strict;
//assert.equal(validarStock(8, 7, 1),5);
//Para importartalas en los step_definitions.js
//const stockFunction = require('../components_functions/stock_function');
//import {getTexto,comprarProductos,validarStock,limpiarCarrito} from '../components_functions/stock_function.js';
