import express from "express";
import cors from "cors";
import promptRoutes from "./routes/prompt.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/prompt", promptRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});