import React from "react";
//import './modAndSchema.css'

let Mods = ()=>{

    let ModSchema = (props)=>{
        return(
            <div className="modSchemaCont">
                <img className="modImg" src={props.link}/>
                <p className="modTitle">{props.titulo}</p>
            </div>
        )
    }

    return(
        <div className="modsContainer">
        <div className="linkMods">Descarga los mods desde el siguiente <a target='_blank' href="https://www.mediafire.com/file/9c12mlde5b0yt4p/CGL6.rar/file">link</a>.</div>
        <div className="linkModsAdvert">Puedes <b className="advert">sugerir</b> mods que te gustaria ver en la segunda parte via Whatsapp o Discord</div>
        <div className="gridCont">
            <ModSchema titulo='SecurityCraft Mod' link='https://www.minecrafteo.com/wp-content/uploads/2021/08/security-craft-1-17.jpg'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/02/medieval-siege-machines-mod.jpg'titulo='Medieval Siege Machines Mod '/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2022/09/immersive-structures-mod.jpg' titulo='Immersive Structures Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/09/additional-lights-1-17.jpg' titulo='Additional Lights Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/alexs-mobs-1-17.jpg' titulo='Alex’s Mobs Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/ambient-sound-mod-1-17.jpg' titulo='Ambient Sounds Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/artifacts-1-17.jpg' titulo='Artifacts Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/12/better-animals-plus-1-16.jpg' titulo='Better Animals Plus Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2022/06/better-village-mod.jpg' titulo='Better Village Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/camera-1-17.jpg' titulo='Camera Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/09/carry-on-1-16.jpg' titulo='Carry On Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/02/mrcrayfishs-gun-1-16.jpg' titulo='MrCrayfish’s Gun Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/07/mrcrayfishs-furniture-1-17.jpg' titulo='MrCrayfish’s Furniture Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/06/chisel-mod-1-16.jpg' titulo='Chisel Mod para Minecraft'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/02/cluttered-mod.jpg' titulo='Cluttered Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/comforts-1-17.jpg' titulo='Comforts Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2017/07/forge-creeper-heal-mod-1-12.jpg' titulo='Forge Creeper Heal Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/disenchanting-forge-1-17.jpg' titulo='Disenchanting Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/dungeon-crawl-1-17.jpg' titulo='Dungeon Crawl Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/02/when-dungeons-arise-1-16.jpg' titulo='When Dungeons Arise Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/01/immersive-aircraft-mod.jpg' titulo='Immersive Aircraft Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2022/04/immersive-armors-mod.jpg' titulo='Immersive Armors Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/09/goblin-traders-1-17.jpg' titulo='Goblin Traders Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/durability-viewer-1-17.jpg' titulo='Durability Viewer Mod'/>
            <ModSchema link='https://images.essential.gg/general/social-960.jpg' titulo='Essential Mod'/>
            <ModSchema link='https://www.9minecraft.net/wp-content/uploads/2022/10/Harvest-with-ease-Mod-Thumbnail-.png' titulo='Harvest with ease Mod'/>
            <ModSchema link='https://media.forgecdn.net/attachments/474/244/banner.jpg ' titulo='Immersive Paintings Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/infernal-expansion-1-17.jpg' titulo='Infernal Expansion Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/just-enough-items-1-17.jpg' titulo='Just Enough Items Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/journeymap-1-17.jpg' titulo='JourneyMap Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/03/jump-over-fences-mod.jpg' titulo='Jump Over Fences Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/05/kobolds-1-16.jpg' titulo='Kobolds Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2019/01/littlemaidmob-1-12.jpg' titulo='LittleMaidMob Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/03/lootr-1-16.jpg' titulo='Lootr Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/05/majos-broom-1-16.jpg' titulo='Majo’s Broom Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/majruszs-progressive-difficulty-1-17.jpg' titulo='Majrusz’s Progressive Difficulty Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2022/08/mimic-mod.jpg' titulo='Mimic Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/minecolonies-1-17.jpg' titulo='MineColonies Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2017/08/comes-alive-mod-1-12.jpg ' titulo='Comes Alive Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/07/more-villagers-1-17.jpg' titulo='More Villagers Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/02/philips-ruins-mod.jpg' titulo='Philip’s Ruins Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/09/player-revive-mod-1-17.jpg' titulo='Player Revive Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/12/pretty-pipes-1-16.jpg' titulo='Pretty Pipes Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/07/quark-1-16.jpg' titulo='Quark Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/randomite-1-17.jpg' titulo='Randomite Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/recall-1-17.jpg' titulo='Recall Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/02/reds-more-structures-mod.jpg' titulo='Red’s More Structures Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/03/relics-1-16.jpg' titulo='Relics Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/08/storage-drawers-1-16.jpg' titulo='Storage Drawers'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/10/supplementaries-1-17.jpg' titulo='Supplementaries Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2022/04/simple-shops-mod.jpg' titulo='Simple Shops Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/04/solar-flux-1-16.jpg' titulo='Solar Flux Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/09/sophisticated-backpacks-1-17.jpg' titulo='Sophisticated Backpacks Mod'/>
            <ModSchema link='https://media.forgecdn.net/attachments/401/335/signpost-header.png' titulo='Signpost Mod'/>
            <ModSchema link='https://cdn.modrinth.com/data/dOGM7ccu/86c3b95625f8b432ce56605373de5ffa0043e97c.png' titulo="Nyf's Spiders Mod"/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2022/05/the-graveyard-biomes-mod.jpg' titulo='The Graveyard Biomes Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/07/corail-tombstone-1-17.jpg' titulo='Corail Tombstone Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/tool-leveling-plus-1-17.jpg' titulo='Tool Leveling Plus Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/12/torchmaster-mod-1-16.jpg' titulo='Torchmaster Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/torohealth-damage-indicators-1-17.jpg' titulo='ToroHealth Damage Indicators Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2020/06/trashslot-1-16.jpg' titulo='TrashSlot Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2023/01/tree-harvester-mod.jpg' titulo='Tree Harvester Mod'/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/09/vein-mining-mod-1-17.jpg' titulo='Vein Mining '/>
            <ModSchema link='https://www.minecrafteo.com/wp-content/uploads/2021/08/water-strainer-1-17.jpg' titulo='Water Strainer Mod'/>
        </div>
        </div>
    )
}

export {Mods}