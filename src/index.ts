import express, {Request, Response} from 'express'
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'
import {Team} from './models/team'

const app = express()
var db = new JsonDB(new Config("football", true, false, '/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.route('/teams')
    .get((req: Request, res: Response): void => {
    var data = <Team[]>db.getData("/");
    res.status(200).json(data);
    })
    .post((req: Request, res: Response): void => {
    const team = <Team>req.body;
    var data = <Team[]>db.getData("/");
    var teamFound: boolean = false;
    data.forEach((element: Team) => {
        if(team.name == element.name){
            teamFound = true;
            element.img = team.img;
        }
    });
    if(!teamFound) {
        db.push("/",[team],false);
    } else {
        db.push('/',data);
    }
    res.status(200).json(data);
});

//use types for request params n interface class for foreach objects
app.get('/teams/:team_name', (req: Request, res: Response): void => {
    console.log(req.params)
    var data = <Team[]>db.getData("/");
    var returnData=null;
    data.forEach((element: Team) => {
        if(req.params.team_name == element.name){
            returnData = element;
        }
    });
    res.status(200).json(returnData);
});

app.listen(3000)