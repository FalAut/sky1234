onEvent('recipes', (event) => {
  const id_prefix = 'kubejs:recipes/create/sequenced_assembly/';
  const { sequenced_assembly, deploying, cutting, pressing, filling } = event.recipes.create;

  //Queens Slime Ingot
  let t = 'kubejs:incomplete_queens_slime_ingot';
  sequenced_assembly(['barrier'], 'barrier', [
    deploying(t, [t, 'minecraft:slime_ball']),
    deploying(t, [t, 'tconstruct:sky_slime_ball']),
    deploying(t, [t, 'tconstruct:ender_slime_ball']),
    deploying(t, [t, 'minecraft:magma_cream']),
    deploying(t, [t, 'tconstruct:ichor_slime_ball']),
    deploying(t, [t, 'tconstruct:blood_slime_ball']),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}queens_slime_ingot`);

  //Tainted Blend
  t = 'kubejs:tainted_blend';
  sequenced_assembly(
    [
      Item.of('raw_gold').withChance(33),
      Item.of('raw_copper').withChance(33),
      Item.of('create:raw_zinc').withChance(33),
      Item.of('tiab:time_in_a_bottle', '{storedTime:2147483647}').withChance(1),
    ],
    'barrier',
    [
      deploying(t, [t, 'create:millstone']),
      deploying(t, [t, 'create:mechanical_mixer']),
      deploying(t, [t, 'create:sand_paper']),
      pressing(t, t),
      cutting(t, t),
    ]
  )
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}tainted_blend`);

  //Precision Mechanism
  t = 'create:incomplete_precision_mechanism';
  sequenced_assembly('create:precision_mechanism', 'create:golden_sheet', [
    deploying(t, [t, 'create:cogwheel']),
    deploying(t, [t, 'create:large_cogwheel']),
    deploying(t, [t, 'immersiveengineering:screwdriver']).keepHeldItem(),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}precision_mechanism`);

  //rs_engineering
  t = 'redstone_block';
  sequenced_assembly('immersiveengineering:rs_engineering', t, [
    deploying(t, [t, 'immersiveengineering:sheetmetal_iron']),
    deploying(t, [t, 'create:precision_mechanism']),
    deploying(t, [t, 'create:electron_tube']),
    pressing(t, [t, t]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}rs_engineering`);

  //light_engineering
  t = 'iron_block';
  sequenced_assembly('immersiveengineering:light_engineering', t, [
    deploying(t, [t, 'immersiveengineering:sheetmetal_iron']),
    deploying(t, [t, 'create:precision_mechanism']),
    deploying(t, [t, 'create:electron_tube']),
    pressing(t, [t, t]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}light_engineering`);

  //heavy_engineering
  t = 'immersiveengineering:storage_steel';
  sequenced_assembly('immersiveengineering:heavy_engineering', t, [
    deploying(t, [t, 'immersiveengineering:sheetmetal_iron']),
    deploying(t, [t, 'create:precision_mechanism']),
    deploying(t, [t, 'create:electron_tube']),
    pressing(t, [t, t]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}heavy_engineering`);

  //generator
  t = 'minecraft:copper_block';
  sequenced_assembly('immersiveengineering:generator', t, [
    deploying(t, [t, 'immersiveengineering:coil_lv']),
    deploying(t, [t, 'create:precision_mechanism']),
    deploying(t, [t, 'immersiveengineering:sheetmetal_steel']),
    pressing(t, [t, t]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}generator`);

  //radiator
  t = 'create:zinc_block';
  sequenced_assembly('immersiveengineering:radiator', t, [
    deploying(t, [t, 'create:copper_sheet']),
    deploying(t, [t, 'create:precision_mechanism']),
    deploying(t, [t, 'immersiveengineering:sheetmetal_steel']),
    filling(t, [t, { fluidTag: 'minecraft:water', amount: 1000 }]),
    pressing(t, [t, t]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}radiator`);

  //component_electronic
  t = 'create:electron_tube';
  sequenced_assembly('immersiveengineering:component_electronic', t, [
    deploying(t, [t, 'immersiveengineering:slab_treated_wood_horizontal']),
    deploying(t, [t, 'immersiveengineering:plate_duroplast']),
    deploying(t, [t, 'immersiveengineering:wire_copper']),
    deploying(t, [t, 'immersiveengineering:screwdriver']).keepHeldItem(),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}component_electronic`);

  //electron_tube
  t = 'glass';
  sequenced_assembly('3x immersiveengineering:electron_tube', '#forge:glass', [
    deploying(t, [t, 'thermal:nickel_plate']),
    deploying(t, [t, 'immersiveengineering:wire_copper']),
    deploying(t, [t, 'minecraft:redstone']),
    deploying(t, [t, 'immersiveengineering:screwdriver']).keepHeldItem(),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}electron_tube`);

  //logic_circuit
  t = 'immersiveengineering:circuit_board';
  sequenced_assembly('immersiveengineering:logic_circuit', t, [
    deploying(t, [t, 'immersiveengineering:electron_tube']),
    deploying(t, [t, 'immersiveengineering:wire_copper']),
    deploying(t, [t, 'immersiveengineering:component_electronic']),
    deploying(t, [t, 'immersiveengineering:screwdriver']).keepHeldItem(),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}logic_circuit`);

  // Creative Motor
  t = 'create:gearbox';
  sequenced_assembly('create:creative_motor', t, [deploying(t, [t, 'tconstruct:queens_slime_ingot'])])
    .transitionalItem(t)
    .loops(1024)
    .id(`${id_prefix}creative_motor`);

  // RF Coil
  t = 'kubejs:incomplete_rf_coil';
  sequenced_assembly(
    [Item.of('thermal:rf_coil').withChance(99), Item.of('torcherino:double_compressed_torcherino').withChance(1)],
    'minecraft:gold_ingot',
    [
      deploying(t, [t, Item.of('immersiveengineering:metal_press').enchant('vanishing_curse', 100)]),
      filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    ]
  )
    .transitionalItem(t)
    .loops(4)
    .id(`${id_prefix}rf_coil`);

  // Redstone Servo
  t = 'kubejs:incomplete_redstone_servo';
  sequenced_assembly(
    [Item.of('thermal:redstone_servo').withChance(99), Item.of('torcherino:double_compressed_torcherino').withChance(1)],
    'minecraft:iron_ingot',
    [
      deploying(t, [t, Item.of('immersiveengineering:metal_press').enchant('vanishing_curse', 100)]),
      filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    ]
  )
    .transitionalItem(t)
    .loops(4)
    .id(`${id_prefix}redstone_servo`);

  // RF Coil Thermal
  t = 'kubejs:incomplete_rf_coil';
  sequenced_assembly('thermal:rf_coil', 'minecraft:gold_ingot', [
    deploying(t, [t, Item.of('thermal:machine_press').enchant('vanishing_curse', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}rf_coil_thermal`);

  // RF Servo Thermal
  t = 'kubejs:incomplete_redstone_servo';
  sequenced_assembly('thermal:redstone_servo', 'minecraft:iron_ingot', [
    deploying(t, [t, Item.of('thermal:machine_press').enchant('vanishing_curse', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
    filling(t, [t, Fluid.of('thermal:redstone', 100)]),
  ])
    .transitionalItem(t)
    .loops(1)
    .id(`${id_prefix}redstone_servo_thermal`);
});
