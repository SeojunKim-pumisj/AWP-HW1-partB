const Character = require("./character");

class Mage extends Character {
  constructor(id, hp, mp, spellPower) {
    super(id, "mage", hp, mp);
    this.spellPower = spellPower;
  }
}

module.exports = Mage;