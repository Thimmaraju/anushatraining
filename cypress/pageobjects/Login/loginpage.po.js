class LoginPage{

    //  usernameinput(){

    //     return ''
    //  } 

    usernameinput = 'input[name="username"]'

     passwordInput(){

        return 'input[name="password"]'
     }

     loginBtn(){

        return 'button[type="submit"]'
     }

     errormessage(){

        return 'Invalid credentials'
     }

     loginwithcreds(username, password){

        cy.get(this.usernameinput).type(username)

        cy.get(this.passwordInput()).type(password)

        cy.get(this.loginBtn()).click()

     }
}


const login = new LoginPage()

export default login
