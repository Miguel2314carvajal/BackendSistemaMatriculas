import { Router } from 'express'
import {
    listarMatriculas,
    detalleMatricula,
    registrarMatricula,
    actualizarMatricula,
    eliminarMatricula
} from "../controllers/matricula_controller.js"
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

router.use(verificarAutenticacion) // Proteger todas las rutas

router.get("/matriculas", listarMatriculas)
router.get("/matricula/:id", detalleMatricula)
router.post("/matricula", registrarMatricula)
router.put("/matricula/:id", actualizarMatricula)
router.delete("/matricula/:id", eliminarMatricula)

export default router 