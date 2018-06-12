const {Given, When, Then} = require('cucumber');
const {getTexto,comprarProductos,validarStock,limpiarCarrito} =
require('../components_functions/stockFunction');

const urlPotatoShop = "http://localhost:4200/";
const timeOut = 100000;
var numeroDeCompras;
var stockRusserPotato_inicial;
var comprarRusserPotato;
var stockRusserPotato_final;
var validar;

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
});

Given(/^I add all product to cart$/,()=>{
    if(validar === true){
        numeroDeCompras += 7;//8 es el stockInicial que hay de este producto (7+1=8)
        stockRusserPotato_inicial = getTexto('.col.stock',3);
        comprarRusserPotato = comprarProductos('.add-to-cart',numeroDeCompras,3);
    }else{browser.pause(timeOut);}
});
When(/^I dont have stock of that product$/,()=>{
    browser.click('#alert');
}); 
Then(/^I have all product in my cart$/,()=>{
    browser.click('#dropdownCart');
    let comprobarStock = getTexto('.itemQuantity',0);
    if(comprobarStock === '8x'){
        browser.click('#clearcart');//limpio el carrito
    }else{browser.pause(timeOut);}
});
//
Given(/^there arent stock of product$/,()=>{
    numeroDeCompras = 25;
    stockRusserPotato_inicial = getTexto('.col.stock',0);
    comprarRusserPotato = comprarProductos('.add-to-cart',numeroDeCompras,0);
});
When(/^I add the product in my cart$/,()=>{
    browser.click('.add-to-cart');
});
Then(/^I cant add the product$/,()=>{
    browser.click('#alert'); 
});
  
Given(/^I add all product in my cart$/,()=>{
    limpiarCarrito();
    numeroDeCompras = 25;
    comprarRusserPotato = comprarProductos('.add-to-cart',numeroDeCompras,0);
    stockRusserPotato_inicial = getTexto('.col.stock',0);//0
});
When(/^I was wrong to buy the product$/,()=>{
    browser.click('.add-to-cart');
});
Then(/^I clear the cart$/,()=>{
    browser.click('#alert');
    limpiarCarrito();
});
Then(/^the stock of product come back the initial state$/,()=>{
    stockRusserPotato_inicial = getTexto('.col.stock',0);//25
    if(stockRusserPotato_inicial === '25'){
        browser.click('.close');
    }else{browser.pause(timeOut);}
});