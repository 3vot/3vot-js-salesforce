var Spine = require('spine');
var _3vot = require('3vot')

Spine.Ajax.setProvider = function(providerName){
  Spine.$.ajaxSetup({
      xhrFields: {
         withCredentials: true
      },
      crossDomain: true,
      headers: {
        provider: providerName
      }
  });  
}


Spine.Ajax.Collection.prototype.query = function(params, options) {
  var queryString,
    _this = this;
  if (params == null) {
    params = {};
  }
  if (options == null) {
    options = {};
  }
  queryString = options.queryString ? options.queryString : this.model.getQuery(params, options);
  return this.ajax(params, {
    type: 'GET',
    url: Spine.Model.endpoint + ("/?query=" + queryString)
  }).done(this.recordsResponse).fail(this.failResponse).done(function(records) {
    _this.model.trigger("querySuccess");
    return _this.model.refresh(records, options);
  });
};


Spine.Model.SalesforceAjax = {
  extended: function() {
    var _this = this;
    this.query = function() {
      var _ref;
      return (_ref = this.ajax()).query.apply(_ref, arguments);
    };
  }
};

