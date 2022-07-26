import Pessoa from "../../../models/Pessoa"
import dbConnect from "../../../config/database"


export default async function handler(req,res) {

  await dbConnect()

  switch(req.method) {
    case 'GET':
        return await getPessoa(req, res)
    case 'DELETE': 
        return await deletePessoa(req,res)
    case 'PUT':
        return await updatePessoa(req, res)
    }  

}

const getPessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.findOne({ _id: req.query })
    return res.status(200).json(pessoa)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const updatePessoa = async (req, res) => {
  const { _id, nome, telefone, grupo, observacoes, data_cadastro, data_encontro, data_batismo, data_alianca, lider_celula, evangelico, ativo } = req.body
  try {
    const pessoa = await Pessoa.updateOne({ _id: req.query }, { nome, telefone, grupo, observacoes, data_cadastro, data_encontro, data_batismo, data_alianca, lider_celula, evangelico, ativo })
    res.status(201).json(pessoa)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}

const deletePessoa = async (req, res) => {
  try {
    const pessoa = await Pessoa.deleteOne({ _id: req.query })
    res.status(201).json(pessoa)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}