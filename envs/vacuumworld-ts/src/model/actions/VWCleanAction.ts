import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWPhysicalAction } from "./VWPhysicalAction";

export class VWCleanAction extends VWPhysicalAction {
    private static effort: bigint = 1n;

    public constructor(actorID: string) {
        super(actorID);
    }

    public getEffort(): bigint {
        return VWCleanAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (!VWExistenceChecker.exists(newEffort)) {
            console.log("The new effort for VWCleanAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWCleanAction.effort = newEffort;

            console.log("The effort of VWCleanAction has been changed to " + newEffort + ".");
        }
    }
}
