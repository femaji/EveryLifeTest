const Page = require("./page");

class MainDetailsPage extends Page {
  get titleType() {
    return $('select[name ="title"]');
  }
  get firstName() {
    return $("#firstname");
  }

  get surName() {
    return $("#surname");
  }
  get knownAs() {
    return $("#nickname");
  }
  get sexType() {
    return $("#sex");
  }
  get dateOfBirth() {
    return $("#dob");
  }
  get socialServiceNumber() {
    return $("#ssNumber");
  }
  get weightInKilograms() {
    return $("#admissionWeightInKilograms");
  }
  get heightInMeters() {
    return $("#admissionHeightInMeters");
  }
  get startDate() {
    return $("#startDate");
  }
get building(){
  return $("#building");
}
get floor(){
  return $("#floor");
}
get room(){
  return $("#room");
}
get internalTel(){
  return $("#internalTel");
}
get address1(){
  return $("#address1");
}
get address2(){
  return $("#address2");
}
get cityName(){
  return $("#city");
}
get countyName(){
  return $("#county");
}
get postCode(){
  return $("#postcode");
}
get countryName(){
  return $("#country");
}
get telephoneNumber(){
  return $("#tel");
}
get emailAddress(){
  return $("#email");
  }
  get mobileNumber(){
    return $("#mobile");
  }
  get accessDetails(){
    return $("#accessDetails");
  }
  get allergies(){
    return $("#allergies");
  }
  get nextOfKin(){
  return $("#nextofkin");
  }
  get nextOfKinTelephone(){
 return $("#nextofkintel");
  }
  get other(){
    return $("#other");
  }
  get nhsNumber(){
    return $("#nhsNumber");
  }
  get doctor(){
    return $("#doctor");
  }
  get surgery(){
return $("#surgery");
  }
  get surgeryTelephone(){
  return $("#surgerytel");
  }
  get saveButton(){
    return $("//*[@id='content']/customer-details-component/workflow-actions/div/div/button[1]");
  }
  get detailsTab(){
    return $("//*[@id='context-bar']/div/div[3]/div/ul/li[8]/a");
  }
  

  async inputTitle() {
    await this.titleType.selectByIndex(1);
  }
  async inputFirstName() {
    await this.firstName.setValue("Smith");
  }
  async inputSurname() {
    await this.surName.setValue("Mike");
  }
  async inputKnownAs() {
    await this.knownAs.setValue("SM");
  }
  async inputSexType() {
    await this.sexType.selectByIndex(1)
  }
  async inputDob() {
    await this.dateOfBirth.setValue('24/10/1999')
  }
  async inputSocialServiceNum() {
    await this.socialServiceNumber.setValue('2345678')
  }
  async inputWeight() {
    await this.weightInKilograms.setValue('80')
  }
  async inputHeight() {
    await this.weightInKilograms.setValue('80')
  }
  async inputStartDate() {
    await this.startDate.setValue('12/05/2023')
  }
  async selectBuilding() {
    await this.building.selectByIndex(0)
  }
  async selectFloor() {
    await this.floor.selectByIndex(0)
  }
  async inputRoom() {
    await this.room.setValue('cold')
  }
  async inputInternalTel() {
    await this.internalTel.setValue('09822100')
  }
  async inputAddress1() {
    await this.address1.setValue('11 croydon road')
  }
  async inputAddress2() {
    await this.address2.setValue('south croydon')
  }
  async inputCityName() {
    await this.cityName.setValue('London')
  }
  async inputCountyName() {
    await this.countyName.setValue('Surrey')
  }
  async inputPostcode() {
    await this.postCode.setValue('CR0 4GT')
  }
  async inputCountry() {
    await this.countryName.setValue('England')
  }
  async inputTelephoneNumber() {
    await this.telephoneNumber.setValue('078654432')
  }
  async inputEmailAddress() {
    await this.emailAddress.setValue('email@gmail.com')
  }
  async inputMobileNumber() {
    await this.mobileNumber.setValue('07865432123')
  }
  async inputAccessDetails() {
    await this.accessDetails.setValue('tell me that you have')
  }
  async inputAllergies() {
    await this.allergies.setValue('nuts')
  }
  async inputNextOfKin() {
    await this.nextOfKin.setValue('son')
  }
  async inputNextOfKinTelephone() {
    await this.nextOfKinTelephone.setValue('0987654321')
  }
  async inputOther() {
    await this.other.setValue('cousin mate')
  }
  async inputNhsNumber() {
    await this.nhsNumber.setValue('5555555555')
  }
  async inputDoctorsName() {
    await this.doctor.setValue('Dr henry nduka')
  }
  async inputSurgeryName() {
    await this.surgery.setValue('croydon surgery')
  }
  async inputSurgeryTelephone() {
    await this.surgeryTelephone.setValue('0176543213')
  }
  async clickOnDetailsTab() {
   await this.detailsTab.click();
}
}

module.exports = new MainDetailsPage();



