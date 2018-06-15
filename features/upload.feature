Feature: Upload

  As a big purchaser
  I want to use my own prepared orders
  So I want to se if the online shop can use it

  Scenario: Uploading a order
    Given I have a prepared order and the cart is clear
    When I send it to the shop
    Then I will have it on the cart

  Scenario: Uploading a malformed order
    Given I have prepared a bad order without the right syntaxys
    Then I will have an issue inform on the screen

  Scenario: Uploading a order and the shop hasn't got stock
    Given I have prepared a huge order and the cart is clear
    When I send that order to the shop
    Then I will see whats wrong on the screen
