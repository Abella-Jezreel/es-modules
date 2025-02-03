import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const responseHandler = (req, res, next) => {
    fs.readFile('my-page.html', 'utf8')
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
    });
//   res.sendFile(path.join(__dirname, "my-page.html"));
};
