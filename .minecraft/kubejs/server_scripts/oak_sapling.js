onEvent("block.right_click", (event) => {
  const { block, hand, player, server } = event;
  let input = "kubejs:undef1ned_block";
  let blockpos = [];

  for (let i = -1; i <= 1; i++) {
    for (let j = 3; j <= 6; j++) {
      if ((i !== 0 || j !== 4) && (i !== 0 || j !== 5)) {
        blockpos.push([i, j, 0]);
        blockpos.push([0, j, i]);
        blockpos.push([0, j, -i]);
      }
    }
  }

  let x = block.x + 2;
  let y = block.y;
  let z = block.z + 2;

  let x1 = block.x - 2;
  let y1 = block.y + 6;
  let z1 = block.z - 2;

  if (blockpos.every((pos) => block.offset(pos[0], pos[1], pos[2]).id == input) && hand == "main_hand") {
    block.popItem("oak_sapling");
    player.swingArm(hand);
    server.runCommandSilent(`fill ${x} ${y} ${z} ${x1} ${y1} ${z1} air replace ${input}`);
  }
});
