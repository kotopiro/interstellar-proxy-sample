import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/ov", cors({ origin: true }));
app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public/index.html"));
});

app.get("/ov/test", (req, res) => {
  res.send("これは /ov/test のサンプルレスポンスです！");
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
