/** @format */

onEvent("ui.main_menu", (event) => {
  event.replace((ui) => {
    ui.background("kubejs:textures/image/bg.png");
    // ui.fillBackground("kubejs:textures/image/bg.png", 4032, 3016);
    ui.widgetTexture = "kubejs:textures/image/widgets.png";

    //Singleplayer
    ui.button((b) => {
      b.name = Text.translate("menu.singleplayer");
      b.width = 160;
      b.x = (ui.width - 150) / 2;
      b.y = ui.height / 2 - 30;
      b.action = "minecraft:singleplayer";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Multiplayer
    ui.button((b) => {
      b.name = Text.translate("menu.multiplayer");
      b.width = 160;
      b.x = (ui.width - 150) / 2;
      b.y = ui.height / 2 + 0;
      b.action = "minecraft:multiplayer";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //下载最新版本
    ui.button((b) => {
      b.name = Text.of("下载最新版本");
      b.width = 70;
      b.x = 0;
      b.y = 200;
      b.action = "https://www.lanzv.com/b023thcdc";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //如何更新版本？
    ui.button((b) => {
      b.name = Text.of("如何更新版本？");
      b.width = 70;
      b.x = 0;
      b.y = 230;
      b.action = "https://gitee.com/FalAut/0xUDF";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Gitee
    ui.button((b) => {
      b.name = Text.of("Gitee");
      b.width = 50;
      b.x = (ui.width - 150) / 2;
      b.y = ui.height / 2 + 30;
      b.action = "https://gitee.com/FalAut/0xUDF";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Bug/建议
    ui.button((b) => {
      b.name = Text.of("Bug/建议");
      b.width = 50;
      b.x = (ui.width - 150) / 2 + b.width + 5;
      b.y = ui.height / 2 + 30;
      b.action = "https://gitee.com/FalAut/0xUDF/issues/new";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Github
    ui.button((b) => {
      b.name = Text.of("GitHub");
      b.width = 50;
      b.x = (ui.width - 150) / 2 + b.width + 60;
      b.y = ui.height / 2 + 30;
      b.action = "https://github.com/FalAut/0xUDF";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Options
    ui.button((b) => {
      b.name = Text.translate("menu.options");
      b.width = 160;
      b.x = (ui.width - 150) / 2;
      b.y = ui.height / 2 + 60;
      b.action = "minecraft:options";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Mods
    ui.button((b) => {
      b.name = Text.translate("fml.menu.mods");
      b.width = 77.5;
      b.x = (ui.width - 150) / 2;
      b.y = ui.height / 2 + 90;
      b.action = "forge:mod_list";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Quit
    ui.button((b) => {
      b.name = Text.translate("menu.quit");
      b.width = 77.5;
      b.x = (ui.width - 150) / 2 + b.width + 7.5;
      b.y = ui.height / 2 + 90;
      b.action = "minecraft:quit";
      b.hoverColor = 0x00ff00;
      b.shadow = false;
    });

    //Logo
    ui.image((i) => {
      i.width = 1024 * 0.45;
      i.height = 256 * 0.45;
      i.x = (ui.width - 150) / 2 - 140;
      i.y = ui.height / 2 - 115;
      i.texture = "kubejs:textures/image/logo.png";
    });
  });
});
