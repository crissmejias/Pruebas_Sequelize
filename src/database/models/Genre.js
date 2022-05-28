module.exports = (sequelize, DataTypes) => { 
    const Genre = sequelize.define('Genres',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING(100),

        },
        ranking: {
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.INTEGER
        }

    },
    {
       timestamps: false,  
    })
    return Genre;
}