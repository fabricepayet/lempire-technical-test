import URLS from "../constants/urls.constants"
import { Exports } from "./export/collection"

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomUrl() {
  return randomElement(URLS)
}

const runExports = () => {
  Meteor.setInterval(() => {

    Exports.update(
      {
        percent: { $lt: 100 }
      },
      {
        $inc: {
          percent: 5
        }
      },
      {
        multi: true
      }
    )

    Exports.update(
      {
        percent: 100,
        url: { $exists: false }
      },
      {
        $set: {
          url: randomUrl()
        }
      }
    )
  }, 1000)
}

export default runExports
