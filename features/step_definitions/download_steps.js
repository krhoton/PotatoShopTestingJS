const assert = require('assert').strict;
const path = require('path');
const fs = require('fs');
const file_path = path.join(process.cwd(), 'downloaded_orders', 'order.txt');
const {Given, When, Then} = require('cucumber');
let exists = false;

/*--- Mirar link: https://nodejs.org/api/fs.html#fs_file_system (acces y stat)---*/

Given (/^I've made an order$/, function(){

  selectingPotatoes(10);

});

When (/^I downloaded it$/, function(){
  browser.click("button#dropdownCart");
  browser.click("button#purchase");
  browser.click("div.modal-body a");
  browser.pause(2500);

});

Then (/^It must appear in my computer$/, function(){

  // Para comprobar que funciona con un caso negativo, cambiar en la siguiente
  // function que se llama en el siguente if el file_path por un 'asdf'
  // (por ejemplo)
  
  if(fsExistsSync(file_path)){
    exists = true;
  }
  assert.equal(exists, true);

});

function fsExistsSync(myDir) {
  try {
    fs.accessSync(myDir);
    return true;
  } catch (e) {
    return false;
  }
}


/*---- Funciones que se repiten ----*/

function selectingPotatoes(num_potatoes) {
  for(var i = 0; i<num_potatoes; i++){
    browser.click("button.btn.btn-primary");
  }
}
