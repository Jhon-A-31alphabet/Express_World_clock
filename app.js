import express from 'express'
import indexRoutes from "./routes/routes.js"; 
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()

app.set("views", join(__dirname, "views")); 
app.set("view engine", "ejs"); 


app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

app.use(cors());

app.use(indexRoutes);

app.listen(process.env.PORT|| 3000,()=>{
    console.log("server running")
})