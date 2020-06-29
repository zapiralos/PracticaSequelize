module.exports = (sequelize, dataTypes) => {
    const Genero = sequelize.define("Genero", {
        name: {
            type: dataTypes.STRING,
            allowNull: false
            },
            ranking: {
                type: dataTypes.INTEGER(10),
            },
            active: {
                type: dataTypes.TINYINT(1),
            },
        },
        {
            tableName: "genres",
            timestamps: false
        });

    //relacion de muchos a uno - genres to movie -    
    Genero.associate = function(models){
        Genero.hasMany(models.Pelicula, {
            as: "peliculas",
            foreignKey: "genre_id"
        });
    }

    return Genero;
};
