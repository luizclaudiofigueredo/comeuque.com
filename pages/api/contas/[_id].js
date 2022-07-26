import Conta from "../../../models/Conta"
import dbConnect from "../../../config/database"


export default async function handler(req,res) {

  await dbConnect()

  switch(req.method) {
    case 'GET':
        return await getConta(req, res)
    case 'DELETE': 
        return await deleteConta(req,res)
    case 'PUT':
        return await updateConta(req, res)
    }  

}

const getConta = async (req, res) => {
  try {
    const conta = await Conta.findOne({ _id: req.query })
    return res.status(200).json(conta)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const updateConta = async (req, res) => {
  const { _id, numero_banco, banco, agencia, conta, qrcode, logo, ativo } = req.body
  try {
    const contas = await Conta.updateOne({ _id: req.query }, { numero_banco, banco, agencia, conta, qrcode, logo, ativo })
    res.status(201).json(contas)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}

const deleteConta = async (req, res) => {
  try {
    const conta = await Conta.deleteOne({ _id: req.query })
    res.status(201).json(conta)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}