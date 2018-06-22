const assert = require('assert').strict;
const path = require('path');
const download_path = path.normalize('./downloaded_orders');
const fs = require('fs');
const {Given, When, Then} = require('cucumber');
let exists = false;

/*--- Mirar link: https://nodejs.org/api/fs.html#fs_file_system (acces y stat)---*/

Given (/^I've made an order$/, function(){

  selectingPotatoes(10);

});

When (/^I downloaded it$/, function(){

  console.log(download_path);
  browser.click("button#dropdownCart");
  browser.click("button#purchase");
  browser.click("div.modal-body a");
  browser.pause(2500);

});

Then (/^It must appear in my computer$/, function(){

  fs.access(download_path, fs.constants.F_OK, function(err) {
    throw err;
  });
});


/*---- Funciones que se repiten ----*/

function selectingPotatoes(num_potatoes) {
  for(var i = 0; i<num_potatoes; i++){
    browser.click("button.btn.btn-primary");
  }
}
