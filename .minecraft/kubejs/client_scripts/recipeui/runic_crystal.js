onEvent('mbd.recipe_ui.runic_crystal', (event) => {
	let recipeWidget = event.getRecipeWidget()
    recipeWidget.clearAllWidgets()

	let background = new ImageWidget(0, 0, 178, 84, new ResourceTexture('multiblocked:textures/gui/runic_altar.png'))
    recipeWidget.addWidget(background)

    let recipe = recipeWidget.recipe
    
//Item Input
    let itemCap = MbdRegistry.getCapability('item')
	let inputs = recipe.getInputContents(itemCap)
	let angle = 2 * 3.14 / inputs.size()
	let i = 0

	for(let input of inputs) {
		let itemIn = itemCap.createContentWidget()

		itemIn.setContent('IN', input, false)
		
        itemIn.setSelfPosition(32 + Math.sin(angle * i) * 32, 32 + Math.cos(angle * i) * 32)
        i++

		recipeWidget.addWidget(itemIn)
    }

//Mana Input
    let manaCap = MbdRegistry.getCapability('bot_mana')
    let manaInput = recipe.getInputContents(manaCap)[0]
    let manaIn = manaCap.createContentWidget()
    manaIn.setContent('IN', manaInput, false)
    manaIn.setSelfPosition(96, 22)
    recipeWidget.addWidget(manaIn)

//Item Output
	let output = recipe.getOutputContents(itemCap)[0]
	let itemOut = itemCap.createContentWidget()

	itemOut.setContent('OUT', output, false)
	itemOut.setSelfPosition(140, 32)
    recipeWidget.addWidget(itemOut)
})