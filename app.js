import express from 'express'
import indexRoutes from "./routes/routes.js"; 
import { join, dirname } from "path";
import path from 'path';
import { fileURLToPath } from "url";
import morgan from 'morgan';

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

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(morgan('tiny'))

app.use(indexRoutes);


app.listen(process.env.PORT|| 3000,()=>{
    console.log("server running")
})
