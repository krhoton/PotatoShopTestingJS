const assert = require('assert').strict;
const {Given, When, Then} = require('cucumber');
var arrInitialPotatoe ="";
var sortPotatoe = "";
var arr = "";
var arrsort = "";

// Metodos a mirar: CharCodeAt
//                  uniCode
//                  recordar a uri codingame para descendente

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

// Then(/^I will se an arrow in descending direction$/, function(){
//
//   let element = browser.getText("");
//   console.log('\n la flecha = '+ element);
//
//
// });

/*--- Scenario: I order by name and ascending order ---*/

Given(/^I want to order by name and ascending order$/, function(){
  initialPotatoeToCompare = browser.getText("td.col-8.item");
});

When(/^I select name twice$/, function(){
  browser.doubleClick("th#namesort.col-8");
  anotherPotatoeToCompare = browser.getText("tr.row td.col-8.item")[0];
  sortPotatoe = browser.getText("tr.row td.col-8.item")[0];
  arrsor = arrInitialPotatoe.sort(function(a,b){
    if (a.value < b.value) {
      return 1;
    }
    if (a.value > b.value) {
      return -1;
    }
    return 0;
  });
});

Then(/^I will see the potatoes in order by name and ascending order$/, function(){

  assert.equal(arrInitialPotatoe[0],arrsor[0]);
});
