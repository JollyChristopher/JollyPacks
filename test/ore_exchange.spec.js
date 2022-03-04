const { should } = require('chai');
should();
const { packTests } = require('./pack_common.js');

describe('Ore Exchange', function () {
  describe('installed datapacks advancements', function () {
    packTests('ore_exchange');
    it('should have ore_exchange', function () {
      const json = require('../build/ore_exchange/data/ore_exchange/advancements/ore_exchange.json');
      json.should.have.deep.property('display', {
        title: 'Ore Exchange',
        description: 'Exchange Ores between different stone types',
        icon: {
          item: 'minecraft:deepslate_copper_ore'
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

  describe('crafting recipes', function () {
    const recipeBase = '../build/ore_exchange/data/ore_exchange/recipes';
    const ores = ['coal', 'copper', 'diamond', 'emerald', 'gold', 'iron', 'lapis', 'redstone'];
    const types = [{ name: 'stone', id: '' }, { name: 'deepslate', id: 'deepslate_' }];
    ores.forEach(ore => {
      types.forEach(type => {
        types.forEach(combinetype => {
          if (type !== combinetype) {
            it(`should include ${type.name} ${ore} ore`, function () {
              const json = require(`${recipeBase}/${type.id}${ore}_ore_from_${combinetype.name}.json`);
              json.should.have.property('type', 'crafting_shapeless');
              json.should.have.nested.property('ingredients[0].item', `minecraft:${combinetype.id}${ore}_ore`);
              json.should.have.nested.property('ingredients[1].item', `minecraft:${type.name}`);
              json.should.have.deep.property('result', {
                item: `minecraft:${type.id}${ore}_ore`,
                count: 1
              });
            });
          }
        });
      });
    });
  });
});
