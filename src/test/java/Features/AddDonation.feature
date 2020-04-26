Feature: Add Donation

  Scenario: Correctly Donate an Item
    Given I open the website and login
    When I click on the Donate tab
    And I am brought to the Donate page
    And I enter an item, amount and location
    When I click submit donation
    Then The donation will successfully add

  Scenario: Incorrectly Donate an Item
    Given I open the website and login
    When I click on the Donate tab
    And I am brought to the Donate page
    And I enter an incorrect item, amount and location
    When I click submit donation
    Then The donation will not add