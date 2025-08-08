import path from "path";
import { readFileSync } from "fs";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "hi.json");
  const data = readFileSync(filePath, "utf8");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(data);
}
