/// <reference types="cypress" />
export default class DropdownDom {
 selectCountryDropDown(){
  return cy.get('span[aria-labelledby="select2-country-container"]')
 }
 selectCountryDropDownInput(){
  return cy.get('.select2-search--dropdown input[class="select2-search__field"]')
 }
 getSelectedCountry(){
  return cy.get('#select2-country-container')
 }
 selectCountyDropDownResult(){
  return cy.get('.select2-results ul li')
 }
 selectMultipleStateDropdown(){
  return cy.get('.select2-selection--multiple')
  
 }
 getSelectedState(){
  return cy.get('.select2-selection__choice')
 }
 selectCountryDisabledDropdown(){
  return cy.get('#select2-pvwh-container')
 }
 selectFileDropDown(){
  return cy.get('select[name="files"]')
 }
 selectDigalog2SecButton(){
    return cy.contains('Show dialog (Autoclose after 2 seconds)')
 }
 selectDigalog2Sec(){
    return cy.get(".modal.fade", { force: true })
 }

}
