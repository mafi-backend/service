// Importes
const express = require("express"); // Import express ( framework )
const mongoose = require("mongoose"); // Import mongoose ( conectar a la db )
require("dotenv").config(); // Import dotenv ( Crear variables de ambiente custom )
// Tambien instalé nodeamon para que se reinicie el servidor cada vez que se haga un cambio en el código
const cors = require("cors"); // Import cors ( para que el front pueda hacer peticiones al back )
const app = express();
app.use(cors()); // Para que el front pueda hacer peticiones al back
const port = process.env.PORT || 9000;

// Endpoints
const userRoutes = require('./route/user');
const itemRoutes = require('./route/item');
const categoryRoutes = require('./route/category');

// Middleware ( Require Mapping + todos los endpoints )
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use("/api/v1", itemRoutes);
app.use("/api/v1", categoryRoutes);

// routes
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// connect to db
// aca uso una variable de ambiente, porque son datos sensibles
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {console.log("Connected to MongoDB");})
    .catch((err) => {console.log(err);});

app.listen(port, () => {
  console.log("Listening on port", port);
});