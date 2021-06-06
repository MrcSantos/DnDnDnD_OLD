const MongoClient = require('mongodb').MongoClient;

const DB_URI = process.env.DB_URI;

const db = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { db: db }
