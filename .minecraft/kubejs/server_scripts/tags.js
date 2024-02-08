// priority: 9999

onEvent('tags.fluids', event => {
	event.removeAll('minecraft:water')
	event.add('minecraft:water', 'water')
	event.remove('minecraft:water', 'create:honey')
	event.remove('minecraft:water', 'create:chocolate')
})

onEvent('tags.blocks', event => {
    let mineableID = [
		'naturesaura:gold_brick',
		'naturesaura:nature_altar',
		'compactcrafting:field_projector',
		'naturesaura:gold_nether_brick'
	]

	mineableID.forEach(blockid => {
        event.add('minecraft:mineable/pickaxe', blockid)
	})
})

onEvent('tags.items', event => {
	event.add('create:all', '@create')
	event.add('immersiveengineering:all', '@immersiveengineering')
	event.add('ae2:all', '@ae2')
    // Item.getTypeList().forEach((item) => event.add('kubejs:everything', item));
	event.add('thermal:crafting/dies', 'kubejs:mold_rf_coil')
	event.add('thermal:crafting/dies', 'kubejs:mold_redstone_servo')
	// event.remove('kubejs:everything', ['kubejs:undef1ned', 'extendedexchange:final_star'])
})
onEvent('tags.mekanism.gas', event => {
	event.add('mekanism:waste_barrel_decay_blacklist', 'mekanism:polonium')
})