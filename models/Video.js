import mongoose from 'mongoose'

const videoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: true        
    },
    imagemUrl : {
        type: String,
        trim: true,
    },    
    videoId : {
        type: String,
        trim: true,
    },
    categoria: {
        type: String,
        enum: ['Palavra', 'Conexao', 'Teaser'],
        required : true 
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

export default mongoose.models.Video || mongoose.model("Video", videoSchema)