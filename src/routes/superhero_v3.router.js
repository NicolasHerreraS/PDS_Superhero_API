const express = require('express');
const SuperheroService = require('../services/superhero.service');
const superheroSchema = require('../models/superhero_v3.model')
const superhero_route_v3 = express.Router();
const service = new SuperheroService();

superhero_route_v3.post('/superhero', async (req, res) => {
  const superhero = superheroSchema(req.body);
  await service
    .createSuperhero(superhero)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v3.get('', async (req, res) => {
  await service
    .listSuperheroes()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v3.get('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .findOneSuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v3.put('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  const {
    superhero_name,
    real_name,
    features = { universe, superpowers, sidekick:{sidekick_name,powers}}
  } = req.body;
  await service
    .editSuperhero(superheroId, superhero_name, real_name, features)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v3.delete('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .removeSuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = superhero_route_v3;
