onEvent("recipes", (event) => {
  const id_prefix = "naturesaura:tree_ritual/"
  const recipes = [
    {
      ingredients: [
        //N S W E NW SE NE SW
        "kubejs:undef1ned",
        "kubejs:undef1ned_block",
        "cobblestone",
        "cobblestone",
        "cobblestone",
        "cobblestone",
        "cobblestone",
        "cobblestone",
      ],
      output: "kubejs:earth_core",
      time: 200,
      sapling: "oak_sapling",
      id: `${id_prefix}earth_core`,
    },
    {
      ingredients: [
        //N S W E NW SE NE SW
        "kubejs:undef1ned",
        "kubejs:undef1ned_block",
        "kubejs:undef1ned_block",
        "kubejs:undef1ned",
        "kubejs:undef1ned",
        "kubejs:undef1ned",
        "naturesaura:sky_ingot",
        "naturesaura:ancient_stick",
      ],
      output: {
        type: "forge:nbt",
        item: "botania:ender_dagger",
        nbt: '{Damage:0,Enchantments:[{id:"sharpness",lvl:5s},{id:"looting",lvl:3s}],Unbreakable:1b,RepairCost:1}',
      },
      time: 200,
      sapling: "oak_sapling",
      id: `${id_prefix}ender_dagger`,
    },
    {
      ingredients: [
        //N S W E NW SE NE SW
        { type: "forge:nbt", item: "naturesaura:aura_bottle", nbt: '{stored_type:"naturesaura:overworld"}' },
        "naturesaura:token_joy",
        "cobblestone",
        "cobblestone",
      ],
      output: "naturesaura:nature_altar",
      time: 200,
      sapling: "oak_sapling",
      id: `${id_prefix}nature_altar`,
    },
    {
      ingredients: [
        //N S W E NW SE NE SW
        "naturesaura:infused_iron",
        "naturesaura:token_euphoria",
        "naturesaura:infused_stone",
        "naturesaura:infused_stone",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
      ],
      output: "naturesaura:conversion_catalyst",
      time: 200,
      sapling: "oak_sapling",
      id: `${id_prefix}conversion_catalyst`,
    },
    {
      ingredients: [
        //N S W E NW SE NE SW
        "compactcrafting:projector_dish",
        "compactcrafting:base",
        "kubejs:infused_coal",
        { type: "forge:nbt", item: "naturesaura:aura_cache", nbt: "{aura:400000}" },
      ],
      output: "4x compactcrafting:field_projector",
      time: 200,
      sapling: "oak_sapling",
      id: `${id_prefix}field_projector`,
    },
    {
      ingredients: [
        //N S W E NW SE NE SW
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}'),
        "naturesaura:gold_leaf",
        "minecraft:iron_ingot",
        "minecraft:iron_ingot",
      ],
      output: "64x naturesaura:token_joy",
      time: 200,
      sapling: "oak_sapling",
      id: `${id_prefix}token_joy`,
    },
  ]

  recipes.forEach((recipe) => {
    recipe.type = "naturesaura:tree_ritual"
    recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson())
    recipe.sapling = Item.of(recipe.sapling).toJson()
    recipe.output = Item.of(recipe.output).toResultJson()
    event.custom(recipe).id(recipe.id)
  })
})
