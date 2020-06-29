module.exports = (sequelize, dataTypes) => {
    const Actor = sequelize.define("Actor", {
        first_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
        },
        favorite_movie_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        }
    },{
        tableName: "actors",
        timestamps: false
    });

    //relacion de muchos a muchos con tabla intermedia / actor_movie /
    Actor.associate = function(models){
        Actor.belongsToMany(models.Pelicula, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        });
    }
    
    return Actor;
    
};
