module.exports = (app) => {
  const bike = require("./bike-controller.js");
  let router = require("express").Router();
  app.use("/api/bikes", router);

  router.post("/", bike.create);
  router.post("/rent", bike.rent);
  router.get("/", bike.readAll);
  router.get("/rent", bike.getRents);
  router.delete("/:id", bike.deleteBike);
  router.delete("/rent/:bike", bike.cancelRent);
};
