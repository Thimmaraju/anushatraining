Feature: Verify login functionality 

Scenario: Verify login with valid creds 
 Given User launch Application
  When User enter valid username "Admin" and Valid password "admin123"
  And user click on Login button
  Then User Navigated to dashboard page