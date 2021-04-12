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
