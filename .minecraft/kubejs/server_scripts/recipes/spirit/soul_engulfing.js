onEvent("recipes", event => {
    const id_prefix = 'kubejs:recipe/spirit/soul_engulfing/';
    const recipes = [
      {
          ingredient: { item: 'immersiveengineering:ingot_steel' },
          multiblock: {
            pattern: [
              [
                "   ",
                " @ ",
                "   "
              ],
              [
                " S ",
                "S&S",
                " S "
              ]
            ],
            keys: {
              S: {
                block: 'spirit:soul_powder_block'
              }
            }
          },
          duration: 0,
          destroysStructure: false,
          outputItem: 'spirit:soul_steel_ingot',
          id: `${id_prefix}soul_steel_ingot1`
      },
      {
        ingredient: { item: 'minecraft:iron_ingot' },
        multiblock: {
          pattern: [
            [
              "   ",
              " @ ",
              "   "
            ],
            [
              " S ",
              "S&S",
              " S "
            ]
          ],
          keys: {
            S: {
              block: 'spirit:soul_powder_block'
            }
          }
        },
        duration: 0,
        destroysStructure: true,
        outputItem: 'spirit:soul_steel_block',
        id: `${id_prefix}soul_steel_ingot2`
    },
    ];

    recipes.forEach((recipe) => {
      event.custom({
        type: "spirit:soul_engulfing",
        input: {
          ingredient: recipe.ingredient,
          multiblock: recipe.multiblock
        },
        duration: recipe.duration,
        destroysStructure: recipe.destroysStructure,
        outputItem: recipe.outputItem
      }).id(recipe.id);
    });
});
