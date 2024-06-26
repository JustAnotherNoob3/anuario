import { __dirname } from "../../utils/utils.js";
import { logger } from "../../utils/logger.js";
import fs from 'fs';

export default class Dao
{
    path = "";
    constructor(name){
        this.path = __dirname+"/public/"+name;
    }
    get(subdirectory, name){
        return fs.readFileSync(this.path+"/"+subdirectory+"/"+name);
    }
    getAll(subdirectory){
        console.log(this.path+"/"+subdirectory);
        const smth =  fs.readdirSync(this.path+"/"+subdirectory);
        logger.debug(smth)
        return smth;
    }
    getRoot(name){
        return fs.readFileSync(this.path+"/"+name);
    }
    getRootAll(){
        return fs.readdirSync(this.path);
    }
    getSubdirectories(){
        return fs.readdirSync(this.path).filter(x => fs.statSync(x).isDirectory());
    }

}