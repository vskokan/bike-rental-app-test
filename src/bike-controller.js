const client = require("./db.js");

exports.create = (req, res) => {
  const bike = {
    name: req.body.name,
    type: req.body.type,
    price: req.body.price,
  };
  client
    .query("INSERT INTO bikes (name, type, price) VALUES ($1, $2, $3);", [
      bike.name,
      bike.type,
      bike.price,
    ])
    .then((result) => {
      res.status(200).json({ message: "inserted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ message: "error" });
    });
};

exports.readAll = (req, res) => {
  client
    .query(
      "SELECT * FROM bikes WHERE bikes.id NOT IN (SELECT bike FROM rents WHERE bike IS NOT NULL)"
    )
    .then((result) => {
      console.log(result.rows);
      res.status(200).json({ data: result.rows });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ message: "error" });
    });
};

exports.getRents = (req, res) => {
  client
    .query(
      "SELECT bikes.id, bikes.name, bikes.type, bikes.price, rents.hours, " +
        "round(SUM(CASE WHEN rents.hours <= 20 THEN rents.hours * bikes.price ELSE 20 * bikes.price + bikes.price / 2 * (rents.hours - 20) END), 2) AS sum " +
        "FROM bikes INNER JOIN rents " +
        "ON rents.bike = bikes.id GROUP BY (bikes.id, rents.hours, bikes.price);"
    )
    .then((result) => {
      console.log(result.rows);
      res.status(200).json({ data: result.rows });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ message: "error" });
    });
};

exports.rent = (req, res) => {
  const rent = {
    bike: req.body.bike,
    time: req.body.time,
  };
  client
    .query("INSERT INTO rents (bike, hours) VALUES ($1, $2);", [
      rent.bike,
      rent.time,
    ])
    .then((result) => {
      res.status(200).json({ message: "inserted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ message: "error" });
    });
};

exports.deleteBike = (req, res) => {
  client
    .query("DELETE FROM bikes WHERE id = $1", [req.params.id])
    .then((result) => {
      res.status(200).json({ message: "deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ message: "error" });
    });
};

exports.cancelRent = (req, res) => {
  client
    .query("DELETE FROM rents WHERE bike = $1", [req.params.bike])
    .then((result) => {
      res.status(200).json({ message: "deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(200).json({ message: "error" });
    });
};
