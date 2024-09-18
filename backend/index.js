const express = require('express');
const app = express();

app.post('/user', async (req,res) => {

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