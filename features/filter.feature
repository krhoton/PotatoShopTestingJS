Feature: Filter
  As a user
  I want to buy a determinant product
  So I put the name of product in the filter texbox

Scenario: I search a product in the home page
Given I am in the home page
When I search a product
Then I find the product

Scenario: I search a product that I remember just the first name
Given I remember just the first name of product
When I search a product with the first name
Then I find the all products to include the same first name

Scenario: I search a product that doesn't exist
Given I search a product
When I doesnt exist
Then I don't find the product
