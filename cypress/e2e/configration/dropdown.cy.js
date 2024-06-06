//describe and it block
/// <reference types="cypress" />
import TestDropdown from "../../action/configration/dropdown";

describe("Drop Down Demo", function () {
  beforeEach(function () {
    cy.fixture("countries").then(function (countries) {
      this.countries = countries;
      console.log();
    });
  });
  var dropdown = new TestDropdown();
  beforeEach(() => {
    cy.siteVisit();
  });
  it("DropDown country", () => {
    dropdown.verifyClickingCountryGetSelected();
  });
  it("DropDown state", function () {
    dropdown.verifySelectingStateGetSelected([
      this.countries[0],    
      this.countries[1],
    ]);
  });
  // it("report fail", function(){
  //   dropdown.verifyfailed()
  // })

  
});
