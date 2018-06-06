const assert = require('assert').strict;
var {defineSupportCode} = require('cucumber');
let initialPotatoeToCompare = "";
let anotherPotatoeToCompare = "";

defineSupportCode(function ({Given, When, Then}) {

  Given(/^I want to see more than the first potatoes$/, function(){

    // Cogemos el nombre de la primera patata para su posterior comparacion

    initialPotatoeToCompare = browser.getText("td.col-8.item")[0];

  });

  When(/^I search the next button and press on it$/, function(){

    browser.click("a#next-potato-page");

    /* En la siguiente linea especificamos que coja el texto de la primera
    * casilla en la tabla, dado que si está en otra pagina la misma tipologia
    * de patata, significará que nos está mostrando de nuevo una patata que ya
    * habiamos visualizado, de tal manera que el codigo no estará suficientemente
    * bien optimizado y sería susceptible de cambios */

    anotherPotatoeToCompare = browser.getText("tr.row td.col-8.item")[0];

  });

  Then(/^I will see another type of potaoes$/, function(){

    // Comparamos ambas patatas y si no fuera cierto, lanzamos un error gracias
    // a la dependencia "assert"

    assert.notEqual(initialPotatoeToCompare, anotherPotatoeToCompare);

  });

  Given(/^I'm on the last page$/, function(){
  });

  When(/^I refresh the browser$/, function(){
  });

  Then(/^I will not be able to return to another page$/, function(){
  });

})
