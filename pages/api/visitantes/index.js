import executeQuery from '../../../lib/db'
import moment from 'moment'

export default async (req, res) => {
    switch(req.method){
        case "GET":
            await getVisitantes(req, res)
            break;
        case "POST":
            await createVisitante(req, res)
            break;
    }
}

const getVisitantes = async (req, res) => {
    try {
		const visitantes = await executeQuery({
		  query: 'SELECT * FROM visitantes',
		})

		res.json({
		    status: 'success',
		    result: visitantes.length,
		    visitantes
		})
	} catch ( error ) {
		console.log( error );
	}
}

const createVisitante = async (req, res) => {
    try {

		const { nome } = req.body;
		const { sobrenome } = req.body;
		const { telefone } = req.body;
		const { grupo } = req.body;
		const { observacoes } = req.body;       
		const created_at = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
		const updated_at = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')        

        const visitante = await executeQuery({
            query: "INSERT INTO visitantes ( nome, sobrenome, telefone, grupo, observacoes, created_at, updated_at) VALUES (?,?,?,?,?,?,?)",
            values: [nome, sobrenome, telefone, grupo, observacoes, created_at, updated_at]
        })

        console.log(visitante)

        res.json({msg: 'Visitante cadastrado com sucesso!', result: visitante})

    } catch (err) {
        return res.status(500).json({err: err.message})
    }
}