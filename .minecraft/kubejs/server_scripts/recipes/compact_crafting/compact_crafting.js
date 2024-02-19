onEvent('recipes', event => {
    const id_prefix = 'kubejs:recipes/compact_crafting/'
    const recipes = [
      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["_", "1", "1", "1", "_"],
                ["1", "_", "_", "_", "1"],
                ["1", "_", "_", "_", "1"],
                ["1", "_", "_", "_", "1"],
                ["_", "1", "1", "1", "_"]
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["_", "_", "_", "_", "_"],
                ["_", "1", "1", "1", "_"],
                ["_", "1", "1", "1", "_"],
                ["_", "1", "1", "1", "_"],
                ["_", "_", "_", "_", "_"]
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["_", "_", "_", "_", "_"],
                ["_", "_", "_", "_", "_"],
                ["_", "_", "2", "_", "_"],
                ["_", "_", "_", "_", "_"],
                ["_", "_", "_", "_", "_"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["_", "_", "_", "_", "_"],
                ["_", "_", "_", "_", "_"],
                ["_", "_", "2", "_", "_"],
                ["_", "_", "_", "_", "_"],
                ["_", "_", "_", "_", "_"]
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["_", "_", "_", "_", "_"],
                ["_", "2", "2", "2", "_"],
                ["_", "2", "2", "2", "_"],
                ["_", "2", "2", "2", "_"],
                ["_", "_", "_", "_", "_"]
            ]
          }
        ],
        catalyst: {
            id: 'naturesaura:infused_iron',
            Count: 1
        },
        components: {
          '1': {
            type: "compactcrafting:block",
            block: 'naturesaura:infused_stone'
          },
          '2': {
            type: "compactcrafting:block",
            block: 'minecraft:oak_planks'
          },
          '_': {
            type: "compactcrafting:block",
            block: 'minecraft:air'
          }
        },
        outputs: [{
          id: 'naturesaura:offering_table',
          Count: 1
        }],
        id: `${id_prefix}offering_table`
      },
      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "1", "1", "1", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "1", "1", "1", "1"]
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "2", "2", "2", "1"],
                ["2", "_", "_", "_", "2"],
                ["2", "_", "_", "_", "2"],
                ["2", "_", "_", "_", "2"],
                ["1", "2", "2", "2", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "2", "2", "2", "1"],
                ["2", "_", "_", "_", "2"],
                ["2", "_", "_", "_", "2"],
                ["2", "_", "_", "_", "2"],
                ["1", "2", "2", "2", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "2", "2", "2", "1"],
                ["2", "_", "_", "_", "2"],
                ["2", "_", "_", "_", "2"],
                ["2", "_", "_", "_", "2"],
                ["1", "2", "2", "2", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "1", "1", "1", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "1", "1", "1", "1"]
            ]
          }
        ],
        catalyst: {
            id: 'projecte:dark_matter',
            Count: 1
        },
        components: {
          '1': {
            type: "compactcrafting:block",
            block: 'ae2:quartz_block'
          },
          '2': {
            type: "compactcrafting:block",
            block: 'thermal:obsidian_glass'
          },
          '_': {
            type: "compactcrafting:block",
            block: 'minecraft:air'
          }
        },
        outputs: [{
          id: 'thermal:machine_frame',
          Count: 1
        }],
        id: `${id_prefix}machine_frame`
      },
      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["2", "1", "1", "1", "2"],
                ["1", "2", "1", "2", "1"],
                ["1", "1", "2", "1", "1"],
                ["1", "2", "1", "2", "1"],
                ["2", "1", "1", "1", "2"]
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "2", "1", "2", "1"],
                ["2", "_", "_", "_", "2"],
                ["1", "_", "_", "_", "1"],
                ["2", "_", "_", "_", "2"],
                ["1", "2", "1", "2", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "1", "2", "1", "1"],
                ["1", "_", "_", "_", "1"],
                ["2", "_", "_", "_", "2"],
                ["1", "_", "_", "_", "1"],
                ["1", "1", "2", "1", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "2", "1", "2", "1"],
                ["2", "_", "_", "_", "2"],
                ["1", "_", "_", "_", "1"],
                ["2", "_", "_", "_", "2"],
                ["1", "2", "1", "2", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["2", "1", "1", "1", "2"],
                ["1", "2", "1", "2", "1"],
                ["1", "1", "2", "1", "1"],
                ["1", "2", "1", "2", "1"],
                ["2", "1", "1", "1", "2"]
            ]
          }
        ],
        catalyst: {
            id: 'industrialforegoing:machine_frame_supreme',
            Count: 1
        },
        components: {
          '1': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:storage_steel'
          },
          '2': {
            type: "compactcrafting:block",
            block: 'mekanism:block_osmium'
          },
          '_': {
            type: "compactcrafting:block",
            block: 'minecraft:air'
          }
        },
        outputs: [{
          id: 'mekanism:steel_casing',
          Count: 1
        }],
        id: `${id_prefix}steel_casing`
      },
      {
        recipeSize: 5,
        layers: [
          // {
          //   type: 'compactcrafting:mixed',
          //   pattern: [
          //       ["_", "_", "_", "_", "_"],
          //       ["_", "_", "_", "_", "_"],
          //       ["_", "_", "_", "_", "_"],
          //       ["_", "_", "_", "_", "_"],
          //       ["_", "_", "_", "_", "_"]
          //   ]
          // },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "1", "1", "1", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "1", "1", "1", "1"]
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["1", "2", "2", "2", "1"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["1", "2", "2", "2", "1"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["2", "1", "1", "1", "2"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["1", "2", "2", "2", "1"],
                ["2", "1", "1", "1", "2"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
                ["2", "2", "2", "2", "2"],
            ]
          }
        ],
        catalyst: {
            id: 'minecraft:dragon_egg',
            Count: 1
        },
        components: {
          '1': {
            type: "compactcrafting:block",
            block: 'thermal_extra:dragonsteel_block'
          },
          '2': {
            type: "compactcrafting:block",
            block: 'minecraft:end_stone'
          },
          '_': {
            type: "compactcrafting:block",
            block: 'minecraft:air'
          }
        },
        outputs: [{
          id: 'minecraft:end_portal_frame',
          Count: 12
        }],
        id: `${id_prefix}end_portal_frame`
      },
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        }).id(recipe.id);
    });
});