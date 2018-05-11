Feature: To test the search on main page

  Background:
    Given I am on booking start page

  @SearchScenario
  Scenario Outline: Search on main page
    When I search "<city>" on main page
    Then Search results should be displayed
    And "<city>" should be in search results

  Examples:
  | city        |
  | Kiev        |
  | Los Angeles |
  | San José    |
  | New York    |