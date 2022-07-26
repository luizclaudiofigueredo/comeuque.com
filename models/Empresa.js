import mongoose from 'mongoose'

const empresaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        trim: true,
        required: true,        
    },
    endereco: {
        type: String,
        trim: true,
        required: true,
    },
    bairro: {
        type: String,
        trim: true,
        required: true,
    },
    cidade: {
        type: String,
        trim: true,
    },
    estado: {
        type: String,
        trim: true,
    },    
    telefone: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    qrcode: {
        type: String,
        trim: true,
    },
    copia_cola: {
        type: String,
        trim: true,
    },        
    ativo: { 
        type: Boolean, 
        default: false 
    }    
},{
    timestamps: true
})

export default mongoose.models.Empresa || mongoose.model("Empresa", empresaSchema)