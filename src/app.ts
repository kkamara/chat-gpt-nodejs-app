import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { generateResponse } from "./controllers";

dotenv.config({ path: path.join(__dirname, '../', '.env',) });

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
