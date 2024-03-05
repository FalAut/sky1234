onEvent("recipes", (event) => {
  const id_prefix = "naturesaura:altar/";
  const recipes = [
    {
      input: "iron_ingot",
      output: { item: "naturesaura:infused_iron", count: 1 },
      aura_type: "naturesaura:overworld",
      aura: 0,
      time: 80,
      id: `${id_prefix}infused_iron`,
    },
    {
      input: "stone",
      output: { item: "naturesaura:infused_stone", count: 4 },
      aura_type: "naturesaura:overworld",
      aura: 0,
      time: 80,
      id: `${id_prefix}infused_stone`,
    },
    {
      input: "charcoal",
      output: { item: "coal", count: 9 },
      aura_type: "naturesaura:overworld",
      catalyst: { item: "naturesaura:conversion_catalyst" },
      aura: 0,
      time: 80,
      id: `${id_prefix}coal`,
    },
    {
      input: "coal_block",
      output: { item: "kubejs:infused_coal", count: 9 },
      aura_type: "naturesaura:overworld",
      catalyst: { item: "naturesaura:conversion_catalyst" },
      aura: 0,
      time: 80,
      id: `${id_prefix}infused_coal`,
    },
    {
      input: "#saplings",
      output: { item: "naturesaura:ancient_sapling", count: 1 },
      aura_type: "naturesaura:overworld",
      aura: 0,
      time: 80,
      id: `${id_prefix}ancient_sapling`,
    },
    {
      input: "gold_ingot",
      output: { item: "naturesaura:tainted_gold", count: 1 },
      aura_type: "naturesaura:nether",
      aura: 0,
      time: 80,
      id: `${id_prefix}tainted_gold`,
    },
    {
      input: "naturesaura:infused_iron",
      output: { item: "naturesaura:tainted_gold", count: 1 },
      catalyst: { item: "naturesaura:conversion_catalyst" },
      aura_type: "naturesaura:nether",
      aura: 0,
      time: 80,
      id: `${id_prefix}tainted_gold1`,
    },
    {
      input: "blackstone",
      output: { item: "ae2:sky_stone_block", count: 1 },
      catalyst: { item: "naturesaura:conversion_catalyst" },
      aura_type: "naturesaura:nether",
      aura: 0,
      time: 80,
      id: `${id_prefix}gilded_blackstone`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "naturesaura:altar";
    recipe.input = Ingredient.of(recipe.input).toJson();
    event.custom(recipe).id(recipe.id);
  });
});
