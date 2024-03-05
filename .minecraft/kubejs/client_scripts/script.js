// priority: 0

onEvent("item.tooltip", (tooltip) => {
  tooltip.add("kubejs:undef1ned", Text.translate("tooltip.kubejs.1234").green());

  tooltip.add("minecraft:oak_sapling", Text.translate("tooltip.kubejs.oak_sapling").green());

  tooltip.add("naturesaura:ancient_sapling", Text.translate("tooltip.kubejs.ancient_sapling").green());

  tooltip.add("naturesaura:birth_spirit", Text.translate("tooltip.kubejs.birth_spirit").green());

  // tooltip.add(
  //   ["naturesaura:fortress_finder", "kubejs:wither_skeleton_eye", "kubejs:ghast_eye"],
  //   Text.translate("tooltip.kubejs.eyes").green()
  // );

  // tooltip.add("farmingforblockheads:market", Text.translate("tooltip.kubejs.market").green());

  tooltip.add("assemblylinemachines:corrupted_shard", Text.translate("tooltip.kubejs.corrupted_shard").green());

  tooltip.add("multiblocked:pedestal", Text.translate("tooltip.kubejs.pedestal").red());

  tooltip.add("miniutilities:speed_upgrade", Text.translate("tooltip.kubejs.speed_upgrade").green());

  // tooltip.add("naturesaura:animal_spawner", Text.translate("tooltip.kubejs.animal_spawner").green());

  // tooltip.add("naturesaura:gold_fiber", Text.translate("tooltip.kubejs.gold_fiber").green());

  // tooltip.add("naturesaura:token_anger", Text.translate("tooltip.kubejs.token_anger").green());

  // tooltip.add("kubejs:nether_eye", Text.translate("tooltip.kubejs.nether_eye").green());

  tooltip.add("create:refined_radiance", Text.translate("tooltip.kubejs.refined_radiance").green());

  tooltip.add("create:shadow_steel", Text.translate("tooltip.kubejs.shadow_steel").green());

  tooltip.add("createendertransmission:energy_transmitter", Text.translate("tooltip.kubejs.energy_transmitter").green());

  tooltip.add("minecraft:end_portal_frame", Text.translate("tooltip.kubejs.end_portal_frame").green());

  tooltip.add(
    ["extendedcrafting:elite_auto_table", "extendedcrafting:ultimate_auto_table"],
    Text.translate("tooltip.kubejs.auto_table").green()
  );

  tooltip.add("create:blaze_burner", Text.translate("tooltip.kubejs.blaze_burner").green());

  tooltip.add("create:blaze_cake", Text.translate("tooltip.kubejs.blaze_cake").green());

  tooltip.add("minecraft:netherite_ingot", Text.translate("tooltip.kubejs.netherite_ingot").green());

  tooltip.add("tiab:time_in_a_bottle", [
    Text.translate("tooltip.kubejs.time_in_a_bottle1").green(),
    Text.translate("tooltip.kubejs.time_in_a_bottle2").green(),
    Text.translate("tooltip.kubejs.time_in_a_bottle3").green(),
  ]);
  
  tooltip.add("minecraft:quartz", Text.translate("tooltip.kubejs.quartz").green());
  
  tooltip.add(
    ["kubejs:smoked_iron_block", "extendedcrafting:black_iron_ingot"],
    [Text.translate("tooltip.kubejs.black_iron1").green(), Text.translate("tooltip.kubejs.black_iron2").green()]
  );

  tooltip.add("manaliquidizer:mana_liquidizer", [
    Text.translate("tooltip.kubejs.mana_liquidizer1").green(),
    Text.translate("tooltip.kubejs.mana_liquidizer2").green(),
    Text.translate("tooltip.kubejs.mana_liquidizer3").green(),
  ]);

  tooltip.add("@torcherino", [Text.translate("tooltip.kubejs.torcherino1").red(), Text.translate("tooltip.kubejs.torcherino2").red()]);

  tooltip.add("assemblylinemachines:condensed_void_bucket", [
    Text.translate("tooltip.kubejs.condensed_void_bucket1").red(),
    Text.translate("tooltip.kubejs.condensed_void_bucket2").red(),
  ]);

  tooltip.add(
    ["assemblylinemachines:entropy_reactor_block", "assemblylinemachines:entropy_reactor_core"],
    [Text.translate("tooltip.kubejs.entropy_reactor1").red(), Text.translate("tooltip.kubejs.entropy_reactor2").red()]
  );
});

