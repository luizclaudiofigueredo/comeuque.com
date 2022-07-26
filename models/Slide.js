import { timeStamp } from 'console'
import mongoose from 'mongoose'

const slideSchema = new mongoose.Schema({
    titulo: {
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
    }    
},{
    timestamps: true
})

export default mongoose.models.Slide || mongoose.model("Slide", slideSchema)