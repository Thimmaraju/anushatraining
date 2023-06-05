import login from "../../pageobjects/Login/loginpage.po"

describe('Validate Orange HRM Login functionality', function () {
  
  beforeEach(function () {

    cy.session("Login session", () => {
      cy.visit("/web/index.php/auth/login")
      cy.get(login.usernameinput).type("Admin")
      cy.get(login.passwordInput()).type("admin123")
      cy.get(login.loginBtn()).click()
    })

  })

  it('Validate login with Valid credentials ', function () {


    cy.visit("/web/index.php/pim/viewEmployeeList");


  })

  it('Validate timesheet page ', function () {


    cy.visit("/web/index.php/time/viewEmployeeTimesheet")

    cy.wait(3000)

    //cy.contains("Time").click()


  })

  it('Validate Myinfo page ', function () {


    cy.visit("/web/index.php/pim/viewMyDetails")
    cy.wait(3000)

  })

  it('Validate Employee report ', function () {


    cy.visit("/web/index.php/time/displayEmployeeReportCriteria")
    cy.wait(3000)

    cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })


  it('Attendance Total Summary Report', function () {


    cy.visit("web/index.php/time/displayAttendanceSummaryReportCriteria")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })

  it('Add vacancy', function () {


    cy.visit("web/index.php/recruitment/addJobVacancy")
    cy.wait(3000)
    //cy.xpath('(//input[@placeholder="Type for hints..."])[2]').type("Raju")

  })

  it('Add Job title ', function () {


    cy.visit("/web/index.php/admin/saveJobTitle")
    cy.wait(3000)

    //cy.AddJobTitle(jobtitledata.jobtitle, jobtitledata.jobdescription)


  })

})


