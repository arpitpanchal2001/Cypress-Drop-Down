//describe and it block
/// <reference types="cypress" />
import DualListDom from "../../action/configration/dualList.dom";
import DualList from "../../action/configration/dualList";
describe("Dual List Demo", function () {
  var dualListDom = new DualListDom();
  var dualList = new DualList();
  beforeEach(() => {
    //https://www.lambdatest.com/selenium-playground/bootstrap-dual-list-box-demo
    cy.siteVisit();
  });
  xit("Veryfing Heading Text", function () {
    dualList.verifyHeadingText();
  });
  xit("Verify Left Search Box is visible", function () {
    dualList.VerifyVisiblityOfLeftSearchBox();
  });
  xit("Verify search box placeholder text", function () {
    dualList.VerifyPlaceHolderForLeftSearchBox();
  });
  xit("Verify Left Search Input", function () {
    dualList.verifyLeftSearchInput("Danville");
  });
  //left dropdown list
  xit("should filter items in the left list based on the search query", function () {
    dualList.verifySearchFunctionality("Danville");
  });
  xit("should restore the full list when the search box is cleared", function () {
    dualList.verfiyClearingLeftSearchBox();
  });
  xit("Verify no results matches when search yields no matches", function () {
    dualList.verifyNoResultMatchInLeftList();
  });
  it("should highlight selected item in left dropdown list", function () {
    dualList.VerifyItemHighlightInLeftDropDown("Kedungjenar");
  });
  it("should highlight when click multiple dropdown list element", function () {
    dualList.VerifyMultiClickInLeftList();
  });
  it('"All" button should be visible', function () {
    dualList.verifyLeftAllButtonVisible();
  });
  it("All dropdown in left search box should get highlighted when clicked on left all button", function () {
    dualList.clickLeftAllButton();
  });
  //Right arrow and left Arrow button
  it("right arrow and left arrow should be visible", function () {
    dualList.LeftAndRightArrowIsVisibility();
  });

  it("Verify clicking right button expected element move to right list", function () {
    dualList.ClickingRightArrow();
  });
});
