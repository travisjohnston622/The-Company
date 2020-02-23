import express = require("express");
import { Company } from "./modules/Company";

const app: express.Application = express();

const company: Company = new Company();
company.init();

app.get("/", (req: express.Request, res: express.Response) => {
	res.send("Hello World");
});

app.listen(3000, () => {
	console.log(`Example app listening on port: 3000`);
});
