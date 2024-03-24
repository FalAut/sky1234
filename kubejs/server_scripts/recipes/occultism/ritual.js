onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/occultis/ritual/"
  const recipes = [
    {
      ritual_type: "occultism:craft_with_spirit_name",
      activation_item: { item: "ae2:controller" },
      pentacle_id: "occultism:craft_djinni",
      duration: 1,
      ritual_dummy: { item: "occultism:ritual_dummy/custom_ritual" },
      ingredients: [
        { item: "create:refined_radiance" },
        { item: "create:refined_radiance" },
        { item: "create:refined_radiance" },
        { item: "create:refined_radiance" },
      ],
      result: { item: "multiblocked:prediction_chamber_core" },
      id: `${id_prefix}prediction_chamber_core`,
    },
    {
      ritual_type: "occultism:craft_with_spirit_name",
      activation_item: { item: "occultism:magic_lamp_empty" },
      pentacle_id: "occultism:craft_djinni",
      duration: 1,
      ritual_dummy: { item: "occultism:ritual_dummy/custom_ritual" },
      ingredients: [
        { item: "hostilenetworks:empty_prediction" },
        { item: "hostilenetworks:empty_prediction" },
        { item: "hostilenetworks:empty_prediction" },
        { item: "hostilenetworks:empty_prediction" },
      ],
      result: Item.of("occultism:miner_debug_unspecialized", "{Unbreakable:1b}"),
      id: `${id_prefix}miner_debug_unspecialized`,
    },
    {
      ritual_type: "occultism:craft_with_spirit_name",
      activation_item: { item: "occultism:stable_wormhole" },
      pentacle_id: "occultism:craft_djinni",
      duration: 1,
      ritual_dummy: { item: "occultism:ritual_dummy/custom_ritual" },
      ingredients: [
        { item: "hostilenetworks:empty_prediction" },
        { item: "hostilenetworks:empty_prediction" },
        { item: "hostilenetworks:empty_prediction" },
        { item: "hostilenetworks:empty_prediction" },
      ],
      result: { item: "occultism:dimensional_mineshaft" },
      id: `${id_prefix}dimensional_mineshaft`,
    },
    {
      ritual_type: "occultism:craft_with_spirit_name",
      activation_item: { item: "botania:mana_diamond_block" },
      pentacle_id: "occultism:craft_djinni",
      duration: 1,
      ritual_dummy: { item: "occultism:ritual_dummy/custom_ritual" },
      ingredients: [
        { item: "botania:manasteel_ingot" },
        { item: "botania:manasteel_ingot" },
        { item: "botania:manasteel_ingot" },
        { item: "botania:manasteel_ingot" },
        { item: "botania:manasteel_ingot" },
        { item: "botania:mana_pearl" },
      ],
      result: { item: "multiblocked:runic_altar_core" },
      id: `${id_prefix}runic_altar_core`,
    },
  ]

  recipes.forEach((recipe) => {
    ;(recipe.type = "occultism:ritual"), event.custom(recipe).id(recipe.id)
  })
})
