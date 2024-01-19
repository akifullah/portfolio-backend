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
app.use(express.json())


// app.use((req, res, next) => {
//     res.setHeader(
//       "Access-Control-Allow-Origin",
//       "https://your-frontend.com"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     res.setHeader("Access-Control-Allow-Private-Network", true);
//     //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
//     res.setHeader("Access-Control-Max-Age", 7200);
  
//     next();
//   });


// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(cors());

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
