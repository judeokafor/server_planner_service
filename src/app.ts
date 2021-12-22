import cors from "cors";
import express, { Request, Response } from "express";

import routes from "./api/routes";
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (_: Request, res: Response) => {
	return res.send("Up and Running");
});

app.use("/", routes);

export default app;
