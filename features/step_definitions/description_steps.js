const {Given, When, Then} = require('cucumber');
const assert = require ('assert').strict;

Given('I want to information about of some product',()=>{});

When('I select a product for more information',()=>{
    browser.click('.col-8.item');
});

Then('I read the product description',()=>{
    assert.equal(browser.getText('.col.item-details'),'Because of their waxy texture, red potatoes stay firm throughout cooking, whether roasted or stewed. Their thin yet vivid red skin adds appealing color and texture to sides and salads. Reds are frequently used to make tender yet firm potato salad and to add pizazz to soups and stews. They are also delicious mashed or roasted.');
});