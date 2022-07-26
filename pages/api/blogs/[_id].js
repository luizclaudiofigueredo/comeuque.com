import Blog from "../../../models/Blog"
import dbConnect from "../../../config/database"

dbConnect()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getBlog(req, res)
            break;
        case "PUT":
            await updateBlog(req, res)
            break;
        case "DELETE":
            await deleteBlog(req, res)
            break;
    }
}

const getBlog = async (req, res) => {
    try {
        const { _id } = req.query;

        const blog = await Blog.findById(_id)

        if(!blog) return res.status(400).json({err: 'Essa publicação não existe.'})
        
        res.json({ blog })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateBlog = async (req, res) => {
    try {

        const {id} = req.query
        const {titulo, resumo, texto, categoria, imagemUrl, videoId, data_publicao, ativo} = req.body

        await Blog.findOneAndUpdate({_id: id}, {
            titulo, resumo, texto, categoria, imagemUrl, videoId, data_publicao, ativo
        })

        res.json({msg: 'Success! Updated a product'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteBlog = async(req, res) => {
    try {
        const {id} = req.query

        await Blog.findByIdAndDelete(id)
        res.json({msg: 'Deleted a product.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}