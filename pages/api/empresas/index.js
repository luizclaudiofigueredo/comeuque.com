import Empresa from "../../../models/Empresa"
import dbConnect from "../../../config/database"

export default async function handler(req,res) {
  
  const { method } = req

  await dbConnect()

  if (method === "GET") {
    try {
      const empresas = await Empresa.find()
      res.status(200).json(empresas)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }

  if (method === "POST") {
    try {
      const empresa = await Empresa.create(req.body)
      res.status(201).json(empresa)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }  

}