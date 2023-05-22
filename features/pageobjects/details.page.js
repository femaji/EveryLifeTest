const Page = require('./page');

class DetailsPage extends Page {

get update() {
 return $('#customer-status-update')
  }
  get statusName(){
    return $('select[ng-model="statusModalVm.status.newStatus"]')
  }
  get saveStatusBtn() {
return $("/html/body/div[1]/div/div/status-modal-component/div[3]/button[1]")
  }
  get reason(){
    return $("/html/body/div[1]/div/div/status-modal-component/div[2]/form/div[2]/div[1]/div/input")
  }

  get statusMessage(){
    return $("customer-status")
  }

    
async selectUpdate() {
  await this.update.click();
}
async choseStatus() {
  await this.statusName.selectByIndex(2);
}
async giveReasons() {
  await this.reason.setValue('need a change');
}
async selectedStatus() {
  await this.saveStatusBtn.click();

}
}
module.exports = new DetailsPage();