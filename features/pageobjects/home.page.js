

const Page = require('./page');

class HomePage extends Page {
    
     get checkErrorMessage () {
        return $("//*[@id='loginForm']/div[1]");
    }
    get checkMessage () {
        return $('span[class ="ng-binding"]');
    }
    get residentTab () {
        return $('#customersTab');
    }

    async selectTheResidentTab () {
        await this.residentTab.click();
    }

}
module.exports = new HomePage();
