module.exports = (sequelize, DataTypes) => { 
    const Actor = sequelize.define('Actors',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: DataTypes.STRING(100),

        },
        last_name: {
            type: DataTypes.STRING(100)
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER,
            references: { 
                model: "Movie", 
                key: "id" 
            }
        }

    },
    {
       timestamps: false,  
    })
    return Actor;
}