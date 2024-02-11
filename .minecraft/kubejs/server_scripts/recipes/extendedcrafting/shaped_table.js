/** @format */

onEvent("recipes", (event) => {
  const id_prefix = "kubejs:recipes/extendedcrafting/shaped_table/";
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABCDEFG",
        "HIJKLMN",
        "OPQRSTU",
        "VWXYZab",
        "cdefghi",
        "j      ",
        "       ",
      ],
      key: {
        A: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:thermal/blitz"}}',
        },
        B: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:skeleton"}}',
        },
        C: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:magma_cube"}}',
        },
        D: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:zombified_piglin"}}',
        },
        E: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:sheep"}}',
        },
        F: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:witch"}}',
        },
        G: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:wither_skeleton"}}',
        },
        H: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:elder_guardian"}}',
        },
        I: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:hoglin"}}',
        },
        J: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:evoker"}}',
        },
        K: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:squid"}}',
        },
        L: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:enderman"}}',
        },
        M: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:wither"}}',
        },
        N: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:ghast"}}',
        },
        O: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:iron_golem"}}',
        },
        P: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:shulker"}}',
        },
        Q: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:phantom"}}',
        },
        R: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:mooshroom"}}',
        },
        S: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:spider"}}',
        },
        T: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:cod"}}',
        },
        U: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:creeper"}}',
        },
        V: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:guardian"}}',
        },
        W: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:snow_golem"}}',
        },
        X: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:pig"}}',
        },
        Y: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:vindicator"}}',
        },
        Z: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:glow_squid"}}',
        },
        a: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:blaze"}}',
        },
        b: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:ender_dragon"}}',
        },
        c: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:chicken"}}',
        },
        d: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:rabbit"}}',
        },
        e: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:drowned"}}',
        },
        f: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:thermal/basalz"}}',
        },
        g: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:cow"}}',
        },
        h: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:zombie"}}',
        },
        i: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:slime"}}',
        },
        j: {
          type: "forge:nbt",
          item: "hostilenetworks:prediction",
          count: 1,
          nbt: '{data_model:{id:"hostilenetworks:thermal/blizz"}}',
        },
      },
      result: {
        item: "hostilenetworks:empty_prediction",
      },
    })
    .id(`${id_prefix}empty_prediction`);

  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABBBBBBBA",
        "BCDEFEDCB",
        "BDGHIHJDB",
        "BEHKLMHEB",
        "BFNOPQRFB",
        "BEHSTUHEB",
        "BDVHWHXDB",
        "BCDEFEDCB",
        "ABBBBBBBA",
      ],
      key: {
        A: {
          item: "assemblylinemachines:novasteel_gear",
        },
        B: {
          item: "assemblylinemachines:novasteel_plate",
        },
        C: {
          item: "assemblylinemachines:mystium_gear",
        },
        D: {
          item: "assemblylinemachines:mystium_plate",
        },
        E: {
          item: "mekaevolution:infinite_control_circuit",
        },
        F: {
          item: "mekaevolution:qio_drive_infinite",
        },
        G: {
          item: "thermal:machine_catalyst_creative_augment",
        },
        H: {
          type: "forge:nbt",
          item: "extendedcrafting:singularity",
          count: 1,
          nbt: '{Id:"extendedcrafting:antimatter"}',
        },
        I: {
          item: "functionalstorage:creative_vending_upgrade",
        },
        J: {
          item: "thermal:machine_efficiency_creative_augment",
        },
        K: {
          item: "create:creative_motor",
        },
        L: {
          item: "extendedcrafting:ultimate_singularity",
        },
        M: {
          type: "forge:nbt",
          item: "mekanism:creative_energy_cube",
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}',
        },
        N: {
          item: "botania:creative_pool",
        },
        O: {
          item: "miniutilities:the_final_opinium_core",
        },
        P: {
          item: "architects_palette:unobtanium",
        },
        Q: {
          item: "extendedexchange:final_star",
        },
        R: {
          type: "forge:nbt",
          item: "botania:mana_tablet",
          count: 1,
          nbt: "{creative:1b,mana:500000}",
        },
        S: {
          item: "mekanism:creative_fluid_tank",
        },
        T: {
          item: "assemblylinemachines:creative_upgrade_kit",
        },
        U: {
          item: "mekanism:creative_chemical_tank",
        },
        V: {
          item: "thermal:fluid_tank_creative_augment",
        },
        W: {
          item: "botanypotstiers:creative_terracotta_botany_pot",
        },
        X: {
          item: "thermal:rf_coil_creative_augment",
        },
      },
      result: {
        item: "ae2:creative_item_cell",
      },
    })
    .id(`${id_prefix}creative_item_cell`);
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "AAAAAAAAA",
        "AAABBBAAA",
        "AABAAABAA",
        "AABAAAAAA",
        "AABAAAAAA",
        "AABAAAAAA",
        "AABAAABAA",
        "AAABBBAAA",
        "AAAAAAAAA",
      ],
      key: {
        A: {
          item: "extendedcrafting:the_ultimate_ingot",
        },
        B: {
          item: "extendedexchange:final_star",
        },
      },
      result: {
        item: "functionalstorage:creative_vending_upgrade",
      },
    })
    .id(`${id_prefix}creative_vending_upgrade`);
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABBBBBBBA",
        "BCDDEDDCB",
        "BDFGGGFDB",
        "BDGHIHGDB",
        "BEGIJIGEB",
        "BDGHIHGDB",
        "BDFGGGFDB",
        "BCDDEDDCB",
        "ABBBBBBBA",
      ],
      key: {
        A: {
          item: "assemblylinemachines:novasteel_gear",
        },
        B: {
          item: "assemblylinemachines:novasteel_plate",
        },
        C: {
          item: "assemblylinemachines:mystium_gear",
        },
        D: {
          item: "assemblylinemachines:mystium_plate",
        },
        E: {
          item: "mekaevolution:infinite_control_circuit",
        },
        F: {
          item: "ae2:fluid_storage_cell_256k",
        },
        G: {
          item: "assemblylinemachines:miniature_black_hole",
        },
        H: {
          item: "assemblylinemachines:reality_crystal",
        },
        I: {
          item: "assemblylinemachines:internal_water_generator",
        },
        J: {
          item: "miniutilities:unstable_drum",
        },
      },
      result: {
        item: "mekanism:creative_fluid_tank",
      },
    })
    .id(`${id_prefix}creative_fluid_tank`);
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABBBBBBBA",
        "BCDEEEDCB",
        "BDEFFFEDB",
        "BDEGHIJDB",
        "BDEGKILDB",
        "BDEGMINDB",
        "BDEFFFEDB",
        "BCDEEEDCB",
        "ABBBBBBBA",
      ],
      key: {
        A: {
          item: "assemblylinemachines:novasteel_gear",
        },
        B: {
          item: "assemblylinemachines:novasteel_plate",
        },
        C: {
          item: "assemblylinemachines:mystium_gear",
        },
        D: {
          item: "assemblylinemachines:mystium_plate",
        },
        E: {
          item: "extendedexchange:final_star",
        },
        F: {
          item: "functionalstorage:copper_upgrade",
        },
        G: {
          item: "functionalstorage:diamond_upgrade",
        },
        H: {
          item: "functionalstorage:void_upgrade",
        },
        I: {
          item: "functionalstorage:netherite_upgrade",
        },
        J: {
          type: "forge:nbt",
          item: "functionalstorage:puller_upgrade",
          count: 1,
          nbt: '{Direction:"down"}',
        },
        K: {
          item: "extendedcrafting:ultimate_singularity",
        },
        L: {
          type: "forge:nbt",
          item: "functionalstorage:collector_upgrade",
          count: 1,
          nbt: '{Direction:"down"}',
        },
        M: {
          type: "forge:nbt",
          item: "functionalstorage:redstone_upgrade",
          count: 1,
          nbt: "{Slot:0}",
        },
        N: {
          type: "forge:nbt",
          item: "functionalstorage:pusher_upgrade",
          count: 1,
          nbt: '{Direction:"down"}',
        },
      },
      result: {
        item: "functionalstorage:creative_vending_upgrade",
      },
    })
    .id(`${id_prefix}creative_vending_upgrade`);
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABBBBBBBA",
        "BCDDEDDCB",
        "BDFGGGFDB",
        "BDGHHHGDB",
        "BEGHHHGEB",
        "BDGHHHGDB",
        "BDFGGGFDB",
        "BCDDEDDCB",
        "ABBBBBBBA",
      ],
      key: {
        A: {
          item: "assemblylinemachines:novasteel_gear",
        },
        B: {
          item: "assemblylinemachines:novasteel_plate",
        },
        C: {
          item: "assemblylinemachines:mystium_gear",
        },
        D: {
          item: "assemblylinemachines:mystium_plate",
        },
        E: {
          item: "mekaevolution:infinite_control_circuit",
        },
        F: {
          item: "assemblylinemachines:reality_crystal",
        },
        G: {
          item: "assemblylinemachines:miniature_black_hole",
        },
        H: Item.of(
          "mekanism:ultimate_chemical_tank",
          '{mekData:{GasTanks:[{Tank:0b,stored:{amount:8192000L,gasName:"mekanism:steam"}}],InfusionTanks:[],Items:[],PigmentTanks:[],SlurryTanks:[]}}'
        ).weakNBT(),
      },
      result: {
        item: "mekanism:creative_chemical_tank",
      },
    })
    .id(`${id_prefix}creative_chemical_tank`);
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABBBBBBBA",
        "BCDDEDDCB",
        "BDFGGGFDB",
        "BDGHHHGDB",
        "BEGHHHGEB",
        "BDGHHHGDB",
        "BDFGGGFDB",
        "BCDDEDDCB",
        "ABBBBBBBA",
      ],
      key: {
        A: {
          item: "assemblylinemachines:novasteel_gear",
        },
        B: {
          item: "assemblylinemachines:novasteel_plate",
        },
        C: {
          item: "assemblylinemachines:mystium_gear",
        },
        D: {
          item: "assemblylinemachines:mystium_plate",
        },
        E: {
          item: "mekaevolution:infinite_control_circuit",
        },
        F: {
          item: "assemblylinemachines:reality_crystal",
        },
        G: {
          item: "assemblylinemachines:miniature_black_hole",
        },
        H: {
          type: "forge:nbt",
          item: "mekanism:ultimate_energy_cube",
          count: 1,
          nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"256000000"}]}}',
        },
      },
      result: Item.of(
        "mekanism:creative_energy_cube",
        '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}]}}'
      ),
    })
    .id(`${id_prefix}creative_energy_cube`);
  event
    .custom({
      type: "extendedcrafting:shaped_table",
      pattern: [
        "ABBBBBBBA",
        "BCDDDDDCB",
        "BD     DB",
        "BD     DB",
        "BD     DB",
        "BD     DB",
        "BD     DB",
        "BCDDDDDCB",
        "ABBBBBBBA",
      ],
      key: {
        A: {
          item: "assemblylinemachines:novasteel_gear",
        },
        B: {
          item: "assemblylinemachines:novasteel_plate",
        },
        C: {
          item: "assemblylinemachines:mystium_gear",
        },
        D: {
          item: "assemblylinemachines:mystium_plate",
        },
      },
      result: {
        item: "assemblylinemachines:creative_upgrade_kit",
      },
    })
    .id(`${id_prefix}creative_energy_cube`);
});
