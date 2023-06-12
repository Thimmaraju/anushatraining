Feature: Verify login functionality 

Background: login steps 
 Given User launch Application

Scenario: Verify login with valid creds 
  When User enter valid username "Admin" and Valid password "admin123"
  And user click on Login button
  Then User Navigated to dashboard page
@regression
Scenario: Verify login with valid creds 
  When User enter valid username "Adhuhmin" and Valid password "admin123"
  And user click on Login button
  Then User should get error messge 