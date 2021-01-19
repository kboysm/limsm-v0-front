import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import * as express from 'express'
import * as http from 'http';
import * as bodyparser from 'body-parser'
import * as winston from 'winston'
import * as expressWinston from 'express-winston'
import * as cors from 'cors'
import { CommonRoutesConfig } from './common/common.routes.config';
import { UsersRoutes } from './users/users.routes.config';
import debug from 'debug'
import   mysqlConnection  from './db'


const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port: Number = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use( bodyparser.json() );
app.use( cors() );
app.use( expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))

routes.push( new UsersRoutes(app) );

app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    )
}))

app.get('/', (req: express.Request , res: express.Response) => {
    res.status(200).send('Server Up');
})


mysqlConnection.query('SELECT * from testTable', (error, rows , fields) => {
    if (error) throw error;
    console.log('mysql test rows: ', rows);
  });

server.listen(port, ()=>{
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig)=> {
        debugLog(`Routes configured from ${route.getName()}`);
    })
})


createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
