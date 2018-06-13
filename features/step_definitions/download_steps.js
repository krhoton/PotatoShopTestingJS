const assert = require('assert').strict;
const fs = require('fs');
const {Given, When, Then} = require('cucumber');

/*--- Mirar link: https://nodejs.org/api/fs.html#fs_file_system (acces y stat)---*/

Given (/^I've made an order$/, function(){

  selectingPotatoes(10);

});

When (/^I downloaded it$/, function(){

  browser.click("button#dropdownCart");
  browser.click("button#purchase");
  browser.click("div.modal-body a");

});

Then (/^It must appear in my computer$/, function(){

  let file_route = "./downloaded_orders/order.txt"
  fs.access(file_route, fs.constants.F_OK, (err) => {
    console.log(`${file_route} ${err ? 'does not exist' : 'exists'}`);
  });

});


/*---- Funciones que se repiten ----*/

function selectingPotatoes(num_potatoes) {
  for(var i = 0; i<num_potatoes; i++){
    browser.click("button.btn.btn-primary");
  }
}
