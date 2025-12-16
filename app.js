console.log("Hello Boolean !!");

import { log } from "console";
import express from "express"

const app = express();
const port = 3000;




app.listen(port, () => {
    console.log(`Server avviato con successo nella porta ${port}`);
    
})

