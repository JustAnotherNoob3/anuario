import ImageManager from "../managers/ImageManager.js";

export function showFolder(req, res){
    let photoID = req.params.pid;
    try{
    let xd = ImageManager.getStudents(photoID);
    res.render("photos", {year: photoID, person: xd})
    } catch(err) {
        console.log(err)
    res.status(400).send({status: "error", error:"Carpeta dada no existe."})
    }
}