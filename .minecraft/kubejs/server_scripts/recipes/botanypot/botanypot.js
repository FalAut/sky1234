/** @format */

onEvent("recipes", (event) => {
  event.custom({
    type: "botanypots:crop",
    seed: { item: "miniutilities:flame_lily_seeds" },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "miniutilities:flame_lily_block",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:blaze_rod" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:blaze_rod" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });

  event.custom({
    type: "botanypots:crop",
    seed: { item: "miniutilities:ender_lily_seeds" },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "miniutilities:ender_lily_block",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:ender_pearl" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:ender_pearl" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });

  event.custom({
    type: "botanypotstiers:crop",
    seed: { item: "miniutilities:flame_lily_seeds" },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypotstiers:aging",
      block: "miniutilities:flame_lily_block",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:blaze_rod" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:blaze_rod" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });

  event.custom({
    type: "botanypotstiers:crop",
    seed: { item: "miniutilities:ender_lily_seeds" },
    categories: ["dirt", "farmland"],
    growthTicks: 1200,
    display: {
      type: "botanypotstiers:aging",
      block: "miniutilities:ender_lily_block",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:ender_pearl" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:ender_pearl" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });
});
