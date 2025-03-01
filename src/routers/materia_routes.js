import { Router } from 'express'
import {
    listarMaterias,
    detalleMateria,
    registrarMateria,
    actualizarMateria,
    eliminarMateria
} from "../controllers/materia_controller.js"
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

router.use(verificarAutenticacion) // Proteger todas las rutas

router.get("/materias", listarMaterias)
router.get("/materia/:id", detalleMateria)
router.post("/materia", registrarMateria)
router.put("/materia/:id", actualizarMateria)
router.delete("/materia/:id", eliminarMateria)

export default router 