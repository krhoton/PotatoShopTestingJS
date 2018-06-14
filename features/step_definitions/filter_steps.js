const {Given, When, Then} = require('cucumber');
const assert = require ('assert').strict;
const {getTexto} = require('../components_functions/stockFunction');

Given('I am in the home page',()=>{
    // browser.url('http://localhost:4200/');
});
When('I search a product',()=>{
    browser.setValue('#filterInput','Purple-Blue Potato');
});
Then('I find the product',()=>{
    assert.equal(browser.getText('.col-8.item'),'Purple-Blue Potato');
});

Given('I remember just the first name of product',()=>{
    browser.setValue('#filterInput','Purple');
});
When('I search a product with the first name',()=>{
    assert.notEqual((browser.getText('.col-8.item')).indexOf('Purple'),-1);
});
Then('I find the all products to include the same first name',()=>{
    assert.equal(browser.getText('.col-8.item'),'Purple-Blue Potato');
});

Given('I put the name product in the filter texbox',()=>{
    browser.setValue('#filterInput','ASDASD');
});
When('I does not exist the name of product',()=>{
    assert.equal(getTexto('.col-8.item',0),undefined);
});
Then('I dont find that products',()=>{
    browser.setValue('#filterInput','');
});
