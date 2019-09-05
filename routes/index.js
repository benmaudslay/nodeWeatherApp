const { Router } = require("express")
const router = Router()
const getWeather = require("../lib/index")
const manipulateReturn = require("../lib/manipulateReturn")

router.get("/", async (req, res) => {
  res.render("index")
})

router.post("/", async (req, res) => {
  let location = req.body.location
  let data = await getWeather(location)

  if (data.list[0]) {
    let main = manipulateReturn(data.list[0])
    let weatherImg = "assets/" + data.list[0].weather[0].icon + "@2x.png"

    res.render("index", {
      stats: main,
      location,
      weatherImg
    })
  } else {
    res.render("index", { err: "The location you entered hasn't been found!" })
  }
})

module.exports = router
