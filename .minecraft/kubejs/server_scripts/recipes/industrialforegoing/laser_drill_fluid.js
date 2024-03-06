onEvent("recipes", (event) => {
  event
    .custom({
      output: '{FluidName:"industrialforegoing:pink_slime",Amount:100}',
      rarity: [
        {
          whitelist: {},
          blacklist: {},
          depth_min: -64,
          depth_max: 256,
          weight: 8,
        },
      ],
      pointer: 0,
      catalyst: {
        item: "industrialforegoing:laser_lens6",
      },
      entity: "botania:pink_wither",
      type: "industrialforegoing:laser_drill_fluid",
    })
    .id("kubejs:recipe/industrialforegoing/laser_drill_fluid/pink_slime");

  event
    .custom({
      output: '{FluidName:"industrialforegoing:ether_gas",Amount:100}',
      rarity: [
        {
          whitelist: {},
          blacklist: {},
          depth_min: -64,
          depth_max: 256,
          weight: 8,
        },
      ],
      pointer: 0,
      catalyst: {
        item: "industrialforegoing:laser_lens15",
      },
      entity: "wither",
      type: "industrialforegoing:laser_drill_fluid",
    })
    .id("kubejs:recipe/industrialforegoing/laser_drill_fluid/ether_gas");
});
