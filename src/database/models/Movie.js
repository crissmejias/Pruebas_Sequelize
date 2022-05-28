
module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movies',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING(500),
        rating: DataTypes.INTEGER,
        awards: DataTypes.INTEGER,
        release_date: DataTypes.DATE,
        length: DataTypes.INTEGER,
        genre_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: "Genre", 
                key: "id" 
            }
         }
        },
        {
            timestamps: false,
        }
        )    
        return Movie;
}