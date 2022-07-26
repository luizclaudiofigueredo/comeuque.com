import mongoose from 'mongoose'

const contaSchema = new mongoose.Schema({
    numero_banco: {
        type: String,
        required: true,
    },
    banco: {
        type: String,
        trim: true,
        required: true,        
    },
    agencia : {
        type: String,
        trim: true,
        required: true,
    },
    conta : {
        type: String,
        trim: true,
        required: true,
    },
    qrcode : {
        type: String,
        trim: true,
    },
    logo : {
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

export default mongoose.models.Conta || mongoose.model("Conta", contaSchema)