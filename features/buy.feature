Feature: Buy

  As a user
  I want to add potatoes in my cart
  So that I buy potatoes

  @Buy_scenario
  Scenario: I buy some potatoes
    Given I want to buy some potatoes
    When I click to buy on the cart after selecting some potatoes
    Then I must see "Thank you for your purchase!" on my screen
