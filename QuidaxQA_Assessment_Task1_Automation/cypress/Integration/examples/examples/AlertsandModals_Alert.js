/// <reference types="Cypress" />
import BootstrapAlertsPage from '../pageObject/BootstrapAlertPage';
import HomePage from '../pageObject/HomePage';

let testData;
describe('Bootstrap Alerts', function() {

  beforeEach(function() {
    // Set up anything required before each test
    cy.visit(Cypress.env('baseUrl'));
    cy.scrollTo('center');
  });

  it('Verify All Bootstrap Alerts buttons are enabled and clickable', function() {
    const homePage = new HomePage();
    const alertsPage = new BootstrapAlertsPage()
   homePage.getAlertandModalDropdown().click();
   homePage.BootStrapAlerts().click()

   //verify that it landed on bootstrap alert page
   alertsPage.pageHeading().should('contain.text', 'Bootstrap');

      // Verify autoclosable success button
      alertsPage.getAutoclosableSuccessButton().should('be.enabled').click();

      // Verify normal success button
      alertsPage.getNormalSuccessButton().should('be.enabled').click();
  
      // Verify autoclosable warning button
      alertsPage.getAutoclosableWarningButton().should('be.enabled').click();
  
      // Verify normal warning button
      alertsPage.getNormalWarningButton().should('be.enabled').click();
  
      // Verify autoclosable danger button
      alertsPage.getAutoclosableDangerButton().should('be.enabled').click();
  
      // Verify normal danger button
      alertsPage.getNormalDangerButton().should('be.enabled').click();
  
      // Verify autoclosable info button
      alertsPage.getAutoclosableInfoButton().should('be.enabled').click();
  
      // Verify normal info button
      alertsPage.getNormalInfoButton().should('be.enabled').click();
    });

    
    it('Verify autoclosable alerts close within their duration', function() {
      const homePage = new HomePage();
      const alertsPage = new BootstrapAlertsPage()
     homePage.getAlertandModalDropdown().click();
     homePage.BootStrapAlerts().click()
  
      function checkAutoClosableAlert(button, duration) {
        button.click();
        cy.wait(duration);
      }
  
      // Check autoclosable success alert
      checkAutoClosableAlert(alertsPage.getAutoclosableSuccessButton(), 5000);
  
      // Check autoclosable warning alert
      checkAutoClosableAlert(alertsPage.getAutoclosableWarningButton(), 4000);
  
      // Check autoclosable danger alert
      checkAutoClosableAlert(alertsPage.getAutoclosableDangerButton(), 6000);
  
      // Check autoclosable info alert
      checkAutoClosableAlert(alertsPage.getAutoclosableInfoButton(),  7000);
    
    });
  
    it('Verify normal alerts are displayed and can be closed', function() {
      const homePage = new HomePage();
      const alertsPage = new BootstrapAlertsPage()
      homePage.getAlertandModalDropdown().click();
      homePage.BootStrapAlerts().click()
      // Click normal success button, verify alert is displayed and can be closed
      alertsPage.getNormalSuccessButton().click();
      alertsPage.getNormalSuccessAlert().should('be.visible');
      alertsPage.getNormalSuccessCloseButton().click();
      
  
      // Click normal warning button, verify alert is displayed and can be closed
      alertsPage.getNormalWarningButton().click();
      alertsPage.getNormalWarningAlert().should('be.visible');
      alertsPage.getNormalWarningCloseButton().click();
      
  
      // Click normal danger button, verify alert is displayed and can be closed
      alertsPage.getNormalDangerButton().click();
      alertsPage.getNormalDangerAlert().should('be.visible');
      alertsPage.getNormalDangerCloseButton().click();
      
  
      // Click normal info button, verify alert is displayed and can be closed
      alertsPage.getNormalInfoButton().click();
      alertsPage.getNormalInfoAlert().should('be.visible');
      alertsPage.getNormalInfoCloseButton().click();
      
    });


    
  });

 


