const { should } = require('chai');
should();
const { startServer, endServer } = require('./server.js');

describe('Ore Exchange', function() {
  // let minebot;
  // this.beforeAll(function(done) {
  //   this.timeout(120000);
  //   startServer('snapshot').then((bot) => {
  //     minebot = bot;
  //     done();
  //   }).catch(error => {
  //     done(error);
  //   });
  // });

  // this.afterAll(function(done) {
  //   this.timeout(5000);
  //   endServer(minebot).then(() => {
  //     done();
  //   }).catch(error => {
  //     done(error);
  //   });
  // });

  describe('crafting recipes', function() {
    const recipe_base = '../build/ore_exchange/data/ore_exchange/recipes';
    const ores = ['coal', 'copper', 'diamond', 'emerald', 'gold', 'iron', 'lapis', 'redstone'];
    const types = [{name: 'stone', id: ''}, {name: 'deepslate', id: 'deepslate_'}];
    ores.forEach(ore => {
      types.forEach(type => {
        types.forEach(combinetype => {
          if(type !== combinetype) {
            it(`should include ${type.name} ${ore} ore`, function() {
              const json = require(`${recipe_base}/${type.id}${ore}_ore_from_${combinetype.name}.json`);
              json.should.have.property('type', 'crafting_shapeless');
              json.should.have.nested.property('ingredients[0].item', `minecraft:${combinetype.id}${ore}_ore`);
              json.should.have.nested.property('ingredients[1].item', `minecraft:${type.name}`);
              json.should.have.deep.property('result', {
                'item': `minecraft:${type.id}${ore}_ore`,
                'count': 1
              });
            });
          }
        });
      });
    });
  });
});