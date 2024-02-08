// priority: 0

onEvent('item.tooltip', tooltip => {
	tooltip.add('kubejs:undef1ned', Text.green('可以通过合成复制'))
	tooltip.add('minecraft:oak_sapling', Text.green('按住 [w] 开始思索'))
	tooltip.add('naturesaura:ancient_sapling', Text.green('可用于恢复灵气，详情见自然灵气之书'))
	tooltip.add(['naturesaura:infused_stone', 'naturesaura:infused_iron', 'kubejs:infused_coal', 'naturesaura:ancient_sapling', 'naturesaura:tainted_gold'], Text.green('灌注不消耗灵气'))
	tooltip.add('naturesaura:birth_spirit', Text.green('右键灵魂匕首获得'))
	tooltip.add(['naturesaura:fortress_finder', 'kubejs:wither_skeleton_eye', 'kubejs:ghast_eye'], Text.green('使用灵魂匕首击杀对应的生物获得'))
	tooltip.add('farmingforblockheads:market', Text.green('将凡俗解脱之物扔进下界的岩浆获得'))
	tooltip.add('assemblylinemachines:corrupted_shard', Text.green('将任意物品扔进浓缩虚空'))
	tooltip.add('multiblocked:pedestal', Text.red('破坏基座后不会保留物品！').bold())
	tooltip.add('miniutilities:speed_upgrade', Text.green('右键安装，Shift+右键取出'))
	tooltip.add('naturesaura:animal_spawner', Text.green('不要将材料堆叠！一次只能召唤一个生物'))
	tooltip.add('naturesaura:gold_fiber', Text.green('将黄金叶使用铁砧压碎'))
	tooltip.add('naturesaura:token_anger', Text.green('将愉悦印记扔进火里'))
	tooltip.add('kubejs:nether_eye', Text.green('将3个眼睛扔进火里'))
	tooltip.add([Item.of('immersiveengineering:metal_press').enchant('minecraft:vanishing_curse', 100), Item.of('thermal:machine_press').enchant('minecraft:vanishing_curse', 100)], [Text.red('这是一个假的序列合成'), Text.green('请查看红石通量线圈（未完成）的合成表'), Text.green('请查看红石伺服器（未完成）的合成表')])
	// tooltip.add(Item.of('minecraft:enchanted_book').enchant('miniutilities:molten_head', 1), Text.green('不兼容时运附魔'))
	// tooltip.add('occultism:storage_controller', [Text.red('警告：不要将大量物品传入维度存储！').bold(), Text.green('不建议当成抽屉使用')])
	tooltip.add(['assemblylinemachines:entropy_reactor_block', 'assemblylinemachines:entropy_reactor_core'], Text.red('非常危险！不建议放置在基地中！').bold())
})

onEvent('jei.remove.recipes', event => {
	
	event.remove('create:sequenced_assembly', 'kubejs:recipes/create/sequenced_assembly/queens_slime_ingot') 
	event.remove('create:sequenced_assembly', 'kubejs:recipes/create/sequenced_assembly/tainted_blend')
	event.remove('create:sequenced_assembly', 'kubejs:def1ned')
	event.remove('create:crushing', 'kubejs:recipes/create/create/tainted_blend1')
	event.remove('create:deploying', 'kubejs:recipes/create/create/tainted_blend3_using_deployer')
	event.remove('create:draining', 'create:empty_mekanism_creative_fluid_tank_of_kubejs_mana')
	event.remove('create:draining', 'create:empty_mekanism_creative_fluid_tank_of_manaliquidizer_mana_fluid')
	event.remove('create:draining', 'create:empty_manaliquidizer_mana_fluid_bucket_of_manaliquidizer_mana_fluid')
	event.remove('immersiveengineering:arcfurnace_recycling', 'immersiveengineering:recycling/pure_copper_plate')
	event.remove('immersiveengineering:arcfurnace_recycling', 'immersiveengineering:recycling/pure_copper_gear')
	event.remove('immersiveengineering:arcfurnace_recycling', 'immersiveengineering:recycling/pure_iron_gear')
	event.remove('immersiveengineering:arcfurnace_recycling', 'immersiveengineering:recycling/pure_iron_plate')
	event.remove('immersiveengineering:arcfurnace_recycling', 'immersiveengineering:recycling/pure_gold_plate')
	event.remove('immersiveengineering:arcfurnace_recycling', 'immersiveengineering:recycling/pure_gold_gear')
	event.remove('lychee:item_burning', 'lychee:kubejs/recipes/lychee/burning/token_anger')
	event.remove('lychee:block_crushing', 'lychee:kjs_1h7x9a75c5ovchfib89d3wsqx')
	event.remove('lychee:item_inside', 'lychee:kubejs/recipes/lychee/market_ghost')
	event.remove('lychee:item_inside', 'lychee:kubejs/recipes/lychee/nether_portal/nether_eye_ghost')
	event.remove('lychee:item_inside', 'lychee:kubejs/recipes/lychee/undef1ned_fluid')
})
onEvent('jei.remove.categories', event => {
	console.log(event.getCategoryIds())
	event.remove([
		'create:automatic_shaped', 
		'create:automatic_shapeless', 
		'jeresources:dungeon', 
		'jeresources:enchantment', 
		'jeresources:worldgen',
		'hostilenetworks:sim_chamber',
		'projecte:world_transmutation',
		'projecte:collector',
		'assemblylinemachines:alloying',
		'assemblylinemachines:bathing',
		'assemblylinemachines:enchantment_book',
		'assemblylinemachines:fertilizer',
		'assemblylinemachines:fig',
		'assemblylinemachines:generator_fluid',
		'assemblylinemachines:greenhouse',
		'assemblylinemachines:grinding',
		'assemblylinemachines:lumber',
		'assemblylinemachines:pneumatic',
		'assemblylinemachines:purifying',
		'assemblylinemachines:refining'
	])
})

onEvent('jei.hide.items', event => {
	event.hide([
		'ae2:vibration_chamber',
		'naturesaura:rf_converter',
		'immersiveengineering:thermoelectric_generator',
		'immersiveengineering:dynamo',
		'thermal:dynamo_gourmand',
		'thermal:dynamo_disenchantment',
		'thermal:dynamo_lapidary',
		'thermal:dynamo_numismatic',
		'thermal:dynamo_magmatic',
		'thermal:dynamo_compression',
		'thermal:dynamo_stirling',
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
		'hostilenetworks:sim_chamber',
		'immersiveengineering:circuit_table',
		'industrialforegoing:mob_slaughter_factory',
		'projecte:watch_of_flowing_time',
		Item.of('minecraft:enchanted_book').enchant('miniutilities:molten_head', 1),
		'miniutilities:golden_lasso',
		'kubejs:def1ned'

	])

onEvent('jei.add.items', event => {
	event.add('create:chromatic_compound');
	event.add('create:shadow_steel');
	event.add('create:shadow_steel_casing');
	event.add('create:refined_radiance');
	event.add('create:refined_radiance_casing');
	event.add('kubejs:incomplete_queens_slime_ingot');
	event.add('kubejs:incomplete_rf_coil');
	event.add('kubejs:incomplete_redstone_servo'); 
	event.add('kubejs:tainted_blend'); 
	event.add('kubejs:incomplete_creative_mana_tablet'); 
	
})
})