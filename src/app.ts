import express from 'express';

import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';

import * as DefaultRoutes from "./routers/default"

export class Application {
    public express: express.Application;

    constructor() {
        this.express = express();

        this.init()
    }

    private init() {
        this.express.use(express.json());
        this.express.use(morgan("morgan"));
        this.express.use(cors());
        this.express.use(compression());
        this.express.use(helmet());

        this.express.use(DefaultRoutes.router);
    }

    public run(port: number = 3000) {
        return this.express.listen(port, () => {
            console.log(`Starting application on port: ${port}`);
        });
    }
}