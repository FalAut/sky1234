/** @format */

onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/create/create/";
  const {
    milling,
    mixing,
    sandpaper_polishing,
    cutting,
    filling,
    deploying,
    compacting,
    pressing,
  } = event.recipes.create;

  milling(
    "immersiveengineering:dust_coke",
    "immersiveengineering:coal_coke"
  ).id(`${id_prefix}dust_coke`);

  milling(
    Item.of(
      "kubejs:tainted_blend",
      '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/tainted_blend"}}'
    ),
    "naturesaura:tainted_gold"
  ).id(`${id_prefix}tainted_blend1`);

  mixing(
    [
      Fluid.water(100),
      Item.of(
        "kubejs:tainted_blend",
        '{SequencedAssembly:{Progress:0.4f,Step:2,id:"kubejs:recipes/create/sequenced_assembly/tainted_blend"}}'
      ),
    ],
    Item.of(
      "kubejs:tainted_blend",
      '{SequencedAssembly:{Progress:0.2f,Step:1,id:"kubejs:recipes/create/sequenced_assembly/tainted_blend"}}'
    )
  )
    .heated()
    .id(`${id_prefix}tainted_blend2`);

  sandpaper_polishing(
    Item.of(
      "kubejs:tainted_blend",
      '{SequencedAssembly:{Progress:0.6f,Step:3,id:"kubejs:recipes/create/sequenced_assembly/tainted_blend"}}'
    ),
    Item.of(
      "kubejs:tainted_blend",
      '{SequencedAssembly:{Progress:0.4f,Step:2,id:"kubejs:recipes/create/sequenced_assembly/tainted_blend"}}'
    )
  ).id(`${id_prefix}tainted_blend3`);

  cutting(
    [
      Item.of("create:raw_zinc").withChance(0.33),
      Item.of("tiab:time_in_a_bottle", "{storedTime:2147483647}").withChance(
        0.011
      ),
      Item.of("raw_gold").withChance(0.33),
      Item.of("raw_copper").withChance(0.33),
    ],
    Item.of(
      "kubejs:tainted_blend",
      '{SequencedAssembly:{Progress:0.8f,Step:4,id:"kubejs:recipes/create/sequenced_assembly/tainted_blend"}}'
    )
  ).id(`${id_prefix}tainted_blend4`);

  mixing("architects_palette:algal_blend", [
    "minecraft:clay_ball",
    "minecraft:kelp",
  ]).id(`${id_prefix}algal_blend`);

  mixing("architects_palette:nether_brass_blend", [
    "tconstruct:nether_grout",
    "create:brass_ingot",
  ]).id(`${id_prefix}nether_brass_blend`);

  mixing("kubejs:ferro_coke_blend", [
    "minecraft:raw_iron",
    "immersiveengineering:dust_coke",
  ])
    .superheated()
    .id(`${id_prefix}ferro_coke_blend`);

  mixing(Fluid.of("thermal:redstone", 100), "redstone")
    .heated()
    .id(`${id_prefix}redstone`);
  filling("create:rose_quartz", [
    Fluid.of("thermal:redstone", 100),
    "quartz",
  ]).id(`${id_prefix}rose_quartz`);

  deploying(
    ["create:electron_tube", Item.of("create:electron_tube").withChance(0.1)],
    ["create:iron_sheet", "create:polished_rose_quartz"]
  ).id(`${id_prefix}electron_tube`);
  mixing("architects_palette:oracle_jelly", [
    "minecraft:chorus_fruit",
    "minecraft:amethyst_shard",
    "minecraft:sugar",
    "minecraft:shulker_shell",
  ]).id(`${id_prefix}oracle_jelly`);

  filling("immersiveengineering:treated_wood_horizontal", [
    Fluid.of("immersiveengineering:creosote", 100),
    "#minecraft:planks",
  ]).id(`${id_prefix}treated_wood`);

  filling("netherrack", [Fluid.of("lava", 100), "cobblestone"]).id(
    `${id_prefix}netherrack`
  );

  compacting("thermal:rubber", Fluid.of("thermal:latex", 100)).id(
    `${id_prefix}rubber`
  );

  pressing(
    "extendedcrafting:black_iron_slate",
    "extendedcrafting:black_iron_ingot"
  ).id(`${id_prefix}black_iron_slate`);

  mixing("2x extendedcrafting:luminessence", [
    "minecraft:redstone",
    "minecraft:glowstone_dust",
  ]).id(`${id_prefix}luminessence`);

  compacting(
    Fluid.of("manaliquidizer:mana_fluid", 100),
    "#botania:mystical_flowers"
  ).id(`${id_prefix}mana_fluid`);

  deploying("immersiveengineering:circuit_board", [
    "immersiveengineering:plate_duroplast",
    "immersiveengineering:insulating_glass",
  ]).id(`${id_prefix}circuit_board`);

  cutting("immersiveengineering:wire_copper", "minecraft:copper_ingot").id(
    `${id_prefix}wire_copper`
  );

  mixing("pipez:item_pipe", ["minecraft:dropper", "thermal:cured_rubber"]).id(
    `${id_prefix}item_pipe`
  );

  mixing("pipez:fluid_pipe", ["bucket", "thermal:cured_rubber"]).id(
    `${id_prefix}fluid_pipe`
  );

  mixing("pipez:energy_pipe", [
    "immersiveengineering:wirecoil_copper",
    "thermal:cured_rubber",
  ]).id(`${id_prefix}energy_pipe`);
});
