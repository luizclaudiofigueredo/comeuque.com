import mongoose from 'mongoose'

const visitanteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
    },    
    telefone: {
        type: String,
        trim: true,
        unique: true,
    },
    grupo: {
        type: String,
        trim: true,
    },    
    observacoes: {
        type: String,
        trim: true,
    },    
    data_visita: {
        type: Date,
        default: Date.now,
    },  
    ativo: { 
        type: Boolean, 
        default: true 
    }    
},{
    timestamps: true
})

export default mongoose.models.Visitante || mongoose.model("Visitante", visitanteSchema)