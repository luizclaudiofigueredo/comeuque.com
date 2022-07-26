import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: true        
    },
    resumo : {
        type: String,
        trim: true,
        required: true
    },
    texto : {
        type: String,
        trim: true,
    },
    categoria: {
        type: String,
        enum: ['campus', 'about', 'celula','mapa'],
        required : true 
    }, 
    imagemUrl : {
        type: String,
        trim: true,
    },           
    videoId : {
        type: String,
        trim: true,
    },
    data_publicacao : {
        type: Date,
        default: Date.now
    },
    ativo: { 
        type: Boolean, 
        default: false 
    }    
},{
    timestamps: true
})

export default mongoose.models.Blog || mongoose.model("Blog", blogSchema)