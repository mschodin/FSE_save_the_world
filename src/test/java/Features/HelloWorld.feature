Feature: Hello World

  Scenario: Hello World is present on local host homepage
    Given I launch chrome browser
    When I open the local host
    Then I verify hello world is present
    And I close the browser

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

  Scenario: Correctly Pledge an Item

  Scenario: Incorrectly Pledge an Item

  Scenario: Correctly Request an Item

  Scenario: Incorrectly Request an Item

  Scenario: Correctly Match an Item

  Scenario: Incorrectly Match an Item