import Video from "../../../models/Video"
import dbConnect from "../../../config/database"
//import auth from '../../../middleware/auth'

dbConnect()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getVideos(req, res)
            break;
        case "POST":
            await createVideo(req, res)
            break;
    }
}

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
        const queryObj = {...this.queryString}

        const excludeFields = ['page', 'sort', 'limit']
        excludeFields.forEach(el => delete(queryObj[el]))

        if(queryObj.category !== 'all')
            this.query.find({categoria: queryObj.category})
        if(queryObj.title !== 'all')
            this.query.find({title: {$regex: queryObj.title}})

        this.query.find()
        return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join('')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 6
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const getVideos = async (req, res) => {
    try {
        const features = new APIfeatures(Video.find(), req.query)
        .filtering().sorting().paginating()

        const videos = await features.query
      
        res.json({
            status: 'success',
            result: videos.length,
            videos
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createVideo = async (req, res) => {
    try {
        //const result = await auth(req, res)

        const {titulo, imagemUrl, videoId, categoria, data_publicacao, ativo} = req.body

        const newVideo = new Video({
            titulo, imagemUrl, videoId, categoria, data_publicacao, ativo
        })

        await newVideo.save()

        res.json({msg: 'Success! Created a new product'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}