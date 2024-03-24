onEvent("recipes", (event) => {
  const predictions = [
    "ender_dragon",
    "blaze",
    "chicken",
    "cod",
    "cow",
    "creeper",
    "drowned",
    "elder_guardian",
    "enderman",
    "evoker",
    "ghast",
    "guardian",
    "glow_squid",
    "hoglin",
    "iron_golem",
    "magma_cube",
    "mooshroom",
    "phantom",
    "pig",
    "polar_bear",
    "rabbit",
    "sheep",
    "shulker",
    "skeleton",
    "slime",
    "snow_golem",
    "spider",
    "squid",
    "thermal/basalz",
    "thermal/blitz",
    "thermal/blizz",
    "vindicator",
    "witch",
    "wither",
    "wither_skeleton",
    "zombie",
    "zombified_piglin",
  ]

  const predictionItems = predictions.map((prediction) => {
    return Item.of("hostilenetworks:prediction", `{data_model:{id:"hostilenetworks:${prediction}"}}`)
  })

  event.recipes.multiblocked
    .multiblock("prediction_chamber")
    .duration(60)
    .id("kubejs:recipes/multiblocked/prediction")
    .setChance(0.25)
    .outputItems(predictionItems)
})
