class HomePage
{

getInputFormList() 
{
  return cy.get(':nth-child(3) > :nth-child(1) > .tree-indicator');
}
getSimpleFormDemoPage()
{
return cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(1) > a')
}

selectDropdownList(){
  return cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(4) > a')
}
getAlertandModalDropdown()
{
return cy.get(':nth-child(5) > .tree-indicator');
}

BootStrapAlerts(){
   return cy.get(':nth-child(5) > ul > :nth-child(1) > a')
}
BootStrapModal()
{
return cy.get(':nth-child(5) > ul > :nth-child(2) > a')
}

}
export default HomePage;
