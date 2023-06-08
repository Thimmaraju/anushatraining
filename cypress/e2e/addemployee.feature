Feature: Verify add employee functionality
  Verify positive and negative tests for add employee functionality
  
Scenario: Verify adding add employee with valid detials
  Given User launch Application
  When User enter valid username "Admin" and Valid password "admin123"
  And user click on Login button
  Then User Navigated to dashboard page
  When User click on PIM Menu 
  And User click on Add employee sub menu 
  And User enter firstname as "Raju" and last and as "G"
  And User click on save button
  Then User should get successfully saved message

Scenario: Verify mandatory fields in employee details
  Given User launch Application
  When User enter valid username "Admin" and Valid password "admin123"
  And user click on Login button
  Then User Navigated to dashboard page
  When User click on PIM Menu 
  And User click on Add employee sub menu 
  And User click on save button
  Then User should get error for mandatory fileds message

Scenario: Verify adding add employee firstname should accept only 30 chars 
  Given User launch Application
  When User enter valid username "Admin" and Valid password "admin123"
  And user click on Login button
  Then User Navigated to dashboard page
  When User click on PIM Menu 
  And User click on Add employee sub menu 
  And User enter firstname as "Rajjbfjdhbfkbewfuwhfhwiufhowiehu" and last and as "G"
  And User click on save button
  Then User should get error message