import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const responseHandler = (req, res, next) => {
  //   fs.readFile("my-page.html", "utf8", (err, data) => {
  //     res.send(data);
  //   });
  res.sendFile(path.join(__dirname, "my-page.html"));
};
