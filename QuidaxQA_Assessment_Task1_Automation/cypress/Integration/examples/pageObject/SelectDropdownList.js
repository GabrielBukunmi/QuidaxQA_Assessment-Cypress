class SelectDropDownList
{

SelectListDemoHeading() 
{
  return  cy.get(':nth-child(4) > .panel-heading')
}
getSelectForm()
{
return   cy.get('#select-demo')
}

daySelected()
{
return cy.get('.selected-value')
}
firstSelectedButton()
{
return cy.get('#printMe')
}
getAllSelectedButton(){
   return  cy.get('#printAll')
}

selectCalifornia() {
  cy.get('[value="California"]').click({ force: true });
}

// Method to select Florida
selectFlorida() {
  cy.get('[value="Florida"]').click({ force: true, ctrlKey: true });
}

// Method to select New Jersey
selectNewJersey() {
  cy.get('[value="New Jersey"]').click({ force: true, ctrlKey: true });
}

// Method to select New York
selectNewYork() {
  cy.get('[value="New York"]').click({ force: true, ctrlKey: true });
}
displaySelectedOption(){
  return cy.get('.getall-selected')
}
}
export default SelectDropDownList;
