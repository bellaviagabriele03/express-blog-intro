console.log("Hello Boolean !!");

import { log } from "console";
import express from "express"
import { title } from "process";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("IL MIO SERVER")
})


const posts = [
    {
        id: "1",
        title: "Post-1",
        content: "Oggi ho creato il mio primo server, in locale e senza l'aiuto di matteoStrap !!",
        tags: ["local", "host", "matteoStrap", "react è morto", "npm install david"]

    },
    {
        id: "2",
        title: "Post-2",
        content: "se solo avessi avuto BootStrap... senza di lui mi sento perso :(",
        tags: ["local", "host", "matteoStrap", "react è morto", "npm install david"]

    },
    {
        id: "3",
        title: "Post-3",
        content: "Da domani npm install Vado a Correre, P.S: non ci credi nemmeno tu !",
        tags: ["local", "host", "matteoStrap", "react è morto", "npm install david"]

    },
    {
        id: "4",
        title: "Post-4",
        content: "Miao Corporation: azieda esclusiva per chi usa solo BootStrap e non matteoStrap. Nata il giorno: 404 Error (esiste da sempre : D)",
        tags: ["local", "host", "matteoStrap", "react è morto", "npm install david", "node ./miao-main.Loris"]

    },
]





app.listen(port, () => {
    console.log(`Server avviato con successo nella porta ${port}`);

})

