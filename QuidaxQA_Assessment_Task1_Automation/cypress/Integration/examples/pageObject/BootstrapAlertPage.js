class BootstrapAlertsPage
{

pageHeading() 
{
  return  cy.get('h2')
}
getAutoclosableSuccessButton() {
  return cy.get('#autoclosable-btn-success');
}
getAutoclosableSuccessAlert() {
  return cy.get('.alert-autoclosable-success');
}

// Normal success
getNormalSuccessButton() {
  return cy.get('#normal-btn-success');
}
getNormalSuccessAlert() {
  return cy.get('.alert-normal-success');
}
getNormalSuccessCloseButton() {
  return cy.get('.alert-normal-success .close');
}

// Autoclosable warning
getAutoclosableWarningButton() {
  return cy.get('#autoclosable-btn-warning');
}
getAutoclosableWarningAlert() {
  return cy.get('.alert-autoclosable-warning');
}

// Normal warning
getNormalWarningButton() {
  return cy.get('#normal-btn-warning');
}
getNormalWarningAlert() {
  return cy.get('.alert-normal-warning');
}

getNormalWarningCloseButton() {
  return cy.get('.alert-normal-warning .close');
}
// Autoclosable danger
getAutoclosableDangerButton() {
  return cy.get('#autoclosable-btn-danger');
}
getAutoclosableDangerAlert() {
  return cy.get('.alert-autoclosable-danger');
}

// Normal danger
getNormalDangerButton() {
  return cy.get('#normal-btn-danger');
}
getNormalDangerAlert() {
  return cy.get('.alert-normal-danger');
}
getNormalDangerCloseButton() {
  return cy.get('.alert-normal-danger .close');
}
// Autoclosable info
getAutoclosableInfoButton() {
  return cy.get('#autoclosable-btn-info');
}
getAutoclosableInfoAlert() {
  return cy.get('.alert-autoclosable-info');
}

// Normal info
getNormalInfoButton() {
  return cy.get('#normal-btn-info');
}
getNormalInfoAlert() {
  return cy.get('.alert-normal-info');
}

getNormalInfoCloseButton() {
  return cy.get('.alert-normal-info .close');
}
}

export default BootstrapAlertsPage;
