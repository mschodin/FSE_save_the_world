Feature: Add Request

  Scenario: Correctly Request an Item
    Given I open the website and login
    When I click on the Request tab
    And I am brought to the Request page
    And I enter an item, amount and location
    When I click submit request
    Then The request will successfully add

  Scenario: Incorrectly Request an Item
    Given I open the website and login
    When I click on the Request tab
    And I am brought to the Request page
    And I enter an incorrect item, amount and location
    When I click submit request
    Then The request will not add