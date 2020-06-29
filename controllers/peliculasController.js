let { Genero } = require("../database/models");
let { Actor } = require("../database/models");
let { Pelicula } = require("../database/models");

let peliculasController = {
    crear: async (req, res) => {
            const generos = await Genero.findAll();
                return res.render("creacionPeliculas", { generos });
            },

    guardar: async (req, res) => {
            await Pelicula.create({
                title: req.body.titulo,
                awards: req.body.premios,
                length: req.body.length,
                rating: req.body.rating,
                release_date: req.body.release_date,
                genre_id: req.body.genero
            });
                res.redirect("/peliculas");
            },
    
    listado: async (req, res) => {
        const peliculas = await Pelicula.findAll();
        
            res.render("listadoPeliculas", { peliculas });
    },
    
    detalle: async (req, res) => {
        const peliculas = await Pelicula.findByPk(req.params.id, {
            //asociacion de tablas:
            include: [{association: "genero"},{association: "actores"}]
        });
            res.render("detallePeliculas", { peliculas });
    },    
    
    editar: async (req, res) => {
        // se llama los datos de peliculas a modificar
        const peliculas = await Pelicula.findByPk(req.params.id);

        // se llama los a los generos posibles a modificar
        const generos = await Genero.findAll();

            res.render("editarPelicula", { peliculas , generos });
    },  
    
    actualizar: async (req, res) => {
        await Pelicula.update({
            title: req.body.titulo,
            awards: req.body.premios,
            length: req.body.length,
            rating: req.body.rating,
            release_date: req.body.release_date,
            genre_id: req.body.genero
        },{
            where: {
                id: req.params.id
            }
        });
            res.redirect("/peliculas/" + req.params.id);
        },

        borrar: async (req, res) => {
            
            await Pelicula.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.redirect("/peliculas");
        },  

}


module.exports = peliculasController;