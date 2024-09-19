const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(bodyParser.json());

const pool = new Pool({
  user: 'vincent',
  host: '34.129.133.215', 
  database: 'vellum', 
  password: 'vincent',
  port: 5432, 
});

//check if the user name exists, if so, return the user; if not, return a newly created user
app.post('/user', async (req,res) => {
  const {username} = req.body;
  try{
    const existUser = await pool.query(
      'SELECT * FROM vellum WHERE username = $1',
      [username]
    );

    if (existUser.rows.length === 0){
      try{
        const result = await pool.query(
          'INSERT INTO vellum (username, redball, blueball) VALUES ($1, $2, $3) RETURNING *',
          [username, 0, 0]
        );
        res.status(201).json(result.rows[0]);
      } catch(e){
        res.status(400).json({error:e.message});
      }
    }else{
      res.status(201).json(existUser.rows[0]);
    }
  }catch(e){
    res.status(404).json({error: e.message});
  }  
})

//get statistics of all users
app.get('/stat', async (req, res) => {
  try{
    const result = await pool.query('SELECT * FROM vellum');
    res.json(result.rows);
  } catch(e){
    res.status(500).json({error:e.message});
  }
});

//get user information by username
app.get('/stat/:username',async (req, res) => {
  const {username} = req.params;
  try{
    const result = await pool.query('SELECT * FROM vellum WHERE username = $1',[username]);
    if (result.rows.length === 0){
      return res.status(404).json({error: 'user not found'});
    }
    res.json(result.rows[0]);
  } catch(e){
    res.status(500).json({error: e.message});
  }
})

//update user information by username
app.put('/user/:username', async (req, res) => {
  const {username} = req.params;
  const {ballcolor, number} = req.body;

  try{
    const result = await pool.query(
      `UPDATE vellum SET ${ballcolor} = $1 WHERE username = $2 RETURNING *`,
      [number, username]
    );
    
    if (result.rows.length === 0){
      return res.status(404).json({error: 'Item not found'});
    }
    res.json(result.rows[0])
  } catch (e){
    res.status(500).json({error: e.message});
  }
})

const PORT = 5050;
app.listen(PORT, ()=>{
  console.log(`Server running on http://localhost:${PORT}`);
})