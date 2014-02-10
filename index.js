var _3vot = require("3vot");


var Spine = require("spine");

module.exports = {
  
}

module.exports.setup = function(){

  require("spine/lib/ajax");
  require("3vot-js-salesforce/salesforceModel");
  require("3vot-js-salesforce/salesforceAjax");
  Spine.Model.host = _3vot.endpoint + "/salesforce";


}