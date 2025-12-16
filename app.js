console.log("Hello Boolean !!");

import { log } from "console";
import express from "express"
import { title } from "process";

const app = express();
const port = 3000;




app.get("/", (req, res) => {
    res.send("IL MIO SERVER")
})


const posts = [{
    id:"1",
    title: "Post-1",
    content: "Oggi ho creato il mio primo server, in locale e senza l'aiuto di matteoStrap !!"
    
}]



app.listen(port, () => {
    console.log(`Server avviato con successo nella porta ${port}`);
    
})

