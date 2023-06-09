Feature: Verify add employee functionality
  Verify positive and negative tests for add employee functionality

  Background: Navigate to Add employee page
    Given User launch Application
    When User enter valid username "Admin" and Valid password "admin123"
    And user click on Login button
    Then User Navigated to dashboard page
    When User click on PIM Menu
    And User click on Add employee sub menu
  @focus @smoke
  Scenario Outline: Verify adding add employee with valid detials
    When User enter firstname as "<firstname>" and last and as "<lastname>"
    And User click on save button
    Then User should get successfully saved message
    Examples:
      | firstname | lastname |
      | Raju      | G        |
      | Anusha    | k        |
      | Abhiram   | k        |
  Scenario: Verify mandatory fields in employee details
    And User click on save button
    Then User should get error for mandatory fileds message
  @regression
  Scenario: Verify adding add employee firstname should accept only 30 chars
    And User enter firstname as "Rajjbfjdhbfkbewfuwhfhwiufhowiehu" and last and as "G"
    And User click on save button
    Then User should get error message