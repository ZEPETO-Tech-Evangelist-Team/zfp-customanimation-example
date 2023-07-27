import { Collider } from 'UnityEngine';
import {ZepetoCharacter, ZepetoPlayer } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AnimationController from './AnimationController';

export enum ZoneType
{
    WATER,
    SAND
}

export default class ZoneTrigger extends ZepetoScriptBehaviour {
    public zoneType: ZoneType;
    
    public OnTriggerEnter(other: Collider)
    {
        if (other.gameObject.tag == "Player")
        {
            let animController: AnimationController = other.GetComponent<AnimationController>();
            if (animController == undefined) { console.error("Couldn't Find an Animator"); }
            this.ApplyZone(animController);
        }
    }
    
    public OnTriggerExit(other: Collider)
    {
        if (other.gameObject.tag == "Player")
        {
            let animController: AnimationController = other.GetComponent<AnimationController>();
            if (animController == undefined) { console.error("Couldn't Find an Animator"); return; }
            this.ResetZone(animController);
        }
    }
    
    public ApplyZone(animController: AnimationController)
    {
        if (animController == undefined) { console.error("Couldn't Find an Animator"); return; }
        switch(this.zoneType)
        {
            case ZoneType.WATER:
                console.log("Triggered WATER");
                animController.ApplyOverrideAnimation(this.zoneType);
                break;
            case ZoneType.SAND:
                console.log("Triggered SAND");
                animController.ApplyOverrideAnimation(this.zoneType);
                break;
            default:
                break;
        }
    }
    
    public ResetZone(animController: AnimationController)
    {
        animController.ResetOverrides();
    }

}