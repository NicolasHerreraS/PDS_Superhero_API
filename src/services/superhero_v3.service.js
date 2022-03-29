const superheroSchema = require('../models/superhero_v3.models.js');

class SuperheroService {
  async createSuperhero(superhero) {
    superhero.save();
    return superhero;
  }
  async listSuperheroes() {
    return superheroSchema.find();
  }
  async findOneSuperhero() {
    return superheroSchema.findById({ _id: superheroId });
  }
  async editSuperhero(superheroId, superhero, real_name, super_power) {
    return superheroSchema.findById({ _id: superheroId }).then((superhero) => {
      if (!superhero) throw Error('Super Héroe no encontrado');
      return superheroSchema.updateOne(
        { superheroId },
        { superhero, real_name, super_power }
      );
    });
  }
  async removeSuperhero(superheroId) {
    const superhero_to_remove = superheroSchema.findById({_id: superheroId})
    return superheroSchema.remove(superhero_to_remove);
  }
}

module.exports = SuperheroService;
