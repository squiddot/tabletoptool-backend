const mongoose = require("mongoose");
const findOrCreate = require("mongoose-find-or-create");

const monsterSchema = new mongoose.Schema({
  index: Number,
  name: String,
  size: String,
  type: String,
  subtype: String,
  alignment: String,
  armor_class: Number,
  hit_points: Number,
  hit_dice: String,
  speed: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  stregth_save: Number,
  dexterity_save: Number,
  constitution_save: Number,
  intelligence_save: Number,
  wisdom_save: Number,
  charisma_save: Number,
  acrobatics: Number,
  animal_handling: Number,
  arcana: Number,
  athletics: Number,
  deception: Number,
  history: Number,
  insight: Number,
  intimidation: Number,
  investigation: Number,
  medicine: Number,
  nature: Number,
  perception: Number,
  //  performance: Number,
  persuasion: Number,
  religion: Number,
  sleight_of_hand: Number,
  stealth: Number,
  perception: Number,
  religion: Number,
  damage_vulnerabilities: String,
  damage_resistances: String,
  damage_immunities: String,
  condition_immunities: String,
  senses: String,
  languages: String,
  challenge_rating: Number,
  special_abilities: [
    {
      attack_bonus: Number,
      desc: String,
      name: String
    }
  ],
  actions: [
    {
      attack_bonus: Number,
      desc: String,
      name: String
    }
  ],
  legendary_actions: [
    {
      attack_bonus: Number,
      desc: String,
      name: String
    }
  ],
  url: String
});

monsterSchema.plugin(findOrCreate);

const Monster = mongoose.model("Monster", monsterSchema);
module.exports = Monster;

// {
//   "_id": "592f6c32c9e7ce9f72157fec",
//   "index": 25,
//   "name": "Androsphinx",
//   "size": "Large",
//   "type": "monstrosity",
//   "subtype": "",
//   "alignment": "lawful neutral",
//   "armor_class": 17,
//   "hit_points": 199,
//   "hit_dice": "19d10",
//   "speed": "40 ft., fly 60 ft.",
//   "strength": 22,
//   "dexterity": 10,
//   "constitution": 20,
//   "intelligence": 16,
//   "wisdom": 18,
//   "charisma": 23,
//   "dexterity_save": 6,
//   "constitution_save": 11,
//   "intelligence_save": 9,
//   "wisdom_save": 10,
//   "arcana": 9,
//   "perception": 10,
//   "religion": 15,
//   "damage_vulnerabilities": "",
//   "damage_resistances": "",
//   "damage_immunities": "psychic; bludgeoning, piercing, and slashing from nonmagical weapons",
//   "condition_immunities": "charmed, frightened",
//   "senses": "truesight 120 ft., passive Perception 20",
//   "languages": "Common, Sphinx",
//   "challenge_rating": 17,
//   "special_abilities": [
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.",
//           "name": "Inscrutable"
//       },
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx's weapon attacks are magical.",
//           "name": "Magic Weapons"
//       },
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:\n\n• Cantrips (at will): sacred flame, spare the dying, thaumaturgy\n• 1st level (4 slots): command, detect evil and good, detect magic\n• 2nd level (3 slots): lesser restoration, zone of truth\n• 3rd level (3 slots): dispel magic, tongues\n• 4th level (3 slots): banishment, freedom of movement\n• 5th level (2 slots): flame strike, greater restoration\n• 6th level (1 slot): heroes' feast",
//           "name": "Spellcasting"
//       }
//   ],
//   "actions": [
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx makes two claw attacks.",
//           "name": "Multiattack"
//       },
//       {
//           "damage_bonus": 6,
//           "damage_dice": "2d10",
//           "attack_bonus": 12,
//           "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage.",
//           "name": "Claw"
//       },
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n\nFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone.",
//           "name": "Roar (3/Day)"
//       }
//   ],
//   "legendary_actions": [
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx makes one claw attack.",
//           "name": "Claw Attack"
//       },
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.",
//           "name": "Teleport (Costs 2 Actions)"
//       },
//       {
//           "attack_bonus": 0,
//           "desc": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.",
//           "name": "Cast a Spell (Costs 3 Actions)"
//       }
//   ],
//   "url": "http://www.dnd5eapi.co/api/monsters/25"
// }
