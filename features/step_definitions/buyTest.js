const {Given, When, Then} = require('cucumber');
const assert = require ('assert').strict;
const {getTexto,comprarProductos,validarStock,limpiarCarrito} =
require('../components_functions/stockFunction');
const {comparacionPrecios,buyProducts} = require('../components_functions/buyFunction');

const urlPotatoShop = "http://localhost:4200/";
const timeOut = 2000;
var numeroDeCompras;
var priceRusserPotato;
var comprarRusserPotato;
var validar;

 Given('I want to buy some potatoes',()=>{
    browser.url(urlPotatoShop);
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
     let comprar = buyProducts();
  }else{browser.pause(timeOut);}

 });

 Given('I dont have a enough money',()=>{

 }); 
 When('I try to pay the potatoes',()=>{

 }); 
 Then('I cant buy it',()=>{

 });


/* Sample_Syntax */
/*
defineSupportCode(function ({Given, When, Then}) {

  Given(/^I want to buy some potatoes$/, function(){
    browser.click("button.btn.btn-primary");
  });

  When(/^I click to buy on the cart after selecting some potatoes$/, function(){
    browser.click("button#dropdownCart");
    browser.click("button#purchase");
  });

  Then(/^I must see "Thank you for your purchase!" on my screen$/, function(){
    const checkOk = "div.modal-header h4.modal-title";
    checkOk.includes("Thank you for your purchase!");
  })
})
*/
