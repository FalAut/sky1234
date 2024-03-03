onEvent("recipes", (event) => {
  const id_prefix = "naturesaura:animal_spawner/";
  const recipes = [
    {
      inputs: ["naturesaura:birth_spirit", "orange_dye"],
      entity: "blaze",
      aura: 0,
      time: 120,
      id: `${id_prefix}blaze`,
    },
    {
      inputs: ["naturesaura:birth_spirit", "white_dye"],
      entity: "ghast",
      aura: 0,
      time: 120,
      id: `${id_prefix}ghast`,
    },
    {
      inputs: ["naturesaura:birth_spirit", "black_dye"],
      entity: "wither_skeleton",
      aura: 0,
      time: 120,
      id: `${id_prefix}wither_skeleton`,
    },
    {
      inputs: ["naturesaura:birth_spirit", "naturesaura:infused_iron", "kubejs:infused_coal"],
      entity: "villager",
      aura: 0,
      time: 120,
      id: `${id_prefix}villager`,
    },
  ];

  recipes.forEach((recipe) => {
    recipe.type = "naturesaura:animal_spawner";
    recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
    event.custom(recipe).id(recipe.id);
  });
});
