import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWIdleAction extends VWPhysicalAction {
    private static effort: bigint = 1n;

    public constructor(actorID: string) {
        super(actorID);
    }

    public getEffort(): bigint {
        return VWIdleAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (newEffort === null || newEffort === undefined) {
            console.log("The new effort for VWIdleAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWIdleAction.effort = newEffort;

            console.log("The effort of VWIdleAction has been changed to " + newEffort + ".");
        }
    }
}
