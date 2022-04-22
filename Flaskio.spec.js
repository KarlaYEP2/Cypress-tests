/// <reference types="cypress" />

describe('Todo', () => {
    beforeEach(() => {
        cy.visit('https://flask.io/new')
      })

    it('Making a todolist', () => {
      cy.get('#list_tasks_attributes_0_description').type('Water my grass').should('have.value', 'Water my grass').type('{enter}')
    })

    it('Changing task', () => {
        cy.get('#list_tasks_attributes_0_description').type('Water my grass').should('have.value', 'Water my grass').type('{enter}')
        cy.get('.tasks').contains('Water my grass')
        .should('be.visible')
        .type('Dry my grass {enter}')
        cy.get('body').click()
        cy.wait(300)
    })
    /*
    it('Adding a new task', () => {
        cy.get('#list_tasks_attributes_0_description').type('Water my grass').should('have.value', 'Water my grass').type('{enter}')
        cy.get('body').click().type('Make new grass').type('{enter}')
        cy.get('#task_description').type(' {enter}')
        cy.get('.tasks').contains('Make new grass')
    })
     */
    it('Completing a task', () => {
        cy.get('#list_tasks_attributes_0_description').type('Water my grass').should('have.value', 'Water my grass').type('{enter}')
        cy.contains('Water my grass').siblings('label').click()
        cy.wait(1600)

    })   

    it('Star a task', () => {
        cy.get('#list_tasks_attributes_0_description').type('Water my grass').should('have.value', 'Water my grass').type('{enter}')
        cy.contains('Water my grass').siblings('ul').children("li[class='star']").click()
        cy.wait(300)

    })   


    
  })
  