require("dotenv").config();


const express = require("express")
const app = express()


require("./config/db.config")

const logger = require("morgan")
app.use(logger("dev"))



app.use(express.json())

app.use("/api/v1", require("./config/routes.config"))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))