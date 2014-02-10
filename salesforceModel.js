var Spine = require('spine');

Spine.Model.SalesforceModel = {
  extended: function() {
    return this.extend({
      url: "/" + this.className,
      fromJSON: function(objects) {
        var obj, value, _i, _len, _results;
        if (!objects) {
          return;
        }
        if (typeof objects === 'string') {
          objects = JSON.parse(objects);
        }
        if (objects.records) {
          objects = objects.records;
        }
        if (Spine.isArray(objects)) {
          _results = [];
          for (_i = 0, _len = objects.length; _i < _len; _i++) {
            value = objects[_i];
            if (value.Id) {
              value.id = value.Id;
            }
            obj = new this(value);
            _results.push(obj);
          }
          return _results;
        } else {
          if (value.Id) {
            value.id = value.Id;
          }
          return new this(objects);
        }
      }
    });
  }
};
