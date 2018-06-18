Feature: Buy

  As a user
  I want to add potatoes in my cart
  So that I buy potatoes

  Scenario: I buy potatoes
   Given I want to buy some potatoes
   When I add to cart some potatoes
   Then I see the total price of potatoes I added
   And buy the potatoes

  Scenario: I try to buy potatoes but I don't have a enough money
   Given I dont have a enough money
   When I try to pay the potatoes
   Then I cant buy it
