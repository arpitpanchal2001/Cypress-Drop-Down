/// <reference types="cypress" />
import DropdownDom from "./dropdown.dom";
var dropdownDom = new DropdownDom();
export default class TestDropdown {
  verifyClickingCountryGetSelected() {
    dropdownDom.selectCountryDropDown().click();
    dropdownDom.selectCountryDropDownInput().type("Ind").type("{enter}");
    dropdownDom.getSelectedCountry().should("have.text", "India");
  }
  verifySelectingStateGetSelected(state) {
    let i = 0;

    while (i < state.length) {
      dropdownDom
        .selectMultipleStateDropdown()
        .click()
        .type(`${state[i]}{enter}`);
      i++;
    }

    dropdownDom.getSelectedState().each((el, index, list) => {
      expect(el.text()).contain(state[index]);
    });
  }
  verifyClicking2SecDialogBox(){
    dropdownDom.selectDigalog2SecButton().click().then(()=>{
      dropdownDom.selectDigalog2Sec().should('not.have.css' ,'display' , 'none')
      dropdownDom.selectDigalog2Sec().find('.modal-header h3').should('have.text' ,"Loading")
    })
    cy.wait(2000)
    dropdownDom.selectDigalog2Sec().should('have.css', 'display', 'none');
    
    
    
  }
}
