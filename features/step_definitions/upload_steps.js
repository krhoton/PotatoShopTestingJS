const assert = require('assert').strict;
const {Given, When, Then} = require('cucumber');
let totalPrice = "";
let alertMessage = "";

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

Then(/^I will have it on the cart$/, function(){

  browser.click("button#dropdownCart");
  assert.notEqual(totalPrice, "0.00€");

});

/*--- Scenario: Uploading a malformed order ---*/

Given (/^I have prepared a bad order without the right syntaxys$/, function(){

  browser.uploadFile("./orders/bad_orders/out_of_stock_order.csv");
  browser.chooseFile("input#orderUpload", "./orders/bad_orders/order.csv");

});

Then (/^I will have an issue inform on the screen$/, function() {

  alertMessage = browser.getText("div#alert");
  assert.equal(alertMessage, "Some items in your order are malformed\n×");

});

/*--- Scenario: Uploading a order and the shop hasn't got stock ---*/

Given (/^I have prepared a huge order and the cart is clear$/, function(){

  browser.click("button#dropdownCart");
  totalPrice = browser.getText("td#totalPrice");
  assert.equal(totalPrice, "0.00€");

});

When (/^I send that order to the shop$/, function() {

  browser.uploadFile("./orders/bad_orders/out_of_stock_order.csv");
  browser.chooseFile("input#orderUpload", "./orders/bad_orders/out_of_stock_order.csv");

});

Then (/^I will see whats wrong on the screen$/, function() {

  alertMessage = browser.getText("div#alert");
  browser.pause(1000);
  assert.equal(alertMessage, "Some items in your order are not available or with insufficient stock\n×");

});
