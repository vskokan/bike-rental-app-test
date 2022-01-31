const { Pool } = require('pg')
const connectionString = 'postgres://ytaminiudhzesh:0dc34e232740c273a549080a6f7caa352e4483a2de3524029e61f2ce5f441043@ec2-52-31-219-113.eu-west-1.compute.amazonaws.com:5432/de1pvefojhcdu3'

const pool = new Pool({
    // user: 'ytaminiudhzesh',
    // host: 'ec2-52-31-219-113.eu-west-1.compute.amazonaws.com',
    // database: 'de1pvefojhcdu3',
    // password: '0dc34e232740c273a549080a6f7caa352e4483a2de3524029e61f2ce5f441043',
    // port: 5432,
    connectionString,
    "ssl": {
        "require": true,
        "rejectUnauthorized": false
      },
})

module.exports = {
    query: (text, params, callback) => {
      return pool.query(text, params, callback)
    },
  }