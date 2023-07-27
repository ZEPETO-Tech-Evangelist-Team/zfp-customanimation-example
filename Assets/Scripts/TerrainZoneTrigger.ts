import { Collider } from 'UnityEngine';
import {ZepetoCharacter, ZepetoPlayer } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import AnimationController, { OverrideAnimationType } from './AnimationController';

export enum ZoneType
{
    WATER,
    SAND,
    ICE
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
            if (animController == undefined) { console.error("Couldn't Find an Animator"); }
            this.ResetZone(animController);
        }
    }
    
    public ApplyZone(animController: AnimationController)
    {
        if (animController == undefined) { console.error("Couldn't Find an Animator"); }
        switch(this.zoneType)
        {
            case ZoneType.ICE:
                //TODO: Equip Ice Skates through Mannequin
                animController.ApplyOverrideAnimation(OverrideAnimationType.ICE_MOVE);
                break;
            case ZoneType.WATER:
                animController.ApplyOverrideAnimation(OverrideAnimationType.SWIM_IDLE);
                animController.ApplyOverrideAnimation(OverrideAnimationType.SWIM_MOVE);
                break;
            case ZoneType.SAND:
                animController.ApplyOverrideAnimation(OverrideAnimationType.SAND_MOVE);
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