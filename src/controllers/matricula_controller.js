import Matricula from "../models/Matricula.js"
import Estudiante from "../models/Estudiante.js"
import Materia from "../models/Materia.js"

const listarMatriculas = async (req, res) => {
    try {
        const matriculas = await Matricula.find({ usuario: req.usuario._id })
            .populate('id_estudiante', 'nombre apellido cedula')
            .populate('id_materia', 'nombre codigo creditos')
        res.status(200).json(matriculas)
    } catch (error) {
        res.status(500).json({ msg: "Error al listar las matrículas" })
    }
}

const detalleMatricula = async (req, res) => {
    const { id } = req.params
    try {
        const matricula = await Matricula.findOne({ 
            _id: id,
            usuario: req.usuario._id 
        })
            .populate('id_estudiante', 'nombre apellido cedula')
            .populate('id_materia', 'nombre codigo creditos')
        if (!matricula) 
            return res.status(404).json({ msg: "Matrícula no encontrada" })
        res.status(200).json(matricula)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la matrícula" })
    }
}

const registrarMatricula = async (req, res) => {
    try {
        // Verificar si el estudiante existe y pertenece al usuario
        const estudiante = await Estudiante.findOne({
            _id: req.body.id_estudiante,
            usuario: req.usuario._id
        })
        if (!estudiante) {
            return res.status(404).json({ msg: "Estudiante no encontrado" })
        }

        // Verificar si la materia existe y pertenece al usuario
        const materia = await Materia.findOne({
            _id: req.body.id_materia,
            usuario: req.usuario._id
        })
        if (!materia) {
            return res.status(404).json({ msg: "Materia no encontrada" })
        }

        const matricula = new Matricula({
            ...req.body,
            usuario: req.usuario._id
        })
        await matricula.save()
        res.status(201).json({ msg: "Matrícula registrada correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar la matrícula" })
    }
}

const actualizarMatricula = async (req, res) => {
    const { id } = req.params
    try {
        const matricula = await Matricula.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!matricula) 
            return res.status(404).json({ msg: "Matrícula no encontrada" })
        
        // Si se está actualizando el estudiante, verificar que exista y pertenezca al usuario
        if (req.body.id_estudiante) {
            const estudiante = await Estudiante.findOne({
                _id: req.body.id_estudiante,
                usuario: req.usuario._id
            })
            if (!estudiante)
                return res.status(404).json({ msg: "Estudiante no encontrado" })
        }

        // Si se está actualizando la materia, verificar que exista y pertenezca al usuario
        if (req.body.id_materia) {
            const materia = await Materia.findOne({
                _id: req.body.id_materia,
                usuario: req.usuario._id
            })
            if (!materia)
                return res.status(404).json({ msg: "Materia no encontrada" })
        }
        
        matricula.set(req.body)
        await matricula.save()
        res.status(200).json({ msg: "Matrícula actualizada correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la matrícula" })
    }
}

const eliminarMatricula = async (req, res) => {
    const { id } = req.params
    try {
        const matricula = await Matricula.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!matricula) 
            return res.status(404).json({ msg: "Matrícula no encontrada" })
        
        await matricula.deleteOne()
        res.status(200).json({ msg: "Matrícula eliminada correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la matrícula" })
    }
}

export {
    listarMatriculas,
    detalleMatricula,
    registrarMatricula,
    actualizarMatricula,
    eliminarMatricula
} 