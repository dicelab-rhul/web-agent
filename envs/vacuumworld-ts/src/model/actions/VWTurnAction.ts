import { VWDirection } from "../common/VWDirection";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWTurnAction extends VWPhysicalAction {
    private turningDirection: VWDirection;
    private static effort: bigint = 1n;

    public constructor(actorID: string, turningDirection: VWDirection) {
        super(actorID);

        this.turningDirection = VWExistenceChecker.validateExistence(turningDirection, "The turning direction cannot be null or undefined.");
    }

    public getTurningDirection(): VWDirection {
        return this.turningDirection;
    }

    public getEffort(): bigint {
        return VWTurnAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (!VWExistenceChecker.allArgumentsExist(newEffort)) {
            console.log("The new effort for VWTurnAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWTurnAction.effort = newEffort;

            console.log("The effort of VWTurnAction has been changed to " + newEffort + ".");
        }
    }
}
