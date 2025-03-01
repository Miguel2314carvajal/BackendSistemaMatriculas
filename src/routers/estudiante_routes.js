import { Router } from 'express'
import {
    listarEstudiantes,
    detalleEstudiante,
    registrarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
} from "../controllers/estudiante_controller.js"
import verificarAutenticacion from '../middlewares/autenticacion.js'

const router = Router()

router.use(verificarAutenticacion) // Proteger todas las rutas

router.get("/estudiantes", listarEstudiantes)
router.get("/estudiante/:id", detalleEstudiante)
router.post("/estudiante", registrarEstudiante)
router.put("/estudiante/:id", actualizarEstudiante)
router.delete("/estudiante/:id", eliminarEstudiante)

export default router