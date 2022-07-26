import Agenda from "../../../models/Agenda"
import dbConnect from "../../../config/database"

export default async function handler(req,res) {
  
  const { method } = req

  await dbConnect()

  if (method === "GET") {
    try {
      const agendas = await Agenda.find().where('data_evento <= ' + Date.now)
      res.status(200).json(agendas)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }

  if (method === "POST") {
    try {
      const agenda = await Agenda.create(req.body)
      res.status(201).json(agenda)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }  

}