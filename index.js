const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const corsOptions = {
    origin: "*",
    credentials: true
  };




app.use(cors(corsOptions));

app.use(bodyParser.json());

require("./src/bike-routes")(app);

const serveStatic = require('serve-static');
app.use(serveStatic(__dirname + "/dist"));

app.listen(3000) //, '192.168.0.101'); 

// app.listen(
//   () => console.info('Server listening on port ', 3000)
// );