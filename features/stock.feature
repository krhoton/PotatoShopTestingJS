Feature: Stock

  As a user
  I want to buy potatoes
  So that I add producto in my shopping cart

  Scenario: Add products to cart
    Given I am on potatoeshop page
    When I add a product to cart
    Then discount the product from stock

<<<<<<< HEAD
Scenario: Add all product to cart
  Given I add all product to cart
  When I dont have stock of that product
  Then I have all product in my cart
=======
  Scenario: Add all product to cart
    Given I add all product to cart
    When I don't have stock of that product
    Then I have all product in my cart
>>>>>>> origin/master

  Scenario: I cant add product without stock
    Given there arent stock of product
    When I add the product in my cart
    Then I cant add the product

<<<<<<< HEAD
Scenario: Clear the cart
  Given I add all product in my cart
  When I was wrong to buy the product
  Then I clear the cart
  And the stock of product come back the initial state
=======
  Scenario: Clear the cart
    Given I add all product to cart
    When I was wrong to buy the product
    Then I clear the cart
    And the stock of product come back the initial state
>>>>>>> origin/master
