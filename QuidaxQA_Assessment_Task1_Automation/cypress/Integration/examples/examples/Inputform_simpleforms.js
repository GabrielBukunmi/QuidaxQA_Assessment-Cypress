/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage';
import SimpleFormPage from '../pageObject/SimpleFormPage';
let testData;
describe('Simple Forms Automation', function() {

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

  it('Single Input Field', function() {
    const homePage = new HomePage();
    const simpleFormPage = new SimpleFormPage();
    
    homePage.getInputFormList().click({force:true});
    homePage.getSimpleFormDemoPage().click({force:true});
    
    cy.scrollTo('center');
    
    // Validation that it landed on the single input field page
    simpleFormPage.SingleInputFieldHeading().should('contain', 'Single Input Field');

    simpleFormPage.EnterMessage().type(testData.inputText);
    
    // Verify if text is entered
    simpleFormPage.EnterMessage().should('have.value', testData.inputText);

    simpleFormPage.showMessage().should('be.enabled').click();

    // Grab the text from display message after clicking "Show Message button" and verify it matches inputText
    simpleFormPage.displayMessage().should('have.text', testData.inputText);

    // Clear the input field and verify it is cleared
    simpleFormPage.EnterMessage().clear().should('have.value', '');
  });

  it('Multiple Input Fields', function() {
    const homePage = new HomePage();
    const simpleFormPage = new SimpleFormPage();
    
    homePage.getInputFormList().click({force:true});
    homePage.getSimpleFormDemoPage().click({force:true});

    cy.scrollTo('bottom', { offset: { top: -100 } });

    // Enter the first number
    simpleFormPage.Multiple_firstInputField().type(testData.testNumber1);

    // Verify the first input field value
    simpleFormPage.Multiple_firstInputField().should('have.value', testData.testNumber1);
    
    // Enter the second number
    simpleFormPage.Multiple_2ndInputField().type(testData.testNumber2);

    // Verify the second input field value
    simpleFormPage.Multiple_2ndInputField().should('have.value', testData.testNumber2);

    // Click the button to get total
    simpleFormPage.getTotal().should('be.enabled').click();

    // Calculate the expected sum
    const expectedSum = (Number(testData.testNumber1) + Number(testData.testNumber2)).toString();

    // Verify the displayed value is the sum of the two input numbers
   simpleFormPage.multipleFieldDisplayValue().should('have.text', expectedSum);
    
    // Clear the input field and verify it is cleared
    simpleFormPage.Multiple_firstInputField().clear().should('have.value', '');
    simpleFormPage.Multiple_2ndInputField().clear().should('have.value', '');

    

  

  
  });
});

