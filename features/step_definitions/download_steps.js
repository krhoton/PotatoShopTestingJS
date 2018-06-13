const assert = require('assert').strict;
const {Given, When, Then} = require('cucumber');

Given (/^I've made an order$/, function(){

  selectingPotatoes(10);

});

When (/^I downloaded it$/, function(){



});

Then (/^It must appear in my computer$/, function(){

  

});


/*---- Funciones que se repiten ----*/

function selectingPotatoes(num_potatoes) {
  for(var i = 0; i<num_potatoes; i++){
    browser.click("button.btn.btn-primary");
  }
}
