import executeQuery from '../../../lib/db'
import moment from 'moment'

export default async (req, res) => {
    switch(req.method) {
        case 'GET':
            return await getVisitante(req, res)
        case 'DELETE': 
            return await deleteVisitante(req,res)
        case 'PUT':
            return await updateVisitante(req, res)
        }
}

const getVisitante = async (req, res) => {
    try {
		const visitante = await executeQuery({
		  query: 'SELECT * FROM visitantes WHERE id=?',
		  values: [ req.query.id ],
		})

		res.json({
		    status: 'success',
		    result: visitante.length,
		    visitante
		})
	} catch ( error ) {
		console.log( error );
	}
}

const updateVisitante = async (req, res) => {
    try {
		const { nome } = req.body;
		const { sobrenome } = req.body;
		const { telefone } = req.body;
		const { grupo } = req.body;
		const { observacoes } = req.body;       
		const updated_at = moment(new Date()).format('YYYY-MM-DD HH:mm:ss') 

		const visitante = await executeQuery({
		  query: 'UPDATE visitantes SET nome=?, sobrenome=?, telefone=?, grupo=?, observacoes=?, updated_at=? WHERE id=?',
		  values: [nome, sobrenome, telefone, grupo, observacoes, updated_at, req.query.id]
		})

		res.json({
		    status: 'success',
		    result: visitante.length,
		    visitante
		})
	} catch ( error ) {
		console.log( error );
	}
}

const deleteVisitante = async (req, res) => {
    try {

		const visitante = await executeQuery({
		  query: 'DELETE FROM visitantes WHERE id=?',
		  values: [req.query.id]
		})

		res.json({
		    status: 'success',
		})
	} catch ( error ) {
		console.log( error );
	}
}