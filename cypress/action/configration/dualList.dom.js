/// <reference types="cypress" />
export default class DualListDom {
    getHeading(){
       return cy.get('.container div h1.text-size-64')
    }
    getLeftSearchBox(){
       return cy.get('.list-left input[name*="SearchDualList"]')
    }
    getLeftDropDownList(){
      return cy.get('.list-left ul li')
    }
    getLeftAllButton(){
      return cy.get('.list-left a.chectbtn')
    }
    getLeftArrow(){
      return cy.get('.list-arrows button.move-left')
    }
    getRightArrow(){
      return cy.get('.list-arrows button.move-right')
    }
    getRightDropDownList(){
      return cy.get('.list-right ul li')
    }


}