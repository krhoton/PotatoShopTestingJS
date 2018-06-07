const assert = require('assert').strict;
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

  Given(/^I've selected some potatoes$/, function(){

    selectingPotatoes(2);

  });

  When(/^I check the number of potatoes on the cart$/, function(){

    browser.click("button#dropdownCart");
    quantity = browser.getText("td.itemQuantity");

  });

  Then(/^I must see the same potatoes on the cart$/, function(){

    assert.equal(quantity, "2x");

  });

  Given(/^I've alredy selected some potatoes$/, function(){

    selectingPotatoes(5);

  });

  When(/^I clear the cart$/, function(){

    browser.click("button#dropdownCart");
    totalPrice = browser.getText("td#totalPrice");
    browser.click("button#clearcart");
    totalPrice = browser.getText("td#totalPrice");

  });

  Then(/^the cart must be empty$/, function(){

    assert.equal(totalPrice, "0.00€");

  });

  Given(/^I've clear the cart with anything that have it$/, function(){

    selectingPotatoes(5);

  });

  When(/^I go ahead with the purchase$/, function(){

    browser.click("button#dropdownCart");
    browser.click("button#clearcart");
    totalPrice = browser.getText("td#totalPrice");
    assert.equal(totalPrice, "0.00€");
    browser.click("button#purchase");

  });

  Then(/^I must see the alert$/, function(){

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

/*---- Funciones por implementar ----*/
/*
async function checkingSite(){
  assert.equal(await title, "Welcome to the Potato Shop!");
  console.log(title);
}
*/
