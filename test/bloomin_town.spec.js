/* eslint-disable no-unused-expressions */
require('chai').should();
const { packTests, testRecipes } = require('./pack_common.js');

describe('Bloomin Town', function () {
  describe('installed datapacks advancements', function () {
    packTests('bloomin_town');
    it('should have bloomin_town', function () {
      const json = require('../build/bloomin_town/data/bloomin_town/advancements/bloomin_town.json');
      json.should.have.deep.property('display', {
        title: "Bloomin' Town",
        description: 'Spring time in New in Town!',
        icon: {
          item: 'minecraft:sweet_berries'
        },
        announce_to_chat: false,
        show_toast: false
      });
      json.should.have.property('parent', 'global:jolly_packs');
      json.should.have.deep.property('criteria', {
        trigger: {
          trigger: 'minecraft:tick'
        }
      });
    });
  });

  describe('recipes tests', function () {
    const recipes = [
      {
        id: 'rabbit_pen',
        name: 'Rabbit Pen',
        icon: 'minecraft:rabbit_foot',
        recipe: [
          {
            id: 'oak_log',
            count: 8
          },
          {
            id: 'oak_log',
            count: 16
          },
          {
            id: 'oak_log',
            count: 8
          },
          {
            id: 'carrot',
            count: 16
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'rabbit_hide',
            count: 4
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'stone',
            count: 4
          },
          {
            id: 'stone',
            count: 2
          }
        ],
        legend: {
          carrot: {
            name: 'Carrot',
            key: 'C'
          },
          oak_log: {
            name: 'Oak Log',
            key: 'L'
          },
          stone: {
            name: 'Stone',
            key: 'S'
          },
          rabbit_hide: {
            name: 'Rabbit Hide',
            key: 'H'
          }
        }
      },
      {
        id: 'flower_shop',
        name: 'Flower Shop',
        icon: 'minecraft:allium',
        recipe: [
          {
            id: 'dandelion',
            count: 8
          },
          {
            id: 'oak_log',
            count: 32
          },
          {
            id: 'poppy',
            count: 8
          },
          {
            id: 'flower_pot',
            count: 4
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'flower_pot',
            count: 4
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'bricks',
            count: 8
          },
          {
            id: 'stone',
            count: 2
          }
        ],
        legend: {
          oak_log: {
            name: 'Oak Log',
            key: 'L'
          },
          stone: {
            name: 'Stone',
            key: 'S'
          },
          dandelion: {
            name: 'Dandelion',
            key: 'D'
          },
          poppy: {
            name: 'Poppy',
            key: 'P'
          },
          flower_pot: {
            name: 'Flower Pot',
            key: 'F'
          },
          bricks: {
            name: 'Brick Block',
            key: 'B'
          }
        }
      },
      {
        id: 'apiary',
        name: 'Apiary',
        icon: 'minecraft:beehive',
        recipe: [
          {
            id: 'oak_log',
            count: 4
          },
          {
            id: 'oak_log',
            count: 8
          },
          {
            id: 'oak_log',
            count: 4
          },
          {
            id: 'dandelion',
            count: 4
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'dandelion',
            count: 4
          },
          {
            id: 'beehive',
            count: 1
          },
          {
            id: 'honeycomb',
            count: 9
          },
          {
            id: 'beehive',
            count: 1
          }
        ],
        legend: {
          oak_log: {
            name: 'Oak Log',
            key: 'L'
          },
          dandelion: {
            name: 'Dandelion',
            key: 'D'
          },
          honeycomb: {
            name: 'Honeycomb',
            key: 'H'
          },
          beehive: {
            name: 'Bee Hive',
            key: 'B'
          }
        }
      },
      {
        id: 'greenhouse',
        name: 'Greenhouse',
        icon: 'minecraft:glass',
        recipe: [
          {
            id: 'glass',
            count: 4
          },
          {
            id: 'glass',
            count: 8
          },
          {
            id: 'glass',
            count: 4
          },
          {
            id: 'composter',
            count: 1
          },
          {
            id: 'permit',
            count: 1
          },
          {
            id: 'oak_leaves',
            count: 16
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'stone',
            count: 2
          },
          {
            id: 'stone',
            count: 2
          }
        ],
        legend: {
          glass: {
            name: 'Glass',
            key: 'G'
          },
          stone: {
            name: 'Stone',
            key: 'S'
          },
          composter: {
            name: 'Composter',
            key: 'C'
          },
          oak_leaves: {
            name: 'Oak Leaves',
            key: 'O'
          }
        }
      }
    ];
    it('should have root for recipes', function () {
      const json = require('../build/bloomin_town/data/bloomin_town/advancements/recipes/root.json');
      json.should.have.deep.property('display', {
        icon: {
          item: 'minecraft:sweet_berries'
        },
        title: 'Bloomin Town Recipes',
        description: 'Spring time recipes for New in Town.',
        frame: 'task',
        background: 'minecraft:textures/block/lime_wool.png',
        show_toast: false,
        announce_to_chat: false,
        hidden: false
      });
      json.should.have.deep.property('criteria', {
        exists: {
          trigger: 'minecraft:tick'
        }
      });
    });
    testRecipes('bloomin_town', recipes);
  });
});
