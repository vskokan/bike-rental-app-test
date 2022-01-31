module.exports = app => {
    const bike = require("./bike-controller.js");
    let router = require("express").Router();
    app.use('/api/bikes', router);

    router.post("/", bike.create);
    router.post("/rent", bike.rent);
    router.get("/", bike.readAll);
    router.get("/rent", bike.getRents);
    // router.get("/:id", bait.readOne);
    // router.post("/update", au.verify, multer.upload.none(), bait.update);
    router.delete("/:id", bike.deleteBike);
    router.delete("/rent/:bike", bike.cancelRent);
}