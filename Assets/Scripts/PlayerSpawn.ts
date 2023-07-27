import {LocalPlayer, SpawnInfo, ZepetoPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { WorldService } from 'ZEPETO.World';

export default class SampleScript extends ZepetoScriptBehaviour {

    Start() {    
        
        let spawnInfo : SpawnInfo = new SpawnInfo();
        spawnInfo.position = this.transform.position;
        spawnInfo.rotation = this.transform.rotation;
        
        ZepetoPlayers.instance.CreatePlayerWithUserId(WorldService.userId, spawnInfo, true);
        
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
           let player: LocalPlayer = ZepetoPlayers.instance.LocalPlayer;
           player.zepetoPlayer.character.gameObject.name = player.zepetoPlayer.userId;
            player.zepetoPlayer.character.gameObject.tag = "Player";
        });
    }

    Update() {
        
    }

}