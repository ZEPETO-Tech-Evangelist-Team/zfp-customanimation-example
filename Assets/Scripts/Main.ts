import { GameObject } from 'UnityEngine';
import {LocalPlayer, ZepetoPlayers } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AnimationController from './AnimationController';

export default class Main extends ZepetoScriptBehaviour {
    public static GetInstance(): Main
    {
        if (this.instance == undefined)
            this.instance = GameObject.Find("Main").GetComponent<Main>();
        
        return this.instance;
    }
    
    private static instance;
    private localPlayer: LocalPlayer;
    
    public Start()
    {
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(()=> {
            this.localPlayer = ZepetoPlayers.instance.LocalPlayer;
            this.localPlayer.zepetoPlayer.character.gameObject.AddComponent<AnimationController>();
        });
    }

}