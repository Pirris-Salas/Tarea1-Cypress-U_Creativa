class adminViewPage {

    elements= {
        pageTitle : () => cy.get('header h1')
    }
}
export default new adminViewPage()