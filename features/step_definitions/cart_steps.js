const assert = require('assert').strict;
var {defineSupportCode} = require('cucumber');
let totalPrice = "";
let quantity = "";

defineSupportCode(function ({Given, When, Then}) {

  Given(/^I've selected a few potates$/, function(){
    selectingPotatoes(3);
  });

  When(/^I check the cart$/, function(){
    browser.click("button#dropdownCart");
    totalPrice = browser.getText("td#totalPrice");
  });

  Then(/^I must see the cost of my purchase$/, function(){
    assert.notEqual(totalPrice, "0.00€");
  });

  Given(/^I've selected two potatoes$/, function(){
    selectingPotatoes(2);
  });

  When(/^I check the number of potatoes on the cart$/, function(){
    browser.click("button#dropdownCart");
    quantity = browser.getText("td.itemQuantity");
  });

  Then(/^I must see two potatoes too$/, function(){
    assert.equal(quantity, "2x");
  })
})




/*-- Funciones que se repiten --*/

function selectingPotatoes(num_potatoes) {
  for(var i = 0; i<num_potatoes; i++){
    browser.click("button.btn.btn-primary");
  }
}
