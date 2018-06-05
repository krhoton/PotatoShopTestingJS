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

  Scenario: I want to clear my cart
    Given I've alredy selected some potatoes
    When I press the clear button on the cart
    Then the cart must be empty

  Scenario: I havent selected potatoes
    Given I've clear the cart with anything that have it
    When I press the buy button
    Then I must see the alert "You need to first add items to your cart"
