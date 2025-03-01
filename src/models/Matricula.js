import {Schema, model} from 'mongoose'

const matriculaSchema = new Schema({
    codigo: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    creditos: {
        type: Number,
        required: true,
        min: 1
    },
    id_estudiante:{
        type: Schema.Types.ObjectId,
        ref: 'Estudiante',
        required: true
    },
    id_materia:{
        type: Schema.Types.ObjectId,
        ref: 'Materia',
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},{
    timestamps: true
})

export default model('Matricula', matriculaSchema)