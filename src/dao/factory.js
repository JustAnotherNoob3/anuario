import config from "../config/config.js"
import DaoFile from "./filemanager/dao-manager.js";

const Dao = DaoFile;

export default Dao; //exported to the managers so they can use appropiate DAO
                    //exportado a "managers/index".