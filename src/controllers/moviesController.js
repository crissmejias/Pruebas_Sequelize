const db = require('../database/models/index.js');
const moviesController = {
    list: (req,res)=>{
        db.Movies.findAll()
        .then(resultado =>{
            res.render('moviesList', {movies: resultado});
        })
    },
    detail: (req,res) =>{
        let movie;
        db.Movies.findByPk(req.params.id)
        .then(resultado =>{
            movie = resultado;
            res.render('moviesDetail', {movie: movie});
        });
    },
    new: (req,res) =>{
        let newest;
        db.Movies.findAll({order: [["release_date","DESC"]]})
        .then(resultado => {
            newest = resultado;
            res.render('newestMovies', {movies: newest})
        })
    },
    recomended: (req,res) => {
        let recomended;
        db.Movies.findAll({order: [['rating', 'DESC']], limit: 5})
        .then(resultado => {
            recomended = resultado;
            res.render('recommendedMovies',{ movies: recomended});
        })
    }



}
module.exports = moviesController;