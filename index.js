require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT ||  8000;
const adminRoute = require("./routes/adminLoginRoute");
const projectRouter = require("./routes/projectRoutes");
const Connection = require("./db/Connection");
const contactRoute = require("./routes/contactRoute");
const path = require("path");
const skillRouter = require("./routes/skillRoute");
const expRouter = require("./routes/expRoute");
const eduRouter = require("./routes/eduRoute");
const smProjectRouter = require("./routes/smProjectRoutes");
const cvRouter = require("./routes/cvRoute");

Connection();
const uplaod = path.join(process.cwd(), "uploads")
app.use(express.static(uplaod))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://akif-ullah.vercel.app");
res.setHeader("Access-Control-Allow-Credentials", "omit");

res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST,PUT");
res.setHeader("Access-Control-Max-Age",  600);
// res.setHeader("Content-Type", "Application/json") ,

res.setHeader("Access-Control-Allow-Headers", 
"Access-Control-Allow-Origin",
 "Origin,Accept, X-Requested-With,  Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
  })
app.use(express.json())

// ROUTES
app.use(projectRouter)
app.use(smProjectRouter)
app.use(adminRoute)
app.use(contactRoute);
app.use(skillRouter)
app.use(expRouter)
app.use(eduRouter)
app.use(cvRouter)

app.listen(port, () => {
    console.log(`Server Start on http://localhost:${port}`);
})
