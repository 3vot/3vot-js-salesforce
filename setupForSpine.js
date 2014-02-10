var _3vot = require("3vot");
var Spine = require("spine");

require("spine/lib/ajax");
require("3vot-js-salesforce/spineAjax");
require("3vot-js-salesforce/spineModel");
Spine.Model.host = _3vot.endpoint + "/salesforce";
