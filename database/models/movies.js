module.exports = (sequelize, dataTypes) => {
    const Movies = sequelize.define("Movies", {
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3, 1),
        },
        awards: {
            type: dataTypes.INTEGER(11).UNSIGNED,
        },
        release_date: {
            type: dataTypes.DATE
        },
        length: {
            type: dataTypes.INTEGER(10),
        },
    },{
        timestamps: false
    });
    return Movies;

    
};
