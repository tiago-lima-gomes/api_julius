import express from "express"
import cors from "cors"

import { conectarServidorNoBD } from "./config/db";

const app = express();
app.use(express.json())
app.use(cors())

conectarServidorNoBD();

export default app;