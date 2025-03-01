import {Schema, model} from 'mongoose'

const materiaShema = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    codigo: {
        type: String,
        required: true,
        unique: true
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
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
},{
    timestamps: true
})

export default model('Materia', materiaShema) 