// priority: 0

onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/shapless/";
  let { minecraft } = event.recipes;

  minecraft.crafting_shapeless("2x kubejs:undef1ned", "kubejs:undef1ned").id(`${id_prefix}undef1ned1`);
  minecraft.crafting_shapeless("4x kubejs:undef1ned", "kubejs:undef1ned_block").id(`${id_prefix}undef1ned2`);
  minecraft.crafting_shapeless("kubejs:undef1ned_fluid_bucket", ["kubejs:undef1ned", "bucket"]).id(`${id_prefix}undef1ned_fluid_bucket`);
  minecraft.crafting_shapeless("grass_block", ["water_bucket", "dirt"]).id(`${id_prefix}grass_block`);
  minecraft.crafting_shapeless("black_dye", "#coals").id(`${id_prefix}black_dye`);
  minecraft
    .crafting_shapeless("miniutilities:feather_angel_ring", ["naturesaura:pet_reviver", "naturesaura:death_ring"])
    .id(`${id_prefix}feather_angel_ring`);
  minecraft
    .crafting_shapeless(Item.of("create:sand_paper", "{Damage:0,Unbreakable:1b}"), ["minecraft:paper", "minecraft:sand"])
    .id(`${id_prefix}sand_paper`);
  minecraft
    .crafting_shapeless("architects_palette:oracle_jelly", [
      "minecraft:chorus_fruit",
      "minecraft:amethyst_shard",
      "minecraft:sugar",
      "minecraft:shulker_shell",
    ])
    .id(`${id_prefix}oracle_jelly`);
  minecraft.crafting_shapeless("4x occultism:candle_white", ["torch", "create:refined_radiance"]).id(`${id_prefix}candle_white`);
  minecraft.crafting_shapeless("minecraft:candle", "occultism:candle_white").id(`${id_prefix}candle`);
  minecraft
    .crafting_shapeless("tiab:time_in_a_bottle", ["minecraft:glass_bottle", "naturesaura:clock_hand"])
    .id(`${id_prefix}time_in_a_bottle`);
  minecraft
    .crafting_shapeless("naturesaura:token_rage", [
      "naturesaura:token_anger",
      Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}'),
    ])
    .id(`${id_prefix}token_rage`);
  minecraft.crafting_shapeless("occultism:spirit_fire", "create:chromatic_compound").id(`${id_prefix}spirit_fire`);
  minecraft.crafting_shapeless("minecraft:deepslate", ["cobblestone", "black_dye"]).id(`${id_prefix}deepslate`);
  minecraft
    .crafting_shapeless("occultism:chalk_purple_impure", ["occultism:chalk_white_impure", "purple_dye"])
    .id(`${id_prefix}chalk_purple_impure`);
  minecraft
    .crafting_shapeless("64x hostilenetworks:overworld_prediction", "hostilenetworks:empty_prediction")
    .id(`${id_prefix}overworld_prediction`);
  // minecraft.crafting_shapeless(Item.of('minecraft:enchanted_book').enchant('miniutilities:molten_head', 1), ['minecraft:lava_bucket', 'eccentrictome:tome']).id(`${id_prefix}molten_head`);
  minecraft
    .crafting_shapeless("assemblylinemachines:pure_steel_ingot", [
      "immersiveengineering:ingot_steel",
      "assemblylinemachines:pure_iron_ingot",
    ])
    .id(`${id_prefix}pure_steel_ingot`);
  minecraft
    .crafting_shapeless("minecraft:crimson_nylium", ["minecraft:crimson_fungus", "minecraft:netherrack"])
    .id(`${id_prefix}crimson_nylium`);
  minecraft.crafting_shapeless("4x minecraft:magma_cream", "kubejs:congealed_magma_cream").id(`${id_prefix}magma_cream`);
  minecraft
    .crafting_shapeless("64x createendertransmission:energy_transmitter", ["kubejs:undef1ned_block", "create:cogwheel"])
    .id(`${id_prefix}energy_transmitter`);
  minecraft.crafting_shapeless("immersiveengineering:ore_aluminum", "minecraft:raw_iron").id(`${id_prefix}ore_aluminum`);
  minecraft.crafting_shapeless("immersiveengineering:ore_uranium", "minecraft:raw_gold").id(`${id_prefix}ore_uranium`);
});
