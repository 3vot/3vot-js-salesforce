// Salesforce Login
var _3vot = require("3vot");

//Regular Salesforce Login Provider
// must include getProviderObject, with name and action. Action is the function the will be executed if login is not registered in session

var LoginProvider = {
  name: ""
};

function getProviderObject(){
  return {
    name: LoginProvider.name,
    action: login,
    validateProviderFromLogins: validateProviderFromLogins
  };
}

function login(){
  var currentUrl = _3vot.utils.getCurrentUrl();
  var pck = _3vot.package;
  window.location =  _3vot.endpoint + '/salesforce/' + LoginProvider.name + '/login?profile=' + pck.profile  + "&app_url=" + currentUrl 
}

function validateProviderFromLogins(){
  var validated = false;
  for(providerNameKey in _3vot.logins){
    if(providerNameKey.indexOf("salesforce") > -1) validated = true     
  }
  return validated;
}

LoginProvider.getProviderObject = getProviderObject;

module.exports = function(providerName){
  LoginProvider.name = providerName
  return LoginProvider;
}