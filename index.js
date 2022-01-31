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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});