Feature: Upload

  As a big purchaser
  I want to use my own prepared orders
  So I want to se if the online shop can use it

  Scenario: Uploading a order
    Given I have a prepared order and the cart is clear
    When I send it to the shop
    Then I will have it on the cart
