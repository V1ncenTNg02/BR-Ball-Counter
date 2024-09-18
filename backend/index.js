const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  user: 'vincent',
  host: '34.129.133.215', 
  database: 'postgres', 
  password: 'vincent',
  port: 5432, 
});

app.post('/user', async (req,res) => {
  const {username, redball, blueball} = req.body;
  try{
    const result = await pool.query(
      'INSERT INTO postgres (names, redball, blueball) VALUES ($1, $2, $3) RETURNING *',
      [username, redball, blueball]
    );
    res.status(201).json(result.rows[0]);
  } catch(e){
    res.status(400).json({error:e.message});
  }
})

app.get('/stat', async (req, res) => {

})

app.get('/stat/:username',async (req, res) => {

})


app.put('/user/:username', async (req, res) => {

})

const PORT = 5050;
app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
})