const Page = require('./page');

class ResidentPage extends Page {

  get addButton() {
    return $("//*[@id='content']/customers-component/workflow-actions/div/div/button[2]")
}
get searchUsers() {
  return $("#filterTerm")
}
get residentNames() {
  return $("/html/body/div[2]/customer-component/div/div/div/customer-details-component/div[2]/form/div[1]/div[1]/div")
}
get detailsTab(){
  return $("//*[@id='context-bar']/div/div[3]/div/ul/li[8]/a");
}
get chooseResident(){
return $("//*[@id='customersContainer']/div[3]/div[2]/ng-include[1]/div/div[1]/div[1]/h3/span")

}


 async selectTheAddButton(){
  await this.addButton.click();
 }
 async searchForResident(){
await this.searchUsers.setValue('Smith');
 }
 async clickOnDetailsTab() {
  await this.detailsTab.click();
}
async selectResident(){
await this.chooseResident.click();
}
}
module.exports = new ResidentPage();