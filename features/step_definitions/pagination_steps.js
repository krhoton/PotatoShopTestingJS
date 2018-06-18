const assert = require('assert').strict;
const previosPage = "td.col-2.disabled";
const nextPage = "a#next-potato-page";
var {defineSupportCode} = require('cucumber');
var initialPotatoeToCompare = "";
var anotherPotatoeToCompare = "";

defineSupportCode(function ({Given, When, Then}) {

  /*--- Scenario: I want to see more potatoes ---*/

  Given(/^I want to see more than the first potatoes$/, function(){

    initialPotatoeToCompare = browser.getText("td.col-8.item")[0];

  });

  When(/^I go to the next page$/, function(){

    browser.click(nextPage);

    anotherPotatoeToCompare = browser.getText("tr.row td.col-8.item")[0];

  });

  Then(/^I will see another type of potaoes$/, function(){

    assert.notEqual(initialPotatoeToCompare, anotherPotatoeToCompare);

  });

  /*--- Scenario: Returning to the first page ---*/

  Given(/^I'm on the last page$/, function(){

    browser.click(nextPage);

  });

  When(/^I refresh the browser$/, function(){

    browser.refresh();

  });

  Then(/^I will not be able to return to another page$/, function(){

    assert.equal(validation(), true);

  });

})


function validation(){

  if (browser.waitForExist(previosPage, 20000) == true){

    return true;

  }
}
