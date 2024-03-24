onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.background("kubejs:textures/image/bg.png")
    // ui.fillBackground("kubejs:textures/image/bg.png", 4032, 3016);
    ui.widgetTexture = "kubejs:textures/image/widgets.png"

    //Singleplayer
    ui.button((b) => {
      b.name = Text.translate("menu.singleplayer")
      b.width = 160
      b.x = (ui.width - 150) / 2
      b.y = ui.height / 2 - 30
      b.action = "minecraft:singleplayer"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Multiplayer
    ui.button((b) => {
      b.name = Text.translate("menu.multiplayer")
      b.width = 160
      b.x = (ui.width - 150) / 2
      b.y = ui.height / 2 + 0
      b.action = "minecraft:multiplayer"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //QQ频道
    ui.button((b) => {
      b.name = Text.of("QQ频道")
      b.width = 50
      b.x = (ui.width - 150) / 2
      b.y = ui.height / 2 + 30
      b.action = "https://pd.qq.com/s/d9m9mzv1c"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Github
    ui.button((b) => {
      b.name = Text.of("Github")
      b.width = 50
      b.x = (ui.width - 150) / 2 + b.width + 5
      b.y = ui.height / 2 + 30
      b.action = "https://github.com/FalAut/sky1234"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Discord
    ui.button((b) => {
      b.name = Text.of("Discord")
      b.width = 50
      b.x = (ui.width - 150) / 2 + b.width + 60
      b.y = ui.height / 2 + 30
      b.action = "https://discord.gg/dECQZNNngD"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Options
    ui.button((b) => {
      b.name = Text.translate("menu.options")
      b.width = 160
      b.x = (ui.width - 150) / 2
      b.y = ui.height / 2 + 60
      b.action = "minecraft:options"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Mods
    ui.button((b) => {
      b.name = Text.translate("fml.menu.mods")
      b.width = 77.5
      b.x = (ui.width - 150) / 2
      b.y = ui.height / 2 + 90
      b.action = "forge:mod_list"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Quit
    ui.button((b) => {
      b.name = Text.translate("menu.quit")
      b.width = 77.5
      b.x = (ui.width - 150) / 2 + b.width + 7.5
      b.y = ui.height / 2 + 90
      b.action = "minecraft:quit"
      b.hoverColor = 0x00ff00
      b.shadow = false
    })

    //Logo
    ui.image((i) => {
      i.width = 1023 * 0.3
      i.height = 273 * 0.3
      i.x = (ui.width - 150) / 2 - 75
      i.y = ui.height / 2 - 115
      i.texture = "kubejs:textures/image/logo.png"
    })
  })
})
