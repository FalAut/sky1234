onEvent('morejs.villager.trades', (event) => {
  // event.removeVanillaTrades(['leatherworker'], [1, 2]);
  event.removeVanillaTrades(['leatherworker'], 1);
  event.removeVanillaTrades(['leatherworker'], 2);
  event.addTrade('leatherworker', 1, 'emerald', 'leather');
  event.addTrade('leatherworker', 1, 'emerald', 'leather');
  event.addTrade('leatherworker', 2, 'emerald', 'leather');
  event.addTrade('leatherworker', 2, 'emerald', 'leather');

  event.removeVanillaTrades(['cleric'], 1);
  event.removeVanillaTrades(['cleric'], 3);
  event.addTrade('cleric', 1, 'naturesaura:infused_iron', 'emerald');
  event.addTrade('cleric', 1, 'kubejs:infused_coal', 'emerald');
  event.addTrade('cleric', 3, 'emerald', 'naturesaura:calling_spirit');
  event.addTrade('cleric', 3, 'naturesaura:sky_ingot', 'emerald');
  event.addTrade('cleric', 5, 'emerald', 'minecraft:shulker_shell');

  event.removeVanillaTrades(['armorer'], 2);
  event.addTrade('armorer', 2, '4x iron_ingot', 'emerald');
  event.addTrade('armorer', 2, '5x emerald', 'naturesaura:infused_iron_pants');

  event.removeVanillaTrades(['toolsmith'], 2);
  event.addTrade('toolsmith', 2, '4x iron_ingot', 'emerald');
  event.addTrade('toolsmith', 2, '3x emerald', 'naturesaura:infused_iron_pickaxe');

  event.removeVanillaTrades(['weaponsmith'], 2);
  event.addTrade('weaponsmith', 2, '4x iron_ingot', 'emerald');
  event.addTrade('weaponsmith', 2, '2x emerald', 'naturesaura:infused_iron_sword');

  event.removeVanillaTrades(['librarian'], 1);
  event.removeVanillaTrades(['librarian'], 2);
  event.removeVanillaTrades(['librarian'], 3);
  event.removeVanillaTrades(['librarian'], 4);
  event.removeVanillaTrades(['librarian'], 5);
  // event.addTrade('librarian', 4, 'emerald',
  // Item.of('minecraft:written_book', '{author:"Fa1Aut",pages:[\'{"text":"你好"}\'],resolved:1b,title:"nothing"}'));

  // event.removeTrades({
  //     firstItem: 'emerald',
  //     secondItem: 'book',
  //     outputItem: Item.of('minecraft:enchanted_book').enchant('miniutilities:molten_head', 1),
  //     types: ['emeraldforitems'],
  //     professions: ['librarian']
  // });

  // event.removeTrades({
  //     firstItem: 'emerald',
  //     firstCount: 5,
  //     secondItem: 'book',
  //     outputItem: 'clock',
  //     types: ['emeraldforitems'],
  //     professions: ['librarian']
  // });
  event.removeModdedTrades(['immersiveengineering:electrician'], [1, 2, 3, 4, 5]);
  event.removeModdedTrades(['immersiveengineering:outfitter'], [1, 2, 3]);

  event.removeModdedTrades(['immersiveengineering:machinist'], 1);
  event.removeModdedTrades(['immersiveengineering:machinist'], 2);
  event.removeModdedTrades(['immersiveengineering:machinist'], 3);
  event.removeModdedTrades(['immersiveengineering:machinist'], 4);
  event.removeModdedTrades(['immersiveengineering:machinist'], 5);
  event.addTrade('immersiveengineering:machinist', 1, 'emerald', 'immersiveengineering:treated_wood_horizontal');
  event.addTrade('immersiveengineering:machinist', 1, 'emerald', Item.of('immersiveengineering:blueprint', '{blueprint:"components"}'));
  event.addTrade('immersiveengineering:machinist', 2, 'emerald', 'immersiveengineering:coal_coke');
  event.addTrade('immersiveengineering:machinist', 2, 'emerald', 'immersiveengineering:wire_copper');
  event.addTrade('immersiveengineering:machinist', 3, 'emerald', Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'));
  event.addTrade('immersiveengineering:machinist', 4, 'emerald', Item.of('immersiveengineering:blueprint', '{blueprint:"molds"}'));
  event.addTrade('immersiveengineering:machinist', 5, 'emerald', Item.of('immersiveengineering:blueprint', '{blueprint:"bannerpatterns"}'));
});
onEvent('morejs.wanderer.trades', (event) => {
  event.removeModdedTrades(1);
  event.removeVanillaTrades(1);
  event.removeVanillaTrades(2);
});
let rand = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

// onEvent('morejs.villager.trades', e => {

//     e.removeVanillaTrades(['immersiveengineering:machinist'],[1,2,3,4,5])
//     e.removeModdedTrades(['immersiveengineering:machinist'],[1,2,3,4,5])

//     // Cartographer
//     e.addCustomTrade('immersiveengineering:machinist',1,(offer,entity,random) => {
//         offer.setFirstInput(Item.of('feather',rand([4,5,6,7,8])));
//         offer.setSecondInput(Item.of("ink_sac",rand([8,9,10,11,12])));
//         offer.setOutput("stone");
//         offer.setMaxUses(rand([3,4,5]));
//         offer.setPriceMultiplier(0.01);
//     })

//     // e.addTrade('immersiveengineering:machinist',1,VillagerUtils.createStructureMapTrade(
//     //     [Item.of("kubejs:plant_cloth",rand([2,3,4])),
//     //     Item.of("minecraft:glow_ink_sac",rand([2,3,4]))],
//     //     "warden_and_sculk:ancient_city")
//     //         .displayName('Ancient City Map').marker('banner_blue').maxUses(rand([2,3,4])))
// e.removeModdedTrades(['immersiveengineering:machinist'],2)
//     e.addCustomTrade('immersiveengineering:machinist',2,(offer,entity,random) => {
//         offer.setFirstInput(Item.of("ink_sac",rand([2,3,4])));
//         // offer.setSecondInput(Item.of("flint",rand([2,3])));
//         offer.setOutput("2x black_dye");
//         offer.setMaxUses(rand([3,4,5]));
//         offer.setPriceMultiplier(0.01);
//     })
//     e.removeModdedTrades(['immersiveengineering:machinist'],2)
// })
