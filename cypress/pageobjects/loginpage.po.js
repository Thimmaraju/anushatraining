class Loginpage{

   usernameInput(){

     return '//input[@placeholder="Username"]'
   }

   passwordInput(){

     return '//input[@name="password"]'
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