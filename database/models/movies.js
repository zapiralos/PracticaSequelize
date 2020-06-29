module.exports = (sequelize, dataTypes) => {
    const Pelicula = sequelize.define("Pelicula", {
        title: {
            type: dataTypes.STRING(500),
            allowNull: true,
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
        },
        awards: {
            type: dataTypes.INTEGER(11).UNSIGNED,
        },
        release_date: {
            type: dataTypes.DATE,
        },
        length: {
            type: dataTypes.INTEGER(10),
        }
    },{
        tableName: "movies",
        timestamps: false
    });
    
    //1ra relacion de uno a muchos - movies to genres -
    //2da relacion de muchos a muchos con tabla intermedia / actor_movie /
    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Genero, {
            as: "genero",
            foreignKey: "genre_id"
        });
        Pelicula.belongsToMany(models.Actor, {
            as: "actores",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        });
    }

    return Pelicula;

    
};
