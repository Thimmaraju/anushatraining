class JobPage{


    adminmenu(){

        return 'a[href="/web/index.php/admin/viewAdminModule"]'
    }

    jobsubmenu(){

     return 'Job'
    }    
    
    // Add job title 

    jobtitleoption(){

        return 'Job Titles'
    }

    addBtn(){

        return 'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    }



    //Add pay grades 



}

const job = new JobPage()

export default job