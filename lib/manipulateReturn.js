const manipulateReturn = data => {
  let main = data.main
  main.temp = (main.temp - 32) / 1.8
  main.temp = main.temp.toFixed(1) + "℃"
  main.Temperature = main.temp
  main.humidity += "%"
  main.Humidity = main.humidity
  main.Wind = data.wind.speed + " mph"
  main.Weather = data.weather[0].main
  delete main.temp_min
  delete main.temp_max
  delete main.pressure
  delete main.temp
  delete main.humidity

  return main
}

module.exports = manipulateReturn
