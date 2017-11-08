Feature: Check library page

  Scenario: Check links on library page
    Given I am on the main page
    When I check all items and click it
    Then I should be on the according page
