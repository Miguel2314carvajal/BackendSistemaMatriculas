import Materia from "../models/Materia.js"

const listarMaterias = async (req, res) => {
    try {
        const materias = await Materia.find({ usuario: req.usuario._id })
        res.status(200).json(materias)
    } catch (error) {
        res.status(500).json({ msg: "Error al listar las materias" })
    }
}

const detalleMateria = async (req, res) => {
    const { id } = req.params
    try {
        const materia = await Materia.findOne({ 
            _id: id,
            usuario: req.usuario._id 
        })
        if (!materia) {
            return res.status(404).json({ msg: "Materia no encontrada" })
        }
        res.status(200).json(materia)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la materia" })
    }
}

const registrarMateria = async (req, res) => {
    try {
        const materia = new Materia({
            ...req.body,
            usuario: req.usuario._id
        })
        await materia.save()
        res.status(201).json({ msg: "Materia registrada correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar la materia" })
    }
}

const actualizarMateria = async (req, res) => {
    const { id } = req.params
    try {
        const materia = await Materia.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!materia) {
            return res.status(404).json({ msg: "Materia no encontrada" })
        }
        materia.set(req.body)
        await materia.save()
        res.status(200).json({ msg: "Materia actualizada correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la materia" })
    }
}

const eliminarMateria = async (req, res) => {
    const { id } = req.params
    try {
        const materia = await Materia.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!materia) {
            return res.status(404).json({ msg: "Materia no encontrada" })
        }
        await materia.deleteOne()
        res.status(200).json({ msg: "Materia eliminada correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la materia" })
    }
}

export {
    listarMaterias,
    detalleMateria,
    registrarMateria,
    actualizarMateria,
    eliminarMateria
}