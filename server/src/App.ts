import express = require('express');
import cors from 'cors';
import path from 'path';

import http from 'http';
import index from './Index';
import bodyParser from 'body-parser';

class App{
    public app: express.Application;


    public static bootstrap(): App{
        return new App();
    }

    constructor(){
        this.app = express();

        this.app.use(cors());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(express.json());
        this.app.use(express.static(path.join(__dirname, 'public')));

        this.app.get("/", (req: express.Request, res: express.Response) => {
            res.send("hello");
        });

        this.app.get("/Acct", (req: express.Request, res: express.Response) => {
            res.json({
                "id": "id",
                "password": "password"
            });
        });

        this.app.post("/Acct", (req: express.Request, res: express.Response) => {
            const{
                body: {id, password}
            } = req;
            
            res.json({
                "id": id,
                "pw": password
            });
        });
    }
}

export default App;