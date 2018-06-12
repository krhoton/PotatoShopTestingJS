const assert = require('assert').strict;
const {Given, When, Then} = require('cucumber');
let totalPrice = "";

/*--- Scenario: Uploading a order ---*/

// http://webdriver.io/api/utility/uploadFile.html // Mirar link

Given(/^I have a prepared order and the cart is clear$/, function(){

  browser.click("button#dropdownCart");
  totalPrice = browser.getText("td#totalPrice");
  assert.equal(totalPrice, "0.00€");

});

/*--- Aqui lo que hará será buscar a partir de la ruta dada el archivo a subir ---*/

When(/^I send it to the shop$/, function(){

  browser.uploadFile("./orders/order.csv");
  browser.chooseFile("input#orderUpload", "./orders/order.csv");
  totalPrice = browser.getText("td#totalPrice");

});

Then(/^I will have it on the cart/, function(){

  browser.click("button#dropdownCart");
  assert.notEqual(totalPrice, "0.00€");

});
