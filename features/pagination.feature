Feature: Pagination

  We want to see how many types of potato are
  so we gonna travel between the different pages
  And then see the types and how many types we have

  Scenario: I want to see more potatoes
    Given I want to see more than the first potatoes
    When I search the next button and press on it
    Then I will see another type of potaoes

  Scenario: Returning to the first page
    Given I'm on the last page
    When I refresh the browser
    Then I will not be able to return to another page
