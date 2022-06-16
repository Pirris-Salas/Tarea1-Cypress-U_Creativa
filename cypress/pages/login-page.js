class loginPage{

    elements = {
        usernameInput: () => cy.get('div.login input[type="text"]'),
        passwordInput: () => cy.get('div.login input[type="password"]'),
        loginButton: () =>  cy.get('#login')
    }

    visitWebSite(url){
        cy.visit(url)
    }

    typeUsername(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLoginButton(){
        this.elements.loginButton().click()
    }
}

export default new loginPage()