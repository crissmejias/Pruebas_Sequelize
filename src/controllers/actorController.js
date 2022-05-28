const db = require('../database/models/index');
const actorController = {
    list: (req,res) => {
        db.Actors.findAll()
        .then(result => {
            res.render('actors', {actors: result})
        })
    },
    detail: (req,res) =>{
        db.Actors.findByPk(req.params.id)
        .then(result => {
            res.render('actorsDetail', {actor: result});
        })
    }
}
module.exports = actorController;