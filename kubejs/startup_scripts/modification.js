// priority: 1

onEvent("item.modification", (event) => {
  event.modify(
    [
      "naturesaura:fortress_finder",
      "kubejs:ghast_eye",
      "kubejs:wither_skeleton_eye",
      "kubejs:wither_skeleton_eye",
      "kubejs:nether_eye",
      "naturesaura:animal_generator",
      "farmingforblockheads:market",
    ],
    (item) => {
      item.fireResistant = true
    }
  )

  event.modify(
    [
      "kubejs:incomplete_queens_slime_ingot",
      "kubejs:incomplete_rf_coil",
      "kubejs:incomplete_redstone_servo",
      "kubejs:tainted_blend",
      "immersiveengineering:logic_circuit",
      "extendedexchange:final_star",
      "create:chromatic_compound",
    ],
    (item) => {
      item.maxStackSize = 64
    }
  )
})

onEvent("block.modification", (event) => {
  event.modify(["minecraft:end_portal_frame", "minecraft:end_portal"], (block) => {
    block.destroySpeed = 1
  })
})
