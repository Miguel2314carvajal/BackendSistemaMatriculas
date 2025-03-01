import Estudiante from "../models/Estudiante.js"

const listarEstudiantes = async (req, res) => {
    try {
        const estudiantes = await Estudiante.find({ usuario: req.usuario._id })
        res.status(200).json(estudiantes)
    } catch (error) {
        res.status(500).json({ msg: "Error al listar los estudiantes" })
    }
}

const detalleEstudiante = async (req, res) => {
    const { id } = req.params
    try {
        const estudiante = await Estudiante.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!estudiante)
            return res.status(404).json({ msg: "Estudiante no encontrado" })
        res.status(200).json(estudiante)
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el estudiante" })
    }
}

const registrarEstudiante = async (req, res) => {
    try {
        const estudiante = new Estudiante({
            ...req.body,
            usuario: req.usuario._id
        })
        await estudiante.save()
        res.status(201).json({ msg: "Estudiante registrado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar el estudiante" })
    }
}

const actualizarEstudiante = async (req, res) => {
    const { id } = req.params
    try {
        const estudiante = await Estudiante.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!estudiante)
            return res.status(404).json({ msg: "Estudiante no encontrado" })

        estudiante.set(req.body)
        await estudiante.save()
        res.status(200).json({ msg: "Estudiante actualizado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el estudiante" })
    }
}

const eliminarEstudiante = async (req, res) => {
    const { id } = req.params
    try {
        const estudiante = await Estudiante.findOne({
            _id: id,
            usuario: req.usuario._id
        })
        if (!estudiante)
            return res.status(404).json({ msg: "Estudiante no encontrado" })

        await estudiante.deleteOne()
        res.status(200).json({ msg: "Estudiante eliminado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el estudiante" })
    }
}

export {
    listarEstudiantes,
    detalleEstudiante,
    registrarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante
} 