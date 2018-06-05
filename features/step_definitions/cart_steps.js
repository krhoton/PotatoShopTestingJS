const assert = require('assert').strict;
const title = browser.getText("div.jumbotron.text-center h1.display-3");
var {defineSupportCode} = require('cucumber');
let totalPrice = "";
let quantity = "";
let alert = "";

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
  });

  Given(/^I've alredy selected some potatoes$/, function(){
    selectingPotatoes(5);
  });

  When(/^I press the clear button on the cart$/, function(){
    browser.click("button#dropdownCart");
    totalPrice = browser.getText("td#totalPrice");
    browser.click("button#clearcart");
    totalPrice = browser.getText("td#totalPrice");
  });

  Then(/^the cart must be empty$/, function(){
    assert.equal(totalPrice, "0.00€");
  })

  Given(/^I've clear the cart with anything that have it$/, function(){
    selectingPotatoes(5);
  });

  When(/^I press the buy button$/, function(){
    browser.click("button#dropdownCart");
    browser.click("button#clearcart");
    totalPrice = browser.getText("td#totalPrice");
    assert.equal(totalPrice, "0.00€");
    browser.click("button#purchase");
  });

  Then(/^I must see the alert "You need to first add items to your cart"$/, function(){
    alert = browser.getText("div#alert");
    assert.equal(alert, "You need to first add items to your cart\n×");
  })
})




/*---- Funciones que se repiten ----*/

function selectingPotatoes(num_potatoes) {
  for(var i = 0; i<num_potatoes; i++){
    browser.click("button.btn.btn-primary");
  }
}

function checkingSite(){
  assert.equal(title, "Welcome to the Potato Shop!");
}
