Feature: Cart

  We want to check our Cart
  and we gonna see whats in it
  before we proceed to the purchase

  Scenario: I want to check how many will cost my purchase
    Given I've selected a few potates
    When I check the cart
    Then I must see the cost of my purchase

  Scenario: I want to see if the cart reflect how many potatoes I'm gonna purchase
    Given I've selected two potatoes
    When I check the number of potatoes on the cart
    Then I must see two potatoes too
