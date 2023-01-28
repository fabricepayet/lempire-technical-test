import { Template } from 'meteor/templating';
import { Exports } from '../imports/api/export/collection';

import './main.html';

Template.export.onCreated(() => {
  Meteor.subscribe('exports')
})

Template.export.events({
  'click .button': () => {
    Meteor.call('export.create')
  },
});

Template.export.helpers({
  exports: () => {
    return Exports.find()
  }
});
