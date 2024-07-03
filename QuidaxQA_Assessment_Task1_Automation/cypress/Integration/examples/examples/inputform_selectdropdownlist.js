/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage';
import SimpleFormPage from '../pageObject/SimpleFormPage';
import SelectDropDownList from '../pageObject/SelectDropdownList';
let testData;
describe('Select Dropdown List', function() {

  before(function() {
    //load fixture data
    cy.fixture('mytestdata').then(function(data) {
        testData = data;
    });
});

  beforeEach(function() {
    // Set up anything required before each test
    cy.visit(Cypress.env('baseUrl'));
    cy.scrollTo('center');
  });

  it('Select List Demo Functionalities', function() {
    const homePage = new HomePage();
    const simpleFormPage = new SimpleFormPage();
    const dropdownListPage = new SelectDropDownList();
    
    homePage.getInputFormList().click({force:true});
    homePage.selectDropdownList().click({force:true});
    
    cy.scrollTo('center');
    
    // Validation that it landed on the Select list demo page
    dropdownListPage.SelectListDemoHeading().should('contain', 'Select List Demo');

    // Iterate through each option in the dropdown list, select it, and verify that the selection is correctly displayed
    testData.daysOfTheWeek.forEach((day) => {
      dropdownListPage.getSelectForm().select(day).should('have.value', day);
      dropdownListPage.daySelected().should('contain.text', `Day selected :- ${day}`);
    });
    
   
  });

  it('Multi-Select List Demo', function() {
    const homePage = new HomePage();
    const simpleFormPage = new SimpleFormPage();
    const dropdownListPage = new SelectDropDownList();
    
     homePage.getInputFormList().click({force:true});
    homePage.selectDropdownList().click({force:true});
 
   cy.scrollTo('bottom', { offset: { top: -100 } });

    //verify that buttons are enabled on page
   dropdownListPage.firstSelectedButton().should("be.enabled")
   dropdownListPage.getAllSelectedButton().should('be.enabled')

   dropdownListPage.selectCalifornia();
dropdownListPage.selectFlorida();
dropdownListPage.selectNewJersey();
   dropdownListPage.firstSelectedButton().click()
   dropdownListPage.displaySelectedOption().should('contain.text', 'First selected option is : California');

   //click to get all selected options
   dropdownListPage.getAllSelectedButton().click()
   dropdownListPage.displaySelectedOption().should('contain.text', "Options selected are : California,Florida,New Jersey")

   });
});

