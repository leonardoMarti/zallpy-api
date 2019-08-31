const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userController = require("./controllers/userController");
const projectController = require("./controllers/projectController");
const appointmentController = require("./controllers/appointmentController");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  // SAIR
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
  const page = req.query.page;
  const projects = await projectController.getProjects(page);
  res.send(projects);
});

app.get("/projects/:id", async (req, res) => {
  const id = req.params.id;
  const project = await projectController.getProjectById(id);
  res.send(project);
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
