//combines main routers from public index and server index
//import * as express from "express";
//import searchRouter from "./routes";
//import * as morgan from "morgan";
//import * as path from "path";
//import * as cors from "cors";

//const app = express();

//app.use(cors());
// morgan=log method req & where its going (get, put, etc and route)
//app.use(morgan("dev"));
//app.use(express.static("public"));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(searchRouter);
//app.use("/", express.static(path.join(__dirname, "../public/")));
//app.use("*", (req, res, next) => {
//  res.sendFile(path.join(__dirname, "../public/index.html"));
//});

//const port = process.env.PORT || 3000;
//app.listen(port, () => console.log(`HEARD! On  ${port}`));
