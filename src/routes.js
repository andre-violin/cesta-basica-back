const { Router } = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const PetController = require("./controllers/PetController");
const CarController = require("./controllers/CarController");

const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");

const routes = Router();

routes.get("/", (req, res) => {
  const api = {
    author: "André L. Violin",
    name: "backend-cesta-basica",
    version: "1.0.0",
    license: "MIT",
    gitAddres: "https://github.com/andre-violin/cesta-basica-back"
  };
  return res.json(api);
});

routes.get("/users/:email", UserController.index);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.post("/users", authorizationMiddleware, UserController.store);
routes.get("/users", authorizationMiddleware, UserController.list);
routes.delete("/users/:id", authorizationMiddleware, UserController.destroy);
routes.get("/teste", (req, res) => res.json({ ok: true }));

routes.post("/pet", PetController.store);
routes.get("/pet/:id", PetController.index);
routes.get("/pet/", PetController.list);

routes.post("/car", CarController.store);
routes.get("/car", CarController.list);
routes.get("/car/:id", CarController.index);

module.exports = routes;
