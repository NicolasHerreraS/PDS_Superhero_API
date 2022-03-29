const superheroSchema = require('../models/superheroes');
//const superheroRoute = require('../routes/superhero_v2.router')
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
  async editSuperhero(superheroId, superhero, real_name, super_powers, sidekick) {
    return superheroSchema.findById({ _id: superheroId }).then((superhero) => {
      if (!superhero) throw Error('Super Héroe no encontrado');
      return superheroSchema.updateOne(
        { superheroId },
        { superhero, real_name, super_powers, sidekick }
      );
    });
  }
  async removeSuperhero(superheroId) {
    const superhero_to_remove = superheroSchema.findById({_id: superheroId})
    return superheroSchema.remove(superhero_to_remove);
  }
}

module.exports = SuperheroService;
