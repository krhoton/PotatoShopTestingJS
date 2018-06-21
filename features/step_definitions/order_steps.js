const assert = require('assert').strict;
const {Given, When, Then} = require('cucumber');
const {OrdenPalabraAscendente,compareNumbersDes,compareNumbersAs} = require('../components_functions/sortFunction');
var arrInitialPotatoe = "";
var sortPotatoe = "";
var arr = "";
var arrsort = "";


/*--- Scenario: I order by name and descending order ---*/

Given(/^I want to order by name and descending order$/, function(){
  arrInitialPotatoe = browser.getText("td.col-8.item");
});

When(/^I select name$/, function(){
  browser.click("th#namesort.col-8");
  sortPotatoe = browser.getText("tr.row td.col-8.item")[0];
  arrsor = arrInitialPotatoe.sort();
});

Then(/^I will see the potatoes in order by name and descending order$/, function(){

  assert.equal(arrInitialPotatoe[0],arrsor[0]);

});

Then(/^I will se an arrow for name in descending direction$/, function(){
  let element = browser.getText("th.col-8#namesort span");
  assert.equal(element[0],"↓");

});

/*--- Scenario: I order by name and ascending order ---*/

Given(/^I want to order by name and ascending order$/, function(){
  arrInitialPotatoe = browser.getText("td.col-8.item");
});

When(/^I select name twice$/, function(){
  browser.click("th#namesort.col-8");
  browser.click("th#namesort.col-8");
  sortPotatoe = browser.getText("tr.row td.col-8.item")[0];
  arrsor = arrInitialPotatoe.sort(OrdenPalabraAscendente);
});

Then(/^I will see the potatoes in order by name and ascending order$/, function(){

  assert.equal(arrInitialPotatoe[0],arrsor[0]);
});

Then(/^I will se an arrow for name in ascending direction$/, function(){
  let element = browser.getText("th.col-8#namesort span");
  assert.equal(element[0],"↑");

});

/*--- Scenario: I order by price and descending order ---*/

Given(/^I want to order by price and descending order$/, function(){
  arrInitialPotatoe = browser.getText("td.col.price");
});

When(/^I select price$/, function(){
  browser.click("th#valuesort.col");
  sortPotatoe = browser.getText("tr.row td.col.price")[0];
  arrsor = arrInitialPotatoe.sort(compareNumbersDes);
});

Then(/^I will see the potatoes in order by price and descending order$/, function(){

  assert.equal(arrInitialPotatoe[0],arrsor[0]);

});

Then(/^I will se an arrow for price in descending direction$/, function(){
  let element = browser.getText("th.col#valuesort span");
  assert.equal(element[0],"↓");

});

/*--- Scenario: I order by price and ascending order ---*/

Given(/^I want to order by price and ascending order$/, function(){
  arrInitialPotatoe = browser.getText("td.col.price");
});

When(/^I select price twice$/, function(){
  browser.click("th#valuesort.col");
  browser.click("th#valuesort.col");
  sortPotatoe = browser.getText("tr.row td.col.price")[0];
  arrsor = arrInitialPotatoe.sort(compareNumbersAs);
});

Then(/^I will see the potatoes in order by price and ascending order$/, function(){

  assert.equal(arrInitialPotatoe[0],arrsor[0]);
});

Then(/^I will se an arrow for price in ascending direction$/, function(){
  let element = browser.getText("th.col#valuesort span");
  assert.equal(element[0],"↑");

});

/*--- Scenario: I order by stock and descending order ---*/

Given(/^I want to order by stock and descending order$/, function(){
  arrInitialPotatoe = browser.getText("td.col.stock");
});

When(/^I select stock$/, function(){
  browser.click("th#stocksort.col");
  sortPotatoe = browser.getText("tr.row td.col.stock")[0];
  arrsor = arrInitialPotatoe.sort(compareNumbersDes);
});

Then(/^I will see the potatoes in order by stock and descending order$/, function(){

  assert.equal(arrInitialPotatoe[0],arrsor[0]);

});

Then(/^I will se an arrow for stock in descending direction$/, function(){
  let element = browser.getText("th.col#stocksort span");
  assert.equal(element[0],"↓");

});

/*--- Scenario: I order by stock and ascending order ---*/

Given(/^I want to order by stock and ascending order$/, function(){
arrInitialPotatoe = browser.getText("td.col.stock");
});

When(/^I select stock twice$/, function(){
  browser.click("#stocksort");
  browser.click("#stocksort");
  sortPotatoe = browser.getText("tr.row td.col.stock")[0];
  arrsor = arrInitialPotatoe.sort(compareNumbersAs);

});

Then(/^I will see the potatoes in order by stock and ascending order$/, function(){
  assert.equal(arrInitialPotatoe[0],arrsor[0]);
});

Then(/^I will se an arrow for stock in ascending direction$/, function(){
  let element = browser.getText("#stocksort span");
  assert.equal(element[0],"↑");

});
