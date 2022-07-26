import Pessoa from "../../../models/Pessoa"
import dbConnect from "../../../config/database"
//import auth from '../../../middleware/auth'

dbConnect()

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getPessoas(req, res)
            break;
        case "POST":
            await createPessoa(req, res)
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
            this.query.find({category: queryObj.category})
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

const getPessoas = async (req, res) => {
    try {
        const features = new APIfeatures(Pessoa.find(), req.query)
        .filtering().sorting().paginating()

        const pessoas = await features.query
      
        res.json({
            status: 'success',
            result: pessoas.length,
            pessoas
        })
    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}

const createPessoa = async (req, res) => {
    try {

        const {nome, telefone, grupo, observacoes} = req.body

        const newPessoa = new Pessoa({
            nome, telefone, grupo, observacoes
        })

        await newPessoa.save()

        res.json({msg: 'Pessoa cadastrado com sucesso!'})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}