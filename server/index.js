const express = require('express');
const gs = require('gradient-string');
const pplCtrl = require('./controllers/peopleController');

const app = express()
const PORT = 4040;


app.use(express.json());


//ENDPOINTS

app.get('/api/people', pplCtrl.getPeople)
app.post('/api/people', pplCtrl.addPerson)
app.put('/api/people/:id', pplCtrl.editPerson)
app.delete('/api/people/:id', pplCtrl.deletePerson)

//TODO
//GET WITH A QUERY FOR SEARCHABLE PEOPLE
// app.get('api/people?firstname= something'), pplCtrl.findPerson)



app.listen(PORT, () => console.log(gs.summer(`We live on ${PORT}`)))