var express = require('express');
var router = express.Router();

const peliculasController = require("../controllers/peliculasController");

//Creacion
router.get("/crear", peliculasController.crear);
router.post("/crear", peliculasController.guardar);

//listado
router.get("/", peliculasController.listado);

//detalle
router.get("/:id", peliculasController.detalle);

//editar
router.get("/editar/:id", peliculasController.editar);
router.post("/editar/:id", peliculasController.actualizar);

//borrar
router.post("/borrar/:id", peliculasController.borrar);




module.exports = router;