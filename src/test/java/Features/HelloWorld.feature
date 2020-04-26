Feature: Hello World

  Scenario: Hello World is present on local host homepage
    Given I launch chrome browser
    When I open the local host
    Then I verify the website has loaded
    And I close the browser







