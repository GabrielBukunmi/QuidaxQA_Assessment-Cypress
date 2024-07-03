/// <reference types="Cypress" />
import BootstrapAlertsPage from '../pageObject/BootstrapAlertPage';
import BootstrapModalPage from '../pageObject/BootstrapModalPage';
import HomePage from '../pageObject/HomePage';

let testData;
describe('Bootstrap Modals', function() {

  beforeEach(function() {
    // Set up anything required before each test
    cy.visit(Cypress.env('baseUrl'));
    cy.scrollTo('center');
  });

  it('Launch Single Modal', function() {
    const homePage = new HomePage();
    const modalPage = new BootstrapModalPage()
   homePage.getAlertandModalDropdown().click();
   homePage.BootStrapModal().click()

   //verify that it landed on bootstrap alert page
   modalPage.pageHeading().should('contain.text', 'Bootstrap Modal');
   //check if modal is enabled and click
   modalPage.LaunchSingleModal().click({force:true})

   //check if modal is displayed by verifying if close button is present
   modalPage.closeSingleModal().should("be.visible")

   //close modal
   modalPage.closeSingleModal().click()
      
    });

    it('Launch Multiple Modal', function() {
      const homePage = new HomePage();
      const modalPage = new BootstrapModalPage()
     homePage.getAlertandModalDropdown().click();
     homePage.BootStrapModal().click()
  
     //verify that it landed on bootstrap alert page
     modalPage.pageHeading().should('contain.text', 'Bootstrap Modal');
     //check if modal is enabled and click
     cy.scrollTo('center');
     modalPage.LaunchFirstModal().click({force:true})
  

     //check if firstmodal is displayed by verifying if close button is present
     modalPage.firstModalCloseButton().should("be.visible")
  
     //check if this contains title called "First Modal"
     modalPage.firstModalTitle().should("contain.text","First Modal");

     //Launch SecondModal
     modalPage.launchSecondModal().click()

     //verify second modal is launched with its title
     modalPage.secondModalTitle().should("contain.text","Modal 2")

     //close second modal
     modalPage.closeSecondModal().click()

     //verify second modal is closed
     modalPage.secondModalTitle().should("not.be.visible")


     //close first modal
     modalPage.firstModalCloseButton().click()

//verify first modal can close
modalPage.firstModalTitle().should("not.be.visible")
        
      });

    
    
  
    
  
  
    
  });

 