onEvent("jei.remove.recipes", (event) => {
  event.remove("create:sequenced_assembly", "kubejs:recipes/create/sequenced_assembly/queens_slime_ingot");
  event.remove("create:sequenced_assembly", "kubejs:recipes/create/sequenced_assembly/tainted_blend");
  event.remove("create:sequenced_assembly", "kubejs:def1ned");
  event.remove("create:sequenced_assembly", "kubejs:next");
  event.remove("create:crushing", "kubejs:recipes/create/create/tainted_blend1");
  event.remove("create:deploying", "kubejs:recipes/create/create/tainted_blend3_using_deployer");
  event.remove("create:draining", "create:empty_mekanism_creative_fluid_tank_of_kubejs_mana");
  event.remove("create:draining", "create:empty_mekanism_creative_fluid_tank_of_manaliquidizer_mana_fluid");
  event.remove("create:draining", "create:empty_manaliquidizer_mana_fluid_bucket_of_manaliquidizer_mana_fluid");
  event.remove("immersiveengineering:arcfurnace_recycling", "immersiveengineering:recycling/pure_copper_plate");
  event.remove("immersiveengineering:arcfurnace_recycling", "immersiveengineering:recycling/pure_copper_gear");
  event.remove("immersiveengineering:arcfurnace_recycling", "immersiveengineering:recycling/pure_iron_gear");
  event.remove("immersiveengineering:arcfurnace_recycling", "immersiveengineering:recycling/pure_iron_plate");
  event.remove("immersiveengineering:arcfurnace_recycling", "immersiveengineering:recycling/pure_gold_plate");
  event.remove("immersiveengineering:arcfurnace_recycling", "immersiveengineering:recycling/pure_gold_gear");
  event.remove("lychee:item_burning", "lychee:kubejs/recipes/lychee/burning/token_anger");
  event.remove("lychee:block_crushing", "lychee:kubejs/recipes/lychee/block_crushing/gold_fiber");
  event.remove("lychee:item_inside", "lychee:kubejs/recipes/lychee/market");
  event.remove("lychee:item_inside", "lychee:kubejs/recipes/lychee/market_ghost");
  event.remove("lychee:item_inside", "lychee:kubejs/recipes/lychee/nether_portal/nether_eye");
  event.remove("lychee:item_inside", "lychee:kubejs/recipes/lychee/nether_portal/nether_eye_ghost");
  event.remove("lychee:block_interacting", "lychee:kubejs/recipes/lychee/oak_sapling");
});
onEvent("jei.remove.categories", (event) => {
  console.log(event.getCategoryIds());
  event.remove([
    "create:automatic_shaped",
    "create:automatic_shapeless",
    "jeresources:dungeon",
    "jeresources:enchantment",
    "jeresources:worldgen",
    "hostilenetworks:sim_chamber",
    "projecte:world_transmutation",
    "projecte:collector",
    "assemblylinemachines:alloying",
    "assemblylinemachines:bathing",
    "assemblylinemachines:enchantment_book",
    "assemblylinemachines:fertilizer",
    "assemblylinemachines:fig",
    "assemblylinemachines:generator_fluid",
    "assemblylinemachines:greenhouse",
    "assemblylinemachines:grinding",
    "assemblylinemachines:lumber",
    "assemblylinemachines:pneumatic",
    "assemblylinemachines:purifying",
    "assemblylinemachines:refining",
  ]);
});

onEvent("jei.hide.items", (event) => {
  event.hide([
    "ae2:vibration_chamber",
    "naturesaura:rf_converter",
    "immersiveengineering:thermoelectric_generator",
    "immersiveengineering:dynamo",
    "thermal:dynamo_gourmand",
    "thermal:dynamo_disenchantment",
    "thermal:dynamo_lapidary",
    "thermal:dynamo_numismatic",
    "thermal:dynamo_magmatic",
    "thermal:dynamo_compression",
    "thermal:dynamo_stirling",
    "industrialforegoing:pitiful_generator",
    "industrialforegoing:biofuel_generator",
    "industrialforegoing:mycelial_furnace",
    "industrialforegoing:mycelial_slimey",
    "industrialforegoing:mycelial_potion",
    "industrialforegoing:mycelial_culinary",
    "industrialforegoing:mycelial_disenchantment",
    "industrialforegoing:mycelial_ender",
    "industrialforegoing:mycelial_explosive",
    "industrialforegoing:mycelial_meatallurgic",
    "industrialforegoing:mycelial_crimed",
    "industrialforegoing:mycelial_rocket",
    "industrialforegoing:mycelial_death",
    "industrialforegoing:mycelial_pink",
    "industrialforegoing:mycelial_netherstar",
    "industrialforegoing:mycelial_magma",
    "industrialforegoing:mycelial_halitosis",
    "industrialforegoing:mycelial_frosty",
    "hostilenetworks:sim_chamber",
    "immersiveengineering:circuit_table",
    "industrialforegoing:mob_slaughter_factory",
    "projecte:watch_of_flowing_time",
    Item.of("minecraft:enchanted_book").enchant("miniutilities:molten_head", 1),
    "miniutilities:golden_lasso",
    "kubejs:nether_portal_frame_filled",
    "kubejs:air"
  ]);
});

onEvent("jei.add.items", (event) => {
  event.add("create:chromatic_compound");
  event.add("create:shadow_steel");
  event.add("create:shadow_steel_casing");
  event.add("create:refined_radiance");
  event.add("create:refined_radiance_casing");
  event.add("kubejs:incomplete_queens_slime_ingot");
  event.add("kubejs:incomplete_rf_coil");
  event.add("kubejs:incomplete_redstone_servo");
  event.add("kubejs:tainted_blend");
  event.add("kubejs:incomplete_creative_mana_tablet");
});
