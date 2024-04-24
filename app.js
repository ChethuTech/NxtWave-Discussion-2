const express = require('express')

const addDays = require('date-fns/addDays')

let add_100_days = addDays(new Date(), 100)

let expectedResult = `${add_100_days.getDate()}/${
  add_100_days.getMonth() + 1
}/${add_100_days.getFullYear()}`

const app = express()

app.get('/', (request, response) => {
  response.send(expectedResult)
})

app.listen(3000)

module.exports = app
