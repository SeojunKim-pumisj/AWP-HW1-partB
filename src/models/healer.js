const Character = require("./character");

class Healer extends Character {
  constructor(id, hp, mp, divinePower) {
    super(id, "healer", hp, mp);
    this.divinePower = divinePower;
  }
}

module.exports = Healer;