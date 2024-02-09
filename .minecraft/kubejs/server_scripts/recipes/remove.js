// priority: 1

onEvent('recipes', event => {
	event.remove({ type: "occultism:miner" })
	event.remove({ type: 'botania:runic_altar' })
	event.remove({ type: 'industrialforegoing:laser_drill_ore' })
	event.remove({ type: 'extendedexchange:alchemy_table' })
	event.remove({ input: 'immersiveengineering:hammer' })
	event.remove({ input: 'projecte:philosophers_stone' })
	event.remove({ output: 'occultism:iesnium_ingot' })
	event.remove({ mod: 'fissionrecipe' })
	event.remove({ output: 'assemblylinemachines:pure_copper_ingot' })
	event.remove({ output: 'assemblylinemachines:pure_iron_ingot' })
	event.remove({ output: 'assemblylinemachines:pure_gold_ingot' })
	event.remove({ type: 'assemblylinemachines:alloying' })
	event.remove({ type: 'assemblylinemachines:bathing' })
	event.remove({ type: 'assemblylinemachines:enchantment_book' })
	event.remove({ type: 'assemblylinemachines:fertilizer' })
	event.remove({ type: 'assemblylinemachines:fig' })
	event.remove({ type: 'assemblylinemachines:generator_fluid' })
	event.remove({ type: 'assemblylinemachines:greenhouse' })
	event.remove({ type: 'assemblylinemachines:grinding' })
	event.remove({ type: 'assemblylinemachines:lumber' })
	event.remove({ type: 'assemblylinemachines:pneumatic' })
	event.remove({ type: 'assemblylinemachines:purifying' })
	event.remove({ type: 'assemblylinemachines:refining' })

	let RecipesToRemoveID = [
		'minecraft:bucket',
		'occultism:crafting/storage_controller',
		'occultism:ritual/craft_storage_remote',
		'occultism:ritual/craft_stable_wormhole',
		'torchmaster:megatorch',
		'naturesaura:tree_ritual/nature_altar',
		'botania:ender_dagger',
		'naturesaura:tree_ritual/conversion_catalyst',
		'naturesaura:offering/token_euphoria',
		'compactcrafting:projector_dish',
		'compactcrafting:base',
		'compactcrafting:field_projector',
		'naturesaura:animal_spawner',
		'naturesaura:animal_spawner/blaze',
		'cobblefordays:tier_1',
		'miniutilities:mechanical_miner',
		'naturesaura:tree_ritual/ancient_sapling',
		'naturesaura:offering_table',
		'naturesaura:calling_spirit',
		'naturesaura:altar/tainted_gold',
		'naturesaura:altar/infused_iron',
		'naturesaura:tree_ritual/token_joy',
		'naturesaura:pet_reviver',
		'naturesaura:death_ring',
		'miniutilities:feather_angel_ring',
		'naturesaura:animal_spawner/wither_skeleton',
		'naturesaura:animal_spawner/ghast',
		'naturesaura:fortress_finder',
		'naturesaura:tree_ritual/token_anger',
		'naturesaura:gold_fiber',
		'tconstruct:smeltery/casting/seared/smeltery_controller',
		'tconstruct:smeltery/alloys/molten_queens_slime',
		'tconstruct:compat/create/andesite_alloy_iron',
		'tconstruct:compat/create/andesite_alloy_zinc',
		'create:crafting/materials/andesite_alloy',
		'create:crafting/materials/andesite_alloy_from_zinc',
		'create:crafting/kinetics/mechanical_saw',
		'create:crafting/kinetics/mechanical_press',
		'create:crafting/kinetics/mechanical_mixer',
		'create:crafting/kinetics/mechanical_press',
		'create:crafting/kinetics/deployer',
		'create:crafting/kinetics/mechanical_crafter',
		'create:crafting/kinetics/encased_fan',
		'create:sequenced_assembly/precision_mechanism',
		'immersiveengineering:crafting/cokebrick',
		'architects_palette:algal_blend',
		'architects_palette:nether_brass_blend',
		'immersiveengineering:crafting/blastbrick',
		'create:filling/blaze_cake',
		'immersiveengineering:cokeoven/coke',
		'immersiveengineering:blastfurnace/steel',
		'immersiveengineering:cokeoven/coke_block',
		'create:crafting/kinetics/speedometer',
		'enderstorage:ender_tank',
		'enderstorage:ender_chest',
		'create:crafting/materials/sand_paper',
		'create:crafting/materials/rose_quartz',
		'immersiveengineering:crafting/rs_engineering',
		'immersiveengineering:crafting/light_engineering',
		'immersiveengineering:crafting/heavy_engineering',
		'immersiveengineering:crafting/radiator',
		'immersiveengineering:crafting/generator',
		'immersiveengineering:crafting/thermoelectric_generator',
		'immersiveengineering:crafting/dynamo',
		'ae2:network/blocks/energy_vibration_chamber',
		'naturesaura:rf_converter',
		'thermal:dynamo_stirling',
		'thermal:dynamo_compression',
		'thermal:dynamo_numismatic',
		'thermal:dynamo_lapidary',
		'thermal:dynamo_disenchantment',
		'thermal:dynamo_gourmand',
		'industrialforegoing:pitiful_generator',
		'industrialforegoing:biofuel_generator',
		'industrialforegoing:mycelial_furnace',
		'industrialforegoing:mycelial_slimey',
		'industrialforegoing:mycelial_potion',
		'industrialforegoing:mycelial_culinary',
		'industrialforegoing:mycelial_disenchantment',
		'industrialforegoing:mycelial_ender',
		'industrialforegoing:mycelial_explosive',
		'industrialforegoing:mycelial_meatallurgic',
		'industrialforegoing:mycelial_crimed',
		'industrialforegoing:mycelial_rocket',
		'industrialforegoing:mycelial_death',
		'industrialforegoing:mycelial_pink',
		'industrialforegoing:mycelial_netherstar',
		'industrialforegoing:mycelial_magma',
		'industrialforegoing:mycelial_halitosis',
		'industrialforegoing:mycelial_frosty',
		'thermal:machine_frame',
		'projecte:dark_matter',
		'thermal:fire_charge/obsidian_glass_2',
		'thermal:fire_charge/lumium_ingot_4',
		'thermal:lumium_dust_4',
		'thermal:fire_charge/invar_ingot_3',
		'thermal:invar_dust_3',
		'thermal:fire_charge/constantan_ingot_2',
		'immersiveengineering:crafting/constantan_mix',
		'thermal:fire_charge/signalum_ingot_4',
		'thermal:signalum_dust_4',
		'thermal:fire_charge/lumium_ingot_4',
		'thermal:lumium_dust_4',
		'thermal:fire_charge/enderium_ingot_2',
		'thermal:enderium_dust_2',
		'thermal_extra:soul_infused_dust',
		'thermal_extra:shellite_dust',
		'thermal_extra:twinite_dust',
		'thermal_extra:dragonsteel_dust',
		'thermal:machines/smelter/smelter_alloy_lumium',
		'thermal:machines/smelter/smelter_alloy_signalum',
		'thermal:bronze_dust_4',
		'thermal:fire_charge/bronze_ingot_4',
		'thermal:fire_charge/electrum_ingot_2',
		'immersiveengineering:crafting/electrum_mix',
		'tconstruct:smeltery/alloys/molten_lumium',
		'tconstruct:smeltery/alloys/molten_signalum',
		'tconstruct:smeltery/alloys/molten_enderium',
		'thermal:machines/smelter/smelter_alloy_enderium',
		'thermal_extra:machine/smelter/twinite_ingot',
		'thermal_extra:machine/smelter/soul_infused_ingot',
		'thermal_extra:machine/smelter/shellite_ingot',
		'pipez:item_pipe',
		'pipez:fluid_pipe',
		'pipez:energy_pipe',
		'immersiveengineering:blastfurnace/steel_block',
		'spirit:soul_engulfing/soul_steel',
		'naturesaura:animal_spawner/shulker',
		'architects_palette:oracle_jelly',
		'thermal:machines/pyrolyzer/pyrolyzer_coal',
		'thermal:storage/coal_coke_from_block',
		'thermal:machines/pyrolyzer/pyrolyzer_logs',
		'extendedcrafting:compressor',
		'ae2:network/blocks/crystal_processing_charger',
		'immersiveengineering:crafting/redstone_acid',
		'ae2:network/blocks/inscribers',
		'extendedcrafting:black_iron_ingot',
		'ae2:inscriber/silicon_press',
		'ae2:inscriber/logic_processor_press',
		'ae2:inscriber/engineering_processor_press',
		'ae2:inscriber/calculation_processor_press',
		'occultism:spirit_fire/otherworld_ashes',
		'occultism:smelting/burnt_otherstone',
		'minecraft:black_dye_from_wither_rose',
		'minecraft:black_dye',
		'occultism:crafting/candle',
		'hostilenetworks:sim_chamber',
		'minecraft:candle',
		'occultism:ritual/craft_dimensional_matrix',
		'tiab:time_in_a_bottle',
		'naturesaura:offering/clock_hand',
		'projecte:philosophers_stone',
		'projecte:philosophers_stone_alt',
		'tconstruct:smeltery/seared/drain_retextured',
		'naturesaura:altar/coal',
		'constructionwand:infinity_wand',
		'naturesaura:altar/infused_stone',
		'malum:coal_fragment',
		'naturesaura:offering/token_rage',
		'farmingforblockheads:market',
		'naturesaura:animal_generator',
		'thermal:rubber_from_vine',
		'thermal:rubber_from_dandelion',
		'fluxnetworks:fluxcore',
		'extendedcrafting:luminessence',
		'botania:pure_daisy/livingwood',
		'botania:pure_daisy/livingrock',
		'occultism:ritual/craft_miner_foliot_unspecialized',
		'hostilenetworks:matrix',
		'botania:mana_infusion/mana_diamond',
		'botania:mana_infusion/mana_pearl',
		'botania:mana_infusion/mana_diamond_block',
		'occultism:ritual/craft_dimensional_mineshaft',
		'occultism:crafting/chalk_purple_impure',
		'manaliquidizer:mana_liquidizer',
		'industrialforegoing:machine_frame_pity',
		'tconstruct:smeltery/entity_melting/blaze',
		'tconstruct:smeltery/entity_melting/heads/blaze',
		'industrialforegoing:fluid_extractor',
		'industrialforegoing:latex_processing_unit',
		'immersiveengineering:blueprint/component_electronic',
		'immersiveengineering:blueprint/component_electronic_adv',
		'immersiveengineering:blueprint/electron_tube',
		'immersiveengineering:blueprint/circuit_board',
		'immersiveengineering:crafting/plate_iron_hammering',
		'immersiveengineering:crafting/plate_silver_hammering',
		'immersiveengineering:crafting/plate_aluminum_hammering',
		'immersiveengineering:crafting/plate_gold_hammering',
		'immersiveengineering:crafting/plate_steel_hammering',
		'immersiveengineering:crafting/plate_electrum_hammering',
		'immersiveengineering:crafting/plate_uranium_hammering',
		'immersiveengineering:crafting/plate_copper_hammering',
		'immersiveengineering:crafting/plate_nickel_hammering',
		'immersiveengineering:crafting/plate_lead_hammering',
		'immersiveengineering:crafting/plate_constantan_hammering',
		'ae2:network/blocks/io_condenser',
		'immersiveengineering:alloysmelter/insulating_glass',
		'immersiveengineering:alloysmelter/rose_gold',
		'immersiveengineering:alloysmelter/invar',
		'immersiveengineering:alloysmelter/constantan',
		'immersiveengineering:alloysmelter/electrum',
		'immersiveengineering:alloysmelter/bronze',
		'immersiveengineering:crafting/alloybrick',
		'mekanism:steel_casing',
		'thermal_extra:machine/smelter/dragonsteel_ingot',
		'hostilenetworks:living_matter/overworld_to_nether',
		'hostilenetworks:living_matter/nether_to_ender',
		'occultism:ritual/possess_endermite',
		'architects_palette:unobtanium',
		'architects_palette:unobtanium_block',
		'miniutilities:solar_panel',
		'miniutilities:lunar_panel',
		'miniutilities:solar_panel_controller',
		'hostilenetworks:framework',
		'projecte:transmutation_tablet',
		'projecte:transmutation_table',
		'extendedexchange:arcane_tablet',
		'torcherino:torcherino',
		'mekanism:processing/fissile_fuel',
		'mekanism:processing/lategame/antimatter_pellet/from_gas',
		'mekanism:processing/lategame/antimatter/from_pellet',
		'mekanism:processing/uranium/fissile_fuel',
		'mekanism:processing/uranium/reprocessing/to_fuel',
		'mekanism:processing/lategame/polonium_pellet/from_reaction',
		'architects_palette:warping/unobtanium_from_netherite_ingot_warping',
		'mekanism:metallurgic_infusing/alloy/atomic',
		'immersiveengineering:crafting/circuit_table',
		'industrialforegoing:mob_slaughter_factory',
		'botania:runic_altar/head',
		'thermal:rf_coil',
		'thermal:redstone_servo',
		'immersiveengineering:crafting/blueprint_components',
		'immersiveengineering:crafting/blueprint_molds',
		'immersiveengineering:crafting/blueprint_bannerpatterns',
		'industrialforegoing:dissolution_chamber/pink_slime_ingot',
		'projecte:gem_of_eternal_density',
		'projecte:watch_of_flowing_time',
		'projecte:void_ring',
		'industrialforegoing:dissolution_chamber/simple_machine_frame',
		'industrialforegoing:dissolution_chamber',
		'industrialforegoing:dissolution_chamber/advanced_machine_frame',
		'botania:gaia_ingot',
		'industrialforegoing:laser_drill_fluid/ether_gas',
		'thermal:machine_furnace',
		'thermal:machine_sawmill',
		'thermal:machine_pulverizer',
		'thermal:machine_smelter',
		'thermal:machine_insolator',
		'thermal:machine_centrifuge',
		'thermal:machine_press',
		'thermal:machine_crucible',
		'thermal:machine_chiller',
		'thermal:machine_refinery',
		'thermal:machine_pyrolyzer',
		'thermal:machine_bottler',
		'thermal:machine_brewer',
		'thermal:machine_crystallizer',
		'thermal:machine_crafter',
		'mekanism:electrolytic_separator',
		'mekanism:control_circuit/basic',
		'industrialforegoing:dissolution_chamber/supreme_machine_frame',
		'mekanism:combiner',
		'assemblylinemachines:crafting/microprocessor',
		'mekanism:metallurgic_infuser',
		'mekanism:injecting/gunpowder_to_sulfur',
		'thermal:machines/refinery/refinery_light_oil',
		'thermal:machines/pulverizer/pulverizer_sulfur',
		'occultism:crushing/sulfur_dust',
		'immersiveengineering:crusher/ore_quartz',
		'immersiveengineering:crusher/blaze_powder',
		'immersiveengineering:crusher/ore_lapis',
		'immersiveengineering:crusher/ore_coal',
		'thermal:earth_charge/sulfur_dust_from_sulfur',
		'mekanism:processing/copper/crystal/from_slurry',
		'mekanism:processing/gold/crystal/from_slurry',
		'mekanism:processing/iron/crystal/from_slurry',
		'hostilenetworks:loot_fabricator',
		'extendedcrafting:redstone_ingot',
		'miniutilities:speed_upgrade',
		'miniutilities:golden_lasso',
		'bettermuffling:muffling_block',
		'bettermuffling:muffling_block_advanced',
		'mekanism:chemical_infuser',
		'mekanism:rotary_condensentrator',
		'mekanism:osmium_compressor',
		'mekanism:chemical_dissolution_chamber',
		'mekanism:chemical_washer',
		'mekanism:chemical_crystallizer',
		'mekanism:energized_smelter',
		'mekanism:enrichment_chamber',
		'mekanism:crusher',
		'industrialforegoing:iron_gear',
		'thermal:parts/iron_gear',
		'industrialforegoing:gold_gear',
		'thermal:parts/gold_gear',
		'thermal:parts/copper_gear',
		'thermal:parts/netherite_gear',
		'thermal:parts/lapis_gear',
		'industrialforegoing:diamond_gear',
		'thermal:parts/diamond_gear',
		'thermal:parts/emerald_gear',
		'thermal:parts/quartz_gear',
		'thermal:parts/tin_gear',
		'thermal:parts/lead_gear',
		'thermal:parts/silver_gear',
		'thermal:parts/nickel_gear',
		'thermal:parts/bronze_gear',
		'thermal:parts/electrum_gear',
		'thermal:parts/invar_gear',
		'thermal:parts/constantan_gear',
		'thermal:parts/signalum_gear',
		'thermal:parts/lumium_gear',
		'thermal:parts/enderium_gear',
		'thermal_extra:parts/soul_infused_gear',
		'thermal_extra:parts/shellite_gear',
		'thermal_extra:parts/twinite_gear',
		'thermal_extra:parts/dragonsteel_gear',
		'assemblylinemachines:crafting/overclocked_conduction_component',
		'assemblylinemachines:crafting/overclocked_convection_component',
		'assemblylinemachines:crafting/convection_component',
		'assemblylinemachines:crafting/conduction_component',
		'assemblylinemachines:blasting/silt/silt_titanium',
		'assemblylinemachines:smelting/silt/silt_titanium',
		'assemblylinemachines:alloying/energized_gold',
		'assemblylinemachines:purifying/purify_attuned_titanium',
		'assemblylinemachines:purifying/purify_titanium',
		'mekaevolution:absolute_control_circuit',
		'mekanism:thermal_evaporation/block',
		'mekanism:solar_neutron_activator',
		'tconstruct:common/slime/earth/crystal_growing',
		'tconstruct:common/slime/ichor/crystal_growing',
		'tconstruct:common/slime/sky/crystal_growing',
		'tconstruct:common/slime/ender/crystal_growing',
		'projecte:collector_mk1',
		'projecte:collector_mk2',
		'projecte:collector_mk3',
		'create:compacting/blaze_cake',
		'mekaevolution:cosmic_control_circuit',
		'mekaevolution:supreme_control_circuit',
		'assemblylinemachines:crafting/energy_harness',
		'assemblylinemachines:crafting/entropy_reactor_core',
		'assemblylinemachines:crafting/entropy_reactor_block',
		'assemblylinemachines:crafting/upgrades/entropy_reactor_upgrade_capacity',
		'assemblylinemachines:crafting/upgrades/entropy_reactor_upgrade_cycle_delayer',
		'assemblylinemachines:crafting/upgrades/entropy_reactor_upgrade_variety',
		'assemblylinemachines:crafting/upgrades/entropy_reactor_upgrade_entropic_harnesser',
		'extendedexchange:matter_h/fading',
		'extendedexchange:matter_v/fading',
		'mekaevolution:infinite_control_circuit',
		'mekanism:painting_machine',
		'mekanism:pigment_mixer',
		'mekanism:pigment_extractor',
		'extendedexchange:final_star',
		'extendedexchange:matter_h/magenta',
		'extendedexchange:matter_v/magenta',
		'extendedexchange:matter_v/pink',
		'extendedexchange:matter_h/pink',
		'extendedexchange:matter_h/purple',
		'extendedexchange:matter_v/purple',
		'extendedexchange:matter_v/violet',
		'extendedexchange:matter_h/violet',
		'extendedexchange:matter_v/blue',
		'extendedexchange:matter_h/blue',
		'extendedexchange:matter_h/cyan',
		'extendedexchange:matter_v/cyan',
		'extendedexchange:matter_h/green',
		'extendedexchange:matter_v/green',
		'extendedexchange:matter_v/lime',
		'extendedexchange:matter_h/lime',
		'extendedexchange:matter_v/yellow',
		'extendedexchange:matter_h/yellow',
		'extendedexchange:matter_v/orange',
		'extendedexchange:matter_h/orange',
		'extendedexchange:matter_h/white',
		'extendedexchange:matter_v/white',
		'extendedcrafting:ultimate_singularity',
		'thermal:press_coin_die',
		'tconstruct:smeltery/casts/gold_casts/coins',
		'tconstruct:smeltery/casts/sand_casts/coins',
		'tconstruct:smeltery/casts/red_sand_casts/coins',
		'tconstruct:smeltery/melting/metal/gold/coin',
		'tconstruct:smeltery/melting/metal/iron/coin',
		'tconstruct:smeltery/melting/metal/netherite/coin',
		'tconstruct:smeltery/melting/metal/copper/coin',
		'tconstruct:smeltery/seared/chute_retextured',
		'create:crushing/prismarine_crystals',
		'projecte:condenser_mk1',
		'projecte:condenser_mk2',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	]
	RecipesToRemoveID.forEach(recipe => {
		event.remove({ id: recipe })
	});
})