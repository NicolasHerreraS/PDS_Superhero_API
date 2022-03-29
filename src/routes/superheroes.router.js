const express = require('express');
const superheroRoute = express.Router();
const superheroSchema = require('../models/superheroes');

superheroRoute.post('/superhero', (req, res) => {
  const superhero = superheroSchema(req.body);
  superhero
    .save()
    .then((data) => res.json({ message: data }))
    .catch((error) => res.json({ message: error }));
    res.status(201).json(superheroSchema);
});

superheroRoute.get('/', (req, res) => {
  superheroSchema
    .find()
    .then((data)=>res.json({message:data}))
    .catch((error)=>res.json({message:error}))
});

superheroRoute.get('/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  superheroSchema
    .findById(superheroId)
    .then((data)=>res.json({message:data}))
    .catch((error)=>res.json({message:error}))
});

superheroRoute.put('/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  const {
    superhero_name,
    real_name,
    features = { universe, superpowers, sidekick:{sidekick_name,powers}}
  } = req.body;
  superheroSchema.updateOne(
    { _id: superheroId },
    { $set: { superhero_name, real_name, features }}
  )
  .then((data)=>res.json({message:data}))
  .catch((error)=>res.json({message:error}));
  // res.json(superheroSchema);
});

superheroRoute.delete('/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  superheroSchema.remove({ _id: superheroId })
  .then((data)=>res.json({message:data}))
  .catch((error)=>res.json({message:error}));
});

superheroRoute.get('/sidekickPowers/:superheroId', (req, res) => {
  const { superheroId } = req.params;
  superheroSchema
    .findById(superheroId)
    .then((data)=>res.json({message:data.features[0].sidekick[0].powers}))
    .catch((error)=>res.json({message:error}))
});

module.exports = superheroRoute;
