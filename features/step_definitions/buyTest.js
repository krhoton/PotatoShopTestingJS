const {Given, When, Then} = require('cucumber');

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
