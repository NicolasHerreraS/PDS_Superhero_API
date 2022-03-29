const express = require('express');
const SuperheroService = require('../services/superhero.service');
const superheroSchema = require('../models/superhero_v2.model')
const superhero_route_v2 = express.Router();
const service = new SuperheroService();

superhero_route_v2.post('/superhero', async (req, res) => {
  const superhero = superheroSchema(req.body);
  await service
    .createSuperhero(superhero)
    .then((data) => res.status(201).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v2.get('', async (req, res) => {
  await service
    .listSuperheroes()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v2.get('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .findOneSuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v2.put('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  const { superhero, real_name, super_power } = req.params;
  await service
    .editSuperhero(superheroId, superhero, real_name, super_power)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

superhero_route_v2.delete('/:superheroId', async (req, res) => {
  const { superheroId } = req.params;
  await service
    .removeSuperhero(superheroId)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(404).json({ message: err }));
});

module.exports = superhero_route_v2;
