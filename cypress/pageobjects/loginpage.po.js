class Loginpage{

   usernameInput(){

     return 'input[name="username"]'
   }

   passwordInput(){

     return 'input[name="password"]'
   }

   loginbutton(){

    return 'button[type="submit"]'
   }


   errormessage(){

     return "Invalid credentials"
   }


}

const login = new Loginpage()

export default login