const express = require("express")
const app = express()
const http = require("http")
const mongoose = require("mongoose")
const port = process.env.PORT || 3000
const { Server } = require("socket.io")

const cors = require("cors")
const User = require("./models/user.model")

require("dotenv").config()

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connected")

    server.listen(port, () => {
      console.log("hello world")
    })
  })
  .catch((err) => {
    console.log("Some error occured", err)
  })

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
})

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world")
})

app.get("/users", async (req, res) => {
  const users = await User.find({})

  const response = { users: users }
  res.status(200).json(response)
})

app.post("/users/new", async (req, res) => {
  //   await User.deleteMany({})

  const user = new User(req.body)

  await user.save()
  res.status(201).send({ message: "success" })
})

app.use("/users/search", async (req, res) => {
  const { query } = req.query
  const profiles = await User.find({ $text: { $search: query } })

  // const profiles = await User.find({
  //   $text: {
  //     $search: {
  //       wildcard: {
  //         query: `*${query}*`,
  //         path: { wildcard: "*" },
  //         allowAnalyzedField: true,
  //       },
  //     },
  //   },
  // })
  // const profiles = await User.find({
  //   $text: {
  //     $search: {
  //       regex: {
  //         query: `${query}*`,
  //         path: ["name", "location", "bio", "skills"],
  //         // allowAnalyzedField: true,
  //       },
  //     },
  //   },
  // })

  console.log(profiles)

  const response = { users: profiles }
  res.status(200).send({ message: response })
})

app.post("/user/new", (req, res) => {})
