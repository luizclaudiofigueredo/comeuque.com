import Agenda from "../../../models/Agenda"
import dbConnect from "../../../config/database"


export default async function handler(req,res) {

  await dbConnect()

  switch(req.method) {
    case 'GET':
        return await getAgenda(req, res)
    case 'DELETE': 
        return await deleteAgenda(req,res)
    case 'PUT':
        return await updateAgenda(req, res)
    }  

}

const getAgenda = async (req, res) => {
  try {
    const agenda = await Agenda.findOne({ _id: req.query })
    return res.status(200).json(agenda)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const updateAgenda = async (req, res) => {
  const { _id, evento, descricao, url, data_evento, ativo } = req.body
  try {
    const agenda = await Agenda.updateOne({ _id: req.query }, { evento, descricao, url, data_evento, ativo })
    res.status(201).json(agenda)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}

const deleteAgenda = async (req, res) => {
  try {
    const agenda = await Agenda.deleteOne({ _id: req.query })
    res.status(201).json(agenda)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }  
}