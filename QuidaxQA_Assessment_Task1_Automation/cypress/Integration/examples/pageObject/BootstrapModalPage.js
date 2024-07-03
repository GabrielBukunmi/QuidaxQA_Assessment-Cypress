class BootstrapModalPage
{

pageHeading() 
{
  return  cy.get('h2')
}
LaunchSingleModal(){
  return cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]')
}
closeSingleModal(){
  return cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]');
}
LaunchFirstModal(){
return cy.get('[href="#myModal"]')
}
firstModalCloseButton()
{
  return cy.get('#myModal > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
}
firstModalTitle(){
  return cy.get('#myModal > .modal-dialog > .modal-content > .modal-header > .modal-title')
}
launchSecondModal(){
  return cy.get('.modal-body > .btn')
}
secondModalTitle()
{
  return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title')
}
closeSecondModal()
{
  return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]')
}
}
export default BootstrapModalPage;
