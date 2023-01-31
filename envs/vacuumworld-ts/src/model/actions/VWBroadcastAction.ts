import { VWMessageContent } from "../common/VWMessage";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWCommunicativeAction } from "./VWCommunicativeAction";

export class VWBroadcastAction extends VWCommunicativeAction {
    private static effort: bigint = 1n;

    public constructor(actorID: string, content: VWMessageContent) {
        super(actorID, content);
    }

    public getEffort(): bigint {
        return VWBroadcastAction.effort;
    }

    // This method is needed by VWSpeakAction.
    public static getEffort(): bigint {
        return VWBroadcastAction.effort;
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (!VWExistenceChecker.allArgumentsExist(newEffort)) {
            console.log("The new effort for VWBroadcastAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWBroadcastAction.effort = newEffort;

            console.log("The effort of VWBroadcastAction has been changed to " + newEffort + ".");
        }
    }
}
