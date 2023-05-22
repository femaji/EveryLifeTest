
module.exports = class Page {
   
    open (path) {
        return browser.url(`https://qaapp.passgenius.com/logon${path}`)
    }
}
