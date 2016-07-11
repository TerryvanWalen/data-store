'use strict';

var fs = require('fs');

module.exports = function(verb) {
  verb.use(require('verb-generate-readme'));
  verb.helper('read', function(fp) {
    return fs.readFileSync(fp, 'utf8');
  });
  verb.helper('example', function(str, name) {
    return str.split('./').join(name);
  });
  // WIP
  verb.helper('depdocs', function(name, options) {
    var apidocs = this.app.getHelper('apidocs');
    return apidocs.call(this, require.resolve(name), options);
  });
  verb.task('default', ['readme']);
};
