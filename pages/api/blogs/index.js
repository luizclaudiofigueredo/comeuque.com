import Blog from "../../../models/Blog"
import dbConnect from "../../../config/database"

dbConnect()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getBlogs(req, res)
            break;
        case "POST":
            await createBlog(req, res)
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

        if(queryObj.categoria !== 'all')
            this.query.find({categoria: queryObj.categoria})
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


const getBlogs = async (req, res) => {
    try {
        const features = new APIfeatures(Blog.find(), req.query)
        .filtering().sorting().paginating()

        const blogs = await features.query
      
        res.json({
            status: 'success',
            result: blogs.length,
            blogs
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createBlog = async (req, res) => {
    try {
        //const result = await auth(req, res)

        const {titulo, resumo, texto, categoria, imagemUrl, videoId, data_publicacao, ativo} = req.body

        const newBlog = new Blog({
            titulo, resumo, texto, categoria, imagemUrl, videoId, data_publicacao, ativo
        })

        await newBlog.save()

        res.json({msg: 'Success! Created a new product'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}