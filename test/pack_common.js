exports.packTests = function (pack) {
  const base = `../build/${pack}/data/global/advancements`;
  it('should have root', function () {
    const json = require(`${base}/root.json`);
    json.should.have.deep.property('display', {
      title: 'Installed Datapacks',
      description: '',
      icon: {
        item: 'minecraft:knowledge_book'
      },
      background: 'minecraft:textures/block/gray_concrete.png',
      show_toast: false,
      announce_to_chat: false
    });
    json.should.have.deep.property('criteria', {
      trigger: {
        trigger: 'minecraft:tick'
      }
    });
  });
  it('should have jolly_packs', function () {
    const json = require(`${base}/jolly_packs.json`);
    json.should.have.deep.property('display', {
      title: 'Jolly Christopher',
      description: 'Jolly Packs',
      icon: {
        item: 'minecraft:player_head',
        nbt: "{SkullOwner: 'JollyChristopher'}"
      },
      show_toast: false,
      announce_to_chat: false
    });
    json.should.have.property('parent', 'global:root');
    json.should.have.deep.property('criteria', {
      trigger: {
        trigger: 'minecraft:tick'
      }
    });
  });
};
const permitText = exports.permitText = function () {
  return '{HideFlags:1,display:{Lore:[\'{"text":"The final ingredient"}\',\'{"text":"in new town structures."}\'],Name:\'{"text":"Building Permit"}\'},Enchantments:[{lvl:0,id:"minecraft:protection"}]}';
};
function getDescription (recipe) {
  let description = 'Q = Building Permit\n';
  Object.values(recipe.legend).forEach(entry => {
    description += `${entry.key} = ${entry.name}\n`;
  });
  let count = 1;
  recipe.recipe.forEach(entry => {
    const key = entry.id === 'permit' ? 'Q' : recipe.legend[entry.id].key;
    description += key + (entry.count > 1 ? 'x' + entry.count : '');
    if (count !== 9) {
      if (count % 3 === 0) {
        description += '\n';
      } else {
        description += ' | ';
      }
    }
    count++;
  });
  return description;
}
function getItems (recipe) {
  let items = '{Items:[';
  let slot = 0;
  recipe.recipe.forEach(entry => {
    items += `{Slot:${slot}b,id:`;
    if (entry.id === 'permit') {
      items += `"minecraft:paper",Count:${entry.count}b,tag:${permitText()}},`;
    } else {
      items += `"minecraft:${entry.id}",Count:${entry.count}b}${slot !== 8 ? ',' : ''}`;
    }
    slot++;
  });
  items += ']}';
  return items;
}

exports.testRecipes = function (namespace, recipes) {
  recipes.forEach(recipe => {
    it(`should have recipe for ${namespace}:${recipe.id}`, function () {
      const description = getDescription(recipe);
      const items = getItems(recipe);
      const json = require(`../build/${namespace}/data/${namespace}/advancements/recipes/recipe_${recipe.id}.json`);
      json.should.have.property('parent', `${namespace}:recipes/root`);
      json.should.have.deep.property('display', {
        icon: {
          item: recipe.icon
        },
        title: `${recipe.name} Crafting`,
        description: description,
        frame: 'task',
        show_toast: false,
        announce_to_chat: false,
        hidden: false
      });
      json.should.have.deep.property('rewards', {
        function: `${namespace}:siteplanner/init_${recipe.id}`
      });
      json.should.have.deep.property('criteria', {
        'open-dropper': {
          trigger: 'minecraft:item_used_on_block',
          conditions: {
            location: {
              block: {
                block: 'dropper',
                nbt: items
              }
            }
          }
        }
      });
    });
  });
};

const debugWait = exports.debugWait = async function (time = 20000) {
  await new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

exports.asyncAssert = async function (assertFunc, timeout = 1000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    if (await assertFunc()) return true;
    await debugWait(1000);
  }
  return false;
};
