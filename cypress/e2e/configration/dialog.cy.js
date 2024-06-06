//describe and it block
/// <reference types="cypress" />
import TestDropdown from "../../action/configration/dropdown";

describe("Drop Down Demo", function () {
 
  var dropdown = new TestDropdown();
  beforeEach(() => {
    cy.visit(Cypress.env('url') + "/selenium-playground/bootstrap-progress-bar-dialog-demo")
  });
  it("2sec Dialog Box" ,()=>{
    dropdown.verifyClicking2SecDialogBox()
  })

  
  
});
