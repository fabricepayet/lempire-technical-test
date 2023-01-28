import { Exports } from "./collection"

Meteor.publish('exports', () => {
  return Exports.find()
})
