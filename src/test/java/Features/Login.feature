Feature: Login

  Scenario: Correct login
    Given I open the website
    When I enter my username and password
    And I push login
    Then I will be redirected to the homepage

  Scenario: Incorrect login
    Given I open the website
    When I enter not my username and password
    And I push login
    Then I will be shown an error