/** @format */

onEvent("recipes", (event) => {
  const id_prefix = "chroma:pack/industrialforegoing/laser_drill_ore/";

  const recipes = [
    {
      output: { item: "mekanism:osmium_ore" },
      rarity: [
        {
          whitelist: {},
          blacklist: {},
          depth_min: -64,
          depth_max: 320,
          weight: 50,
        },
      ],
      catalyst: { item: "botania:lens_flare" },
      id: `${id_prefix}osmium_ore`,
    },
    {
      output: { item: "mekanism:fluorite_ore" },
      rarity: [
        {
          whitelist: {},
          blacklist: {},
          depth_min: -64,
          depth_max: 320,
          weight: 25,
        },
      ],
      catalyst: { item: "botania:lens_flare" },
      id: `${id_prefix}fluorite_ore`,
    },
    {
      output: { item: "assemblylinemachines:titanium_ore" },
      rarity: [
        {
          whitelist: {},
          blacklist: {},
          depth_min: -64,
          depth_max: 320,
          weight: 25,
        },
      ],
      catalyst: { item: "botania:lens_flare" },
      id: `${id_prefix}titanium_ore`,
    },
  ];
  recipes.forEach((recipe) => {
    event
      .custom({
        type: "industrialforegoing:laser_drill_ore",
        output: recipe.output,
        rarity: recipe.rarity,
        pointer: 0,
        catalyst: recipe.catalyst,
      })
      .id(recipe.id);
  });
});
