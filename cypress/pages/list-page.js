class listPage{

    elements={
        newItemListInput: () => cy.get('.new-todo-list'),
        listContainer : () => cy.get('.todo-list-list li')
    }
}

export default new listPage()