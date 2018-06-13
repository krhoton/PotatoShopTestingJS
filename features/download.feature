Feature: Download

  As an usual costumer of the potato shop
  I want to get my preffered orders
  on my computer so I will download it

  Scenario: Downloading a order
    Given I've made an order
    When I downloaded it
    Then It must appear in my computer
