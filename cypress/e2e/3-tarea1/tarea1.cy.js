import loginPage from "../../pages/login-page.js"
import headerPage from "../../pages/header-page.js"
import adminViewPage from "../../pages/admin-view-page.js"
import listPage from "../../pages/list-page.js"


describe('POM Practica2', () => {
    let url = 'https://eviltester.github.io/simpletodolist/adminlogin.html'
    let username = 'Admin'
    let password = 'AdminPass'
    let itemList = 'Computers'

    beforeEach(() => {
        loginPage.visitWebSite(url)
        loginPage.typeUsername(username)
        loginPage.typePassword(password)
        loginPage.clickLoginButton()
    })
    it('Test Assert 1', () => {
      headerPage.elements.navAdminLogin().should('have.text', 'Admin')
    })

    it('Test Assert 2', () => {
        adminViewPage.elements.pageTitle().should('have.text', 'Admin View')
    })

    it('Test Assert 3', () => {
        loginPage.elements.loginButton().should('not.exist')
    })

    it('Test Assert 4', () =>{
        headerPage.elements.navAdminLogout().should('have.text', 'Logout').should('have.attr', 'onclick')
        headerPage.clickLogout()

        cy.url().should('be.equal', url)
    })

    it('Test Assert 5', () =>{
        headerPage.elements.navTodoList().should('have.text', 'lists')
        headerPage.clickList()

        listPage.elements.newItemListInput().type(`${itemList}{enter}`)
        listPage.elements.listContainer().eq(0).should('have.text', itemList)

    })

    it('Test Assert 6', () => {
        headerPage.clickList()
        listPage.elements.newItemListInput().type(`${itemList}{enter}`)
        listPage.elements.listContainer().each((myList, index, lista) =>{
            if(myList.text().includes(itemList)){
                cy.wrap(lista).eq(index).find('a').click()
            }
        })
    })

    it('Test Assert 7', ()=>{
        headerPage.clickList()
        listPage.elements.newItemListInput().type(`${itemList}{enter}`)
        listPage.elements.listContainer().each((myList, index, lista) =>{
            if(myList.text().includes(itemList)){
                cy.wrap(lista).eq(index).find('a').click()
            }
        })

        headerPage.elements.navAdminLogout().should('have.text', 'Logout').should('have.attr', 'onclick')
        headerPage.clickLogout()
        headerPage.elements.navAdminLogin().should('have.text', 'Admin Login')
    })
})