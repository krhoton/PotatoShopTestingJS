Feature: Buy

  We love the potatoes
  so we will buy different kind of it
  Then we will check our purchase

  @Sample_scenario
  Scenario: I buy some potatoes
    Given I want to buy some potatoes
    When I click to buy on the cart after selecting some potatoes
    Then I must see "Thank you for your purchase!" on my screen
