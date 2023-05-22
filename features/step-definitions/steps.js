const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/home.page");
const ResidentPage = require("../pageobjects/resident.page");
const mainsDetailsPage = require("../pageobjects/mainsDetails.page");
const detailsPage = require("../pageobjects/details.page");

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a message saying (.*)$/, async (message) => {
  await expect(HomePage.checkMessage).toBeExisting();
  await expect(HomePage.checkMessage).toHaveTextContaining(message);
});

When(/^I clicked on the residents tab$/, async () => {
  await HomePage.selectTheResidentTab();
});

When(/^I have clicked on the add a new resident button$/, async () => {
  await ResidentPage.selectTheAddButton();
});

When(
  /^I have selected title for the resident title on the add resident page$/,
  async () => {
    await browser.pause(1000);
    await mainsDetailsPage.inputTitle();
  }
);

When(
  /^I have entered the first name for the resident first name on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputFirstName();
  }
);

When(
  /^I have entered the surname for the resident surname on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputSurname();
  }
);

When(
  /^I have entered the knownAs for the field on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputKnownAs();
  }
);

When(/^I have selected male from sex on the add resident page$/, async () => {
  await mainsDetailsPage.inputSexType();
});

When(/^I have selected date of birth on the add resident page$/, async () => {
  await mainsDetailsPage.inputDob();
});

When(
  /^I have entered the ssn number for the resident social service number on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputSocialServiceNum();
  }
);

When(
  /^I have entered weight for the resident weight on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputWeight();
  }
);

When(
  /^I have entered height for the resident height on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputHeight();
  }
);

When(
  /^I have entered admission date for the resident start date on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputStartDate();
  }
);

When(
  /^I have selected the building name on the add resident page$/,
  async () => {
    await mainsDetailsPage.selectBuilding();
  }
);

When(/^I have selected the floor name on the add resident page$/, async () => {
  await mainsDetailsPage.selectFloor();
});

When(/^I have entered the room name on the add resident page$/, async () => {
  await mainsDetailsPage.inputRoom();
});

When(
  /^I have entered the internal tel for the add resident page$/,
  async () => {
    await mainsDetailsPage.inputInternalTel();
  }
);

When(
  /^I have entered address1 for the resident address 1 on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputAddress1();
  }
);

When(
  /^I have entered address2 for the resident address 2 on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputAddress2();
  }
);

When(
  /^I have entered city name for the resident city name on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputCityName();
  }
);

When(
  /^I have entered county name for the resident county name on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputCountyName();
  }
);

When(
  /^I have entered postcode for the resident postcode on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputPostcode();
  }
);

When(
  /^I have entered country name for the resident country name on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputCountry();
  }
);

When(
  /^I have entered telephone number for the resident tel number on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputTelephoneNumber();
  }
);

When(
  /^I have entered an email address for the resident email address on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputEmailAddress();
  }
);

When(
  /^I have entered a mobile number for the resident mobile on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputMobileNumber();
  }
);

When(
  /^I have entered access details for the resident access details on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputAccessDetails();
  }
);

When(
  /^I have entered allergies for the resident add resident page$/,
  async () => {
    await mainsDetailsPage.inputAllergies();
  }
);

When(
  /^I have entered next of kin for the resident next of kin on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputNextOfKin();
  }
);

When(
  /^I have entered next of kin tel for the resident next of kin telepone number on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputNextOfKinTelephone();
  }
);

When(
  /^I have entered other relevent people on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputOther();
  }
);

When(/^I entered the nhs number on the add resident page$/, async () => {
  await mainsDetailsPage.inputNhsNumber();
});

When(/^I have entered doctor on the add resident page$/, async () => {
  await mainsDetailsPage.inputDoctorsName();
});

When(
  /^I have entered surgery for the resident surgery on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputSurgeryName();
  }
);

When(
  /^I have entered surgery tel for the resident on the add resident page$/,
  async () => {
    await mainsDetailsPage.inputSurgeryTelephone();
  }
);

When(/^I have clicked the save button on the add resident page$/, async () => {
  await $(
    "//*[@id='content']/customer-details-component/workflow-actions/div/div/button[1]"
  ).click();
});

When(/^I have clicked on the residents details tab$/, async () => {
  await mainsDetailsPage.clickOnDetailsTab();
  await browser.pause(1000);
});

When(
  /^I have set the status to active on the resident details page with reason$/,
  async () => {
    await detailsPage.selectUpdate();
    await browser.pause(1000);
    await detailsPage.choseStatus();
    await browser.pause(1000);
    await detailsPage.giveReasons();
    await detailsPage.selectedStatus();
    await browser.pause(1000);
  }
);
When(/^I have search for the resident by name$/, async () => {
  await ResidentPage.searchForResident();
  await browser.pause(1000);
 

});

Then(
  /^the resident details page displays the correct data for the new resident$/,
  async () => {
		await ResidentPage.selectResident();
    await mainsDetailsPage.clickOnDetailsTab();
    await browser.pause(2000);
    await expect(ResidentPage.residentNames).toBeExisting();
    
  }
);
