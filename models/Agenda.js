import { timeStamp } from 'console'
import mongoose from 'mongoose'

const agendaSchema = new mongoose.Schema({
    evento: {
        type: String,
        trim: true,
        required: true        
    },
    descricao : {
        type: String,
        trim: true,
        required: true
    },
    url : {
        type: String,
        trim: true,
    },
    data_evento : {
        type: Date,
        required: true
    },
    ativo: { 
        type: Boolean, 
        default: false 
    }    
},{
    timestamps: true
})

export default mongoose.models.Agenda || mongoose.model("Agenda", agendaSchema)