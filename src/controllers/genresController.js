const db = require('../database/models/index.js');
const genreController = {
    list: (req,res) =>{
        db.Genres.findAll()
        .then(response => {
            res.render('genresList', {genres: response});
        })
    },
    detail: (req,res) => {
        db.Genres.findByPk(req.params.id)
        .then(response => {
            res.render('genresDetail', {genre : response});
        })
    }
}

module.exports = genreController;