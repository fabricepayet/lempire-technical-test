import { Exports } from "./collection"

Meteor.methods({
  'export.create': async () => {
    Exports.insert({
      percent: 0
    })
  }
})
