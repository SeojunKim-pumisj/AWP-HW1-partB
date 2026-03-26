const Archer = require('../models/archer');
const Healer = require('../models/healer');
const Mage = require('../models/mage');
const Warrior = require('../models/warrior');

const characters = require('../data/characterData');

exports.addCharacter = (req, res) => {
  const { job, hp, mp, specialValue } = req.body;
  let newCharacter;
  console.log(req.body);

  // ID auto increment
  const nextId = characters.length > 0 
    ? Math.max(...characters.map(c => Number(c.id))) + 1 
    : 1;
  
  switch (job?.toLowerCase()) {
    case 'archer':
      newCharacter = new Archer(nextId, hp, mp, specialValue);
      break;
    case 'healer':
      newCharacter = new Healer(nextId, hp, mp, specialValue);
      break;
    case 'mage':
      newCharacter = new Mage(nextId, hp, mp, specialValue);
      break;
    case 'warrior':
      newCharacter = new Warrior(nextId, hp, mp, specialValue);
      break;
    default:
      return res.status(400).json({ message: "Invalid job" });
  }

  characters.push(newCharacter);

  res.json({
    message: "Character created",
    data: newCharacter
  });
};

exports.getCharacters = (req, res) => {
  res.json(characters);
};

exports.getCharacterById = (req, res) => {
  const { id } = req.params;
  const character = characters.find(c => Number(c.id) === Number(id));

  if (!character) {
    return res.status(404).json({ message: "Character not found" });
  }

  res.json(character);
};

exports.deleteCharacter = (req, res) => {
  const { id } = req.params;
  const index = characters.findIndex(c => Number(c.id) === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "Character not found" });
  }

  characters.splice(index, 1);
  res.json({ message: "Character deleted" });
};