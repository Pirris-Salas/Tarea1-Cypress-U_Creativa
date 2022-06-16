class itemListPage {

    elements= {
        itemTitle: () => cy.get('#todostitle')
    }
}
export default new itemListPage()