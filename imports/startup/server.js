import '/imports/api/export/publication.js';
import '/imports/api/export/methods.js';

import runExports from '../api/run-exports';

Meteor.startup(function () {
  runExports()
});
