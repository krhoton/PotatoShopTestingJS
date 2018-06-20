Feature: Sort

  We want to see the potatoes ordered
  so we select the characteristic to order
  And then see the popatoes in order and an arrow in the direction of order

  Scenario: I order by name and descending order
    Given I want to order by name and descending order
    When I select name
    Then I will see the potatoes in order by name and descending order
    And I will se an arrow for name in descending direction

  Scenario: I order by name and ascending order
    Given I want to order by name and ascending order
    When I select name twice
    Then I will see the potatoes in order by name and ascending order
    And I will se an arrow for name in ascending direction

  Scenario: I order by price and descending order
    Given I want to order by price and descending order
    When I select price
    Then I will see the potatoes in order by price and descending order
    And I will se an arrow for price in descending direction

    Scenario: I order by price and ascending order
      Given I want to order by price and ascending order
      When I select price twice
      Then I will see the potatoes in order by price and ascending order
      And I will se an arrow for price in ascending direction

    Scenario: I order by stock and descending order
      Given I want to order by stock and descending order
      When I select stock
      Then I will see the potatoes in order by stock and descending order
      And I will se an arrow for stock in descending direction

    Scenario: I order by stock and ascending order
      Given I want to order by stock and ascending order
      When I select stock
      Then I will see the potatoes in order by stock and ascending order
      And I will se an arrow for stock in ascending direction
