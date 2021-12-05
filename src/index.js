const express = require("express");
const path = require("path");

const routes = require("./routes");
const { clog } = require("./middleware/clog");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clog);
app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
