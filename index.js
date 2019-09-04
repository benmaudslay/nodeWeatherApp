// Dependencies
const express = require("express")
const hbs = require("express-handlebars")
const path = require("path")
// My functions
const getWeather = require("./lib/index")

// Init express
const app = express()

// Tells express which files are static, i.e. Won't change e.g. style.css
app.use(express.static(path.join(__dirname, "public")))

// Default handlebars setup
app.engine(
  ".hbs",
  hbs({
    defaultLayout: "layout",
    extname: ".hbs"
  })
)

// Telling app we are using the handlebars engine.
app.set("view engine", ".hbs")

app.get("/", async (req, res) => {
  let data = await getWeather()
  let main = data.list[0].main
  let location = data.list[0].name
  console.log(data.list[0].main)
  res.render("index", {
    stats: main,
    location
  })
})

app.listen(3000, () => {
  console.log("Listening on port 3000")
})
