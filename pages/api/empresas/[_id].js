import Empresa from "../../../models/Empresa"
import dbConnect from "../../../config/database"


export default async function handler(req,res) {

  await dbConnect()

  switch(req.method) {
    case 'GET':
        return await getEmpresa(req, res)
    case 'DELETE': 
        return await deleteEmpresa(req,res)
    case 'PUT':
        return await updateEmpresa(req, res)
    }  

}

const getEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findOne({ _id: req.query })
    return res.status(200).json(empresa)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const updateEmpresa = async (req, res) => {
  const { _id, nome, cnpj, endereco, bairro, cidade, estado, telefone, email, qrcode, copia_cola, ativo } = req.body
  try {
    const empresa = await Empresa.updateOne({ _id: req.query }, { nome, cnpj, endereco, bairro, cidade, estado, telefone, email, qrcode, copia_cola, ativo })
    res.status(201).json(empresa)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}

const deleteEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.deleteOne({ _id: req.query })
    res.status(201).json(empresa)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}