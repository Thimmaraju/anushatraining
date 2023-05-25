class AddEmployeePage{


    pimMenu(){

        return 'a[href="/web/index.php/pim/viewPimModule"]'
    }

    addemployeesubmenu(){

        return 'Add Employee'
    }

    firstnameInput(){

        return 'input[name="firstName"]'
    }

    lastname(){

        return 'input[name="lastName"]'
    }

    saveBtn(){

        return 'button[type="submit"]'
    }

}

const addemployee = new AddEmployeePage()

export default addemployee