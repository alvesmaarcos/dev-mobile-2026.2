import express from "express";
import { notaRouter } from "./routers/notaRouter.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/notas", notaRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
