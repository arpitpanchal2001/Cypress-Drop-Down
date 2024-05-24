/// <reference types="cypress" />
import DualListDom from "./dualList.dom";
var dualListDom = new DualListDom();
export default class DualList {
  verifyHeadingText() {
    dualListDom.getHeading().then((heading) => {
      const headingText = heading.text();
      expect(headingText).to.equal("Bootstrap Dual List Demo");
    });
  }
  VerifyVisiblityOfLeftSearchBox() {
    dualListDom.getLeftSearchBox().should("be.visible");
  }
  VerifyPlaceHolderForLeftSearchBox() {
    dualListDom.getLeftSearchBox().should("have.attr", "placeholder", "search");
  }

  verifyLeftSearchInput(search) {
    let text;
    dualListDom
      .getLeftSearchBox()
      .type(search)
      .invoke("val")
      .then((value) => {
        text = value;
      })
      .then(() => {
        expect(text).to.equal(search);
      });
  }
  verifySearchFunctionality(search) {
    this.verifyLeftSearchInput(search);
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      if (el.text() === search) {
        dualListDom.getLeftDropDownList().eq(index).should("be.visible");
      } else {
        dualListDom
          .getLeftDropDownList()
          .eq(index)
          .should("have.attr", "style", "display: none;");
      }
    });
  }
  verfiyClearingLeftSearchBox() {
    let emptyArray = new Array();
    dualListDom.getLeftSearchBox().type("Danville");
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      emptyArray.push(el.text());
    });
    dualListDom
      .getLeftSearchBox()
      .clear()
      .then(() => {
        dualListDom.getLeftDropDownList().each((el, index, list) => {
          expect(el).to.contain.text(emptyArray[index]);
        });
      });
  }

  verifyNoResultMatchInLeftList() {
    dualListDom.getLeftSearchBox().type("Mentor");
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      cy.wrap(el).should("have.attr", "style", "display: none;");
    });
  }
  VerifyItemHighlightInLeftDropDown(search) {
    dualListDom.getLeftSearchBox().type(search);
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      cy.log(el.text());
      if (el.text() === search) {
        cy.wrap(el).click();
        cy.wrap(el).should("have.class", "active");
      }
    });
  }

  VerifyMultiClickInLeftList() {
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      cy.wrap(el)
        .click()
        .then(() => {
          cy.wrap(el).should("have.class", "active");
        });
    });
  }

  verifyLeftAllButtonVisible() {
    dualListDom.getLeftAllButton().should("be.visible");
  }

  clickLeftAllButton() {
    dualListDom.getLeftAllButton().click();
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      cy.wrap(el).should("have.class", "active");
    });
  }
  LeftAndRightArrowIsVisibility() {
    dualListDom.getLeftArrow().should("be.visible");
    dualListDom.getRightArrow().should("be.visible");
  }
  ClickingRightArrow() {
    let rightList = new Array();
    dualListDom.getRightDropDownList().each((el, index, list) => {
      rightList.push(el.text());
    });
    dualListDom.getLeftDropDownList().each((el, index, list) => {
      cy.wrap(el).click();
      rightList.push(el.text());
    });
    dualListDom.getRightArrow().click();
    dualListDom.getRightDropDownList().each((el, index, list) => {
      expect(el).to.contain.text(rightList[index]);
    });
  }
}
