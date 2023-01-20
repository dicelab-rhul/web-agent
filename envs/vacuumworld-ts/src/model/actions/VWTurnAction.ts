import { VWDirection } from "../common/VWDirection";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWTurnAction extends VWPhysicalAction {
    private turningDirection: VWDirection;
    private static effort: bigint = 1n;

    public constructor(actorID: string, turningDirection: VWDirection) {
        super(actorID);

        this.turningDirection = VWTurnAction.validateTurningDirection(turningDirection);
    }

    private static validateTurningDirection(direction: VWDirection): VWDirection {
        if (direction === null || direction === undefined) {
            throw new Error("The turning direction cannot be null or undefined.");
        }

        return direction;
    }

    public getTurningDirection(): VWDirection {
        return this.turningDirection;
    }

    public getEffort(): bigint {
        return VWTurnAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (newEffort === null || newEffort === undefined) {
            console.log("The new effort for VWTurnAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWTurnAction.effort = newEffort;

            console.log("The effort of VWTurnAction has been changed to " + newEffort + ".");
        }
    }
}
