class headerPage{

    elements = {
        navTodoList : () => cy.get('#navtodolists'),
        navAdminLogin : () =>cy.get('#navadminlogin'),
        navAdminLogout : () => cy.get('#navadminlogout')  
    }

    clickLogout(){
       this.elements.navAdminLogout().click()
    }

    clickList(){
        this.elements.navTodoList().click()
    }

}
export default new headerPage()