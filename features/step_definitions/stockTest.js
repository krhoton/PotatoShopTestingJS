const {Given, When, Then} = require('cucumber');
const assert = require ('assert').strict;
const urlPotatoShop = "http://localhost:4200/";
var numeroDeCompras;
var stockRusserPotato_inicial;
var comprarRusserPotato;
var stockRusserPotato_final;
var validar;



function getTexto(selector,index){
    return ($$(selector).map((elemento) => elemento.getText()))[index];
}
function comprarProductos(selectorProducto, cantidad, index){
    for(let i = 0; i<cantidad; i++){
        $$(selectorProducto)[index].click();
    }return cantidad;
}
function validarStock(stockInicial, stockFinal, numeroDeCompras){
    let res = stockInicial - numeroDeCompras;
    return parseInt(stockFinal) === res;
}

Given(/^I am on potatoeshop page$/,()=>{
    browser.url(urlPotatoShop);
});

When(/^I add a product to cart$/,()=>{ 
    numeroDeCompras=1;
    stockRusserPotato_inicial = getTexto('.col.stock',3);
    comprarRusserPotato = comprarProductos('.add-to-cart',numeroDeCompras,3); 
});
Then(/^discount the product from stock$/,()=>{
    stockRusserPotato_final = getTexto('.col.stock',3);
    validar = validarStock(stockRusserPotato_inicial,stockRusserPotato_final, comprarRusserPotato);
    browser.pause(2000);       
});

Given(/^I add all product to cart$/,()=>{
    if(validar === true){
        numeroDeCompras += 7;//8 es el stockInicial que hay de este producto (7+1=8)
        stockRusserPotato_inicial = getTexto('.col.stock',3);
        comprarRusserPotato = comprarProductos('.add-to-cart',numeroDeCompras,3);
    }else{browser.pause(100000);}//lo he puesto para que falle el test, si conocen otra forma de que pare el test si el stock es incorrecto (=false) lo comentan :) 
});
When(/^I dont have stock of that product$/,()=>{
    browser.pause(2000);
    browser.click('#alert');
    browser.pause(2000);
       
    console.log('/n recodemos que tiene que ser 8, numeroDeCompras= '+numeroDeCompras);
    //browser.pause(8000);
}); 
Then(/^I have all product in my cart$/,()=>{

});


Given(/^there arent stock of product$/,()=>{

});
When(/^I add the product in my cart$/,()=>{

});
Then(/^I cant add the product$/,()=>{

});
  

Given(/^I add all product in my cart$/,()=>{

});
When(/^I was wrong to buy the product$/,()=>{

});
Then(/^I clear the cart$/,()=>{

});
Then(/^the stock of product come back the initial state$/,()=>{

});  