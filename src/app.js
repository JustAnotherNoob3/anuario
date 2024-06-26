import express from "express"
import viewsRouter from './routers/views-router.js'
import { __dirname } from "./utils/utils.js";
import handlebars from 'express-handlebars';
import {addLogger,logger} from './utils/logger.js'
const PORT = 8030;
const app = express();

//setup
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//handlebars
app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine', 'handlebars');

//middleware
app.use(addLogger);
app.use(express.static(__dirname + "/public"));

//routers
app.use('/anuario/',viewsRouter);

app.listen(PORT, () => logger.info("Server startup"));