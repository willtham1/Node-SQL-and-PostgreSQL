const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const fortunes = require('./data/fortunes');

const app = express();

app.use(bodyParser.json());

//This is the module to get all the fortunes
app.get('/fortunes', (req, res) => {
  res.json(fortunes);
});

app.get('/fortunes/random', (req, res) => {
  res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get('/fortunes/:id', (req, res) => {
  res.json(fortunes.find(f => f.id == req.params.id));
});

const writeFortunes = json => {
  fs.writeFile('./data/fortunes.json', JSON.stringify(json), err => console.log(err));
};

//This is the module to add new fortunes to our data
app.post('/fortunes', (req, res) => {
  const { message, lucky_number, spirit_animal } = req.body;

  const fortune_ids = fortunes.map(f => f.id);

  const new_fortunes = fortunes.concat({
    id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1,
    message,
    lucky_number,
    spirit_animal
  });

  writeFortunes(new_fortunes);

  res.json(new_fortunes);
});

//This is the module to update fortunes in our data
app.put('/fortunes/:id', (req, res) => {
  const { id } = req.params;

  const old_fortune = fortunes.find(f => f.id == id);

  ['message', 'lucky_number', 'spirit_animal'].forEach(key => {
    if (req.body[key]) old_fortune[key] = req.body[key];
  });

  writeFortunes(fortunes);

  res.json(fortunes);
});

//This is the module to delete fortunes in our data
app.delete('/fortunes/:id', (req, res) => {
  const { id } = req.params;

  const new_fortunes = fortunes.filter(f => f.id != id);

  writeFortunes(new_fortunes);

  res.json(new_fortunes);
});

module.exports = app;