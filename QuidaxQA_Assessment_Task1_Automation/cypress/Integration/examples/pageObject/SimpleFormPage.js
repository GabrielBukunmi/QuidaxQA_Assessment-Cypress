class SimpleFormPage
{

SingleInputFieldHeading() 
{
  return  cy.get(':nth-child(4) > .panel-heading');
}
EnterMessage()
{
return cy.get('.form-group > #user-message')
}

showMessage()
{
return cy.get('#get-input > .btn');
}

displayMessage(){
   return  cy.get('#display')
}
Multiple_firstInputField()
{
return cy.get('#value1')
}
Multiple_2ndInputField()
{
return cy.get('#value2')
}

getTotal()
{
return cy.get('#gettotal > .btn')

}

multipleFieldDisplayValue(){
  return cy.get('#displayvalue')
}
}
export default SimpleFormPage;
