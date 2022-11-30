import minimist from "minimist";
import express from "express";
import { roll } from "./lib/roll.js";

const args = minimist(process.argv.slice(2));
const port = args.port || 5000;

const application = express();
application.use(express.urlencoded({extended: true}));

application.get('/app/', (req, res) => {
    res.send('200 OK');
    res.status(200);
})

application.get('/app/roll/', (req, res) => {
    res.send(roll(6, 2, 1));
    res.status(200);
})

application.post('/app/roll/', (req, res) => {
    res.send(roll(parseInt(req.body.sides), parseInt(req.body.dice), parseInt(req.body.rolls)));
    res.status(200);
})

application.get('/app/roll/:sides/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), 2, 1));
    res.status(200);
})

application.get('/app/roll/:sides/:dice/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), 1));
    res.status(200);
})

application.get('/app/roll/:sides/:dice/:rolls/', (req, res) => {
    res.send(roll(parseInt(req.params.sides), parseInt(req.params.dice), parseInt(req.params.rolls)));
    res.status(200);
})

// if there is an error
application.use((req, res) => {
	res.send("404 NOT FOUND");
	res.status(404);
});

application.listen(port);
