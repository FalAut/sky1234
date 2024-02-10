// priority: 1

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

  event.modify([
    'kubejs:incomplete_queens_slime_ingot',
    'kubejs:incomplete_rf_coil',
    'kubejs:incomplete_redstone_servo',
    'kubejs:tainted_blend'
  ], item => {
    item.maxStackSize = 64
  })
})