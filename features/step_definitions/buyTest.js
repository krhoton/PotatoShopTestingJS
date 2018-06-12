const {Given, When, Then} = require('cucumber');
const assert = require ('assert').strict;
const {getTexto,comprarProductos,limpiarCarrito} = require('../components_functions/stockFunction');
const {comparacionPrecios,buyProducts} = require('../components_functions/buyFunction');

var numeroDeCompras;
var priceRusserPotato;
var comprarRusserPotato;
var validar;

Given('I want to buy some potatoes',()=>{
    browser.url("http://localhost:4200/");
    numeroDeCompras=3;
    comprarRusserPotato = comprarProductos('.add-to-cart',numeroDeCompras,3); 
}); 
When('I add to cart some potatoes',()=>{
    priceRusserPotato = getTexto('.col.price',3);
  }); 
Then('I see the total price of potatoes I added',()=>{
    let priceCart = browser.getText('#dropdownCart');
    assert.equal(comparacionPrecios(priceCart,priceRusserPotato,numeroDeCompras),true);
    validar = comparacionPrecios(priceCart,priceRusserPotato,numeroDeCompras);  
  });
Then('buy the potatoes',()=>{
  if(validar === true){
    assert.equal(buyProducts(),true);
  }
 });

Given('I dont have a enough money',()=>{
    limpiarCarrito();
 }); 
When('I try to pay the potatoes',()=>{
   browser.click('#dropdownCart');
   browser.click('#purchase');
}); 
Then('I cant buy it',()=>{
    browser.waitForVisible('#alert')
    browser.click('#alert');
});