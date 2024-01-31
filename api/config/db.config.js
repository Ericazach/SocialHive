const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/SocialHive'

mongoose
  .connect(MONGO_URI)
  .then(() => console.info(`Successfully connected to the database ${MONGO_URI}`))
  .catch((err) => console.error("An error occurred while connecting to MongoDB", err))