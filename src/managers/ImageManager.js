import { ImageDao } from "./index.js"

class ImageManager{

    getStudents(year){
        return ImageDao.getAll(year).map(x => ({name: x.split(".")[0], path:x}));
    }
    
}


export default (new ImageManager())