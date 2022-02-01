const { Pool } = require("pg");
const connectionString =
  "postgres://rhjwjgfowdlcgq:bd56e51e08f137d7fff31987a215282e2c0135dc92da0082aaee9757248ab748@ec2-52-209-185-5.eu-west-1.compute.amazonaws.com:5432/d5p682v1ttdfh3";

const pool = new Pool({
  connectionString,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
