const Character = require("./character");

class Warrior extends Character {
  constructor(id, hp, mp, shieldDefense) {
    super(id, "warrior", hp, mp);
    this.shieldDefense = shieldDefense; // defense stats
  }
}

module.exports = Warrior;