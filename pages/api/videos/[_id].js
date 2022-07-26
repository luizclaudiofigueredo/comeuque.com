import Video from "../../../models/Video"
import dbConnect from "../../../config/database"

dbConnect()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getVideo(req, res)
            break;
        case "PUT":
            await updateVideo(req, res)
            break;
        case "DELETE":
            await deleteVideo(req, res)
            break;
    }
}

const getVideo = async (req, res) => {
    try {
        const { _id } = req.query;

        const video = await Video.findById(_id)
        if(!video) return res.status(400).json({err: 'Essa publicação não existe!!!'})
        
        res.json({ video })

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const updateVideo = async (req, res) => {
    try {
        const result = await auth(req, res)
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query
        const {title, price, inStock, description, content, category, images} = req.body

        if(!title || !price || !inStock || !description || !content || category === 'all' || images.length === 0)
        return res.status(400).json({err: 'Please add all the fields.'})

        await Video.findOneAndUpdate({_id: id}, {
            title: title.toLowerCase(), price, inStock, description, content, category, images
        })

        res.json({msg: 'Success! Updated a product'})
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const deleteVideo = async(req, res) => {
    try {
        const result = await auth(req, res)
        
        if(result.role !== 'admin') 
        return res.status(400).json({err: 'Authentication is not valid.'})

        const {id} = req.query

        await Video.findByIdAndDelete(id)
        res.json({msg: 'Deleted a product.'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}