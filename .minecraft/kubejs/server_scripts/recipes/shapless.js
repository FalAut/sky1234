// priority: 0

onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/shapless/"
  const { shapeless } = event

  shapeless("naturesaura:gold_fiber", ["naturesaura:gold_leaf", "#forge:axes"]).damageIngredient("#forge:axes")

  shapeless("naturesaura:token_anger", [
    "naturesaura:token_joy",
    Item.of("minecraft:flint_and_steel").ignoreNBT(),
  ]).damageIngredient("flint_and_steel")

  event
    .shapeless("farmingforblockheads:market", ["naturesaura:animal_generator", "kubejs:undef1ned_fluid_bucket"])
    .replaceIngredient("kubejs:undef1ned_fluid_bucket", "bucket")

  shapeless("2x kubejs:undef1ned", "kubejs:undef1ned")
  shapeless("4x kubejs:undef1ned", "kubejs:undef1ned_block")

  shapeless("kubejs:undef1ned_fluid_bucket", ["kubejs:undef1ned", "bucket"])
  shapeless("grass_block", ["water_bucket", "dirt"])
  shapeless("black_dye", "#coals")

  shapeless("8x kubejs:nether_eye", [
    "naturesaura:fortress_finder",
    "kubejs:ghast_eye",
    "kubejs:wither_skeleton_eye",
    "lava_bucket",
  ])

  shapeless("miniutilities:feather_angel_ring", ["naturesaura:pet_reviver", "naturesaura:death_ring"]).id(
    `${id_prefix}feather_angel_ring`
  )

  shapeless(Item.of("create:sand_paper", "{Damage:0,Unbreakable:1b}"), ["minecraft:paper", "minecraft:sand"]).id(
    `${id_prefix}sand_paper`
  )

  shapeless("architects_palette:oracle_jelly", [
    "minecraft:chorus_fruit",
    "minecraft:amethyst_shard",
    "minecraft:sugar",
    "minecraft:shulker_shell",
  ]).id(`${id_prefix}oracle_jelly`)

  shapeless("4x occultism:candle_white", ["torch", "create:refined_radiance"]).id(`${id_prefix}candle_white`)
  shapeless("minecraft:candle", "occultism:candle_white").id(`${id_prefix}candle`)

  shapeless("tiab:time_in_a_bottle", ["minecraft:glass_bottle", "naturesaura:clock_hand"]).id(
    `${id_prefix}time_in_a_bottle`
  )

  shapeless("naturesaura:token_rage", [
    "naturesaura:token_anger",
    Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}'),
  ]).id(`${id_prefix}token_rage`)
  shapeless("occultism:spirit_fire", "create:chromatic_compound").id(`${id_prefix}spirit_fire`)
  shapeless("minecraft:deepslate", ["cobblestone", "black_dye"]).id(`${id_prefix}deepslate`)

  shapeless("occultism:chalk_purple_impure", ["occultism:chalk_white_impure", "purple_dye"]).id(
    `${id_prefix}chalk_purple_impure`
  )

  shapeless("64x hostilenetworks:overworld_prediction", "hostilenetworks:empty_prediction").id(
    `${id_prefix}overworld_prediction`
  )

  shapeless("assemblylinemachines:pure_steel_ingot", [
    "immersiveengineering:ingot_steel",
    "assemblylinemachines:pure_iron_ingot",
  ]).id(`${id_prefix}pure_steel_ingot`)

  shapeless("minecraft:crimson_nylium", ["minecraft:crimson_fungus", "minecraft:netherrack"]).id(
    `${id_prefix}crimson_nylium`
  )
  shapeless("4x minecraft:magma_cream", "kubejs:congealed_magma_cream").id(`${id_prefix}magma_cream`)

  shapeless("64x createendertransmission:energy_transmitter", ["kubejs:undef1ned_block", "create:cogwheel"]).id(
    `${id_prefix}energy_transmitter`
  )
  shapeless("immersiveengineering:ore_aluminum", "minecraft:raw_iron").id(`${id_prefix}ore_aluminum`)
  shapeless("immersiveengineering:ore_uranium", "minecraft:raw_gold").id(`${id_prefix}ore_uranium`)
})
