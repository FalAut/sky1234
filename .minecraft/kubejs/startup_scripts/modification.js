// priority: 1

onEvent('block.modification', event => {

})

onEvent('item.modification', event => {
    event.modify([
      'naturesaura:fortress_finder',
      'kubejs:ghast_eye', 
      'kubejs:wither_skeleton_eye', 
      'kubejs:wither_skeleton_eye', 
      'kubejs:nether_eye',
      'naturesaura:animal_generator',
      'farmingforblockheads:market'
    ], item => {
        item.fireResistant = true
    })
  event.modify('extendedexchange:final_star', item => {
    item.maxStackSize = 64
  })
})