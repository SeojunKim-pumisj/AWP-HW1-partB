const Character = require("./character");

class Archer extends Character {
  constructor(id, hp, mp, arrowCount) {
    super(id, "archer", hp, mp);
    this.arrowCount = arrowCount;
  }
}

module.exports = Archer;