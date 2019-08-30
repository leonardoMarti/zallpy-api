const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
const projectController = require("./controllers/projectController");
const appointmentController = require("./controllers/appointmentController");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const users = await userController.getUsers();
  res.send(users);
});

app.post("/users", async (req, res) => {
  const params = req.body;
  const user = await userController.saveUser(params);
  res.send(user);
});

app.post("/login", async (req, res) => {
  const params = req.body;
  const login = await userController.login(params);
  res.send({ login });
});

app.get("/projects", async (req, res) => {
  const projects = await projectController.getProject();
  res.send(projects);
});

app.post("/projects", async (req, res) => {
  const params = req.body;
  const projects = await projectController.saveProject(params);
  res.send(projects);
});

app.post("/appointments", async (req, res) => {
  const params = req.body;
  const appointment = await appointmentController.saveAppointment(params);
  res.send({ appointment });
});

app.listen(3000);
