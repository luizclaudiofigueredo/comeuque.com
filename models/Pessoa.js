import mongoose from 'mongoose'

const pessoaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
    },
    telefone: {
        type: String,
        trim: true,
        unique: true,
    },
    grupo: {
        type: String,
    },
    observacoes: {
        type: String,
        trim: true,
    },    
    data_cadastro: {
        type: Date,
        default: Date.now,
    },
    data_encontro: {
        type: Date,
    },
    data_batismo: {
        type: Date,
    },
    data_alianca: {
        type: Date,
    },
    lider_celula: {
        type: String,
    },
    evangelico: {
        type: Boolean, 
    },
    ativo: { 
        type: Boolean, 
        default: true 
    }    
},{
    timestamps: true
})

export default mongoose.models.Pessoa || mongoose.model("Pessoa", pessoaSchema)