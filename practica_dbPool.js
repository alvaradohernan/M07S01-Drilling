// Modulo npm node-postgres
const {Pool} = require('pg')

// Datos para la conexión a la base de datos
    const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'practica_db',
    password: '1234',
    port: 5432,
})

// Conectando al cliente
    pool.connect()

// Realizando una consulta para verificar si hay error
    pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
   })

