
// Modulo npm node-postgres
const {Pool,Client} = require("pg");
   
// URI de conexión en string
const connectionString = 'postgresql://node_user:1234@localhost:5432/practica_db'

// conectando con una conexión al pool.
const pool = new Pool({
    connectionString,
   })
   pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
   })

   
// conectando con una conexión a cliente.
const client = new Client({
    connectionString,
   })
   client.connect()
   client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
   })
   