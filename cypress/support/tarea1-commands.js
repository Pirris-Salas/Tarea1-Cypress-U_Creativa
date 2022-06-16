const { default: listPage } = require("../pages/list-page")

Cypress.Commands.add('findItemList', (itemlist) =>{
    listPage.elements.listContainer().each((myList, index, lista) =>{
        if(myList.text().includes(itemlist)){
            cy.wrap(lista).eq(index).find('a').click()
        }
    })
})