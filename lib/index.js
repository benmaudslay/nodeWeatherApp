const request = require("request")
const { promisify } = require("util")

const promisedRequest = promisify(request)

const APPID = "f34fdad5a8ab08f8c0aab5e7f175bab5"

const getWeather = async () => {
  let data = await promisedRequest({
    uri: `https://api.openweathermap.org/data/2.5/find?q=London,uk&APPID=${APPID}`,
    json: true
  })

  return data.body
}

module.exports = getWeather
