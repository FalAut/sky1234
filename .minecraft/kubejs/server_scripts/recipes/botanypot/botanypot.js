/** @format */

onEvent("recipes", (event) => {
  //烈焰百合种子
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

  //烈焰百合种子 更好的植物盆栽
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

  //末影百合种子
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

  //末影百合种子 更好的植物盆栽
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

  //紫颂果
  event.custom({
    type: "botanypots:crop",
    seed: { item: "minecraft:chorus_flower" },
    categories: ["dirt"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "minecraft:chorus_flower",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:chorus_fruit" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:chorus_flower" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });

  //紫颂果 更好的植物盆栽
  event.custom({
    type: "botanypotstiers:crop",
    seed: { item: "minecraft:chorus_flower" },
    categories: ["dirt"],
    growthTicks: 1200,
    display: {
      type: "botanypotstiers:aging",
      block: "minecraft:chorus_flower",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:chorus_fruit" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:chorus_flower" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });

  //向日葵
  event.custom({
    type: "botanypots:crop",
    seed: { item: "minecraft:sunflower" },
    categories: ["dirt"],
    growthTicks: 1200,
    display: {
      type: "botanypots:aging",
      block: "minecraft:sunflower",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:sunflower" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:sunflower" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });

  //向日葵 更好的植物盆栽
  event.custom({
    type: "botanypotstiers:crop",
    seed: { item: "minecraft:sunflower" },
    categories: ["dirt"],
    growthTicks: 1200,
    display: {
      type: "botanypotstiers:aging",
      block: "minecraft:sunflower",
    },
    drops: [
      {
        chance: 1.0,
        output: { item: "minecraft:sunflower" },
        minRolls: 1,
        maxRolls: 2,
      },
      {
        chance: 0.15,
        output: { item: "minecraft:sunflower" },
        minRolls: 1,
        maxRolls: 2,
      },
    ],
  });
});
