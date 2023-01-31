import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWMoveAction extends VWPhysicalAction {
    private static effort: bigint = 1n;

    public constructor(actorID: string) {
        super(actorID);
    }

    public getEffort(): bigint {
        return VWMoveAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (!VWExistenceChecker.allArgumentsExist(newEffort)) {
            console.log("The new effort for VWMoveAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWMoveAction.effort = newEffort;

            console.log("The effort of VWMoveAction has been changed to " + newEffort + ".");
        }
    }
}
