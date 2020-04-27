Feature: Add Match

  Scenario: Correctly Match an Item
    Given I open the website and login
    When I click on the Match tab
    And I am brought to the Match page
    And I see the match table
    When I enter a donation id and request id
    And I click submit match
    Then The match will successfully be added

  Scenario: Incorrectly Match an Item
    Given I open the website and login
    When I click on the Match tab
    And I am brought to the Match page
    And I see the match table
    When I enter a donation id and request id incorrectly
    And I click submit match
    Then The match will not be added