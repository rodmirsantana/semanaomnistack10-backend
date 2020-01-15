const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@clusterrocketseat-krwhm.gcp.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.post("/users", (request, response) => {
  console.log(request.body);
  return response.json({ message: "Hello OmniStack" });
});

app.listen(3333);
