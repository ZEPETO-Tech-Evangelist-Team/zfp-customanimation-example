import { AnimationClip, Resources } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export enum OverrideAnimationType
{
    SWIM_IDLE,
    SWIM_MOVE,
    SAND_MOVE,
    ROLLER_MOVE,
    MAX
}

export default class AnimationController extends ZepetoScriptBehaviour {
    private overrideAnims: AnimationClip[] = new Array<AnimationClip>();
    
    public Start()
    {
        for (let i = 0; i < OverrideAnimationType.MAX; i++)
        {
            //Load Animation Overrides from Resources Folder
            let clip : AnimationClip = Resources.Load<AnimationClip>("ANIM/ANIM_OVERRIDE_" + i);
            if (clip != undefined && clip != null)
            {
                this.overrideAnims.push(clip);
            }
        }
    }
    
    public ApplyOverrideAnimation(type: OverrideAnimationType)
    {
        //Override the animations based on the type enum
    }
    
    public ResetOverrides()
    {
        //Reset Animations back to original states
    }

}