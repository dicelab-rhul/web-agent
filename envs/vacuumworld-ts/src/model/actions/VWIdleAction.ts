import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWIdleAction extends VWPhysicalAction {
    private static effort: bigint = 1n;

    public constructor(actorID: string) {
        super(actorID);
    }

    public getEffort(): bigint {
        return VWIdleAction.effort;
    }

    public static overrideDefaultEffort(effort: bigint): void {
        if (effort === null || effort === undefined) {
            throw new Error("The effort cannot be null or undefined.");
        }
        else {
            VWIdleAction.effort = effort;
        }
    }
}
