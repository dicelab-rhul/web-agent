import { VWMessageContent } from "../common/VWMessage";
import { VWExistenceChecker } from "../utils/VWExistenceChecker";
import { VWBroadcastAction } from "./VWBroadcastAction";
import { VWCommunicativeAction } from "./VWCommunicativeAction";

export class VWSpeakAction extends VWCommunicativeAction {
    private static effort: bigint = 1n;

    public constructor(actorID: string, content: VWMessageContent, recipientsIDs?: Array<string>) {
        super(actorID, content, recipientsIDs);
    }

    public getEffort(): bigint {
        if (this.getRecipientsIDs().length === 0) {
            return VWBroadcastAction.getEffort();
        }
        else {
            return VWSpeakAction.effort;
        }
    }

    public static overrideDefaultEffort(newEffort: bigint): void {
        if (!VWExistenceChecker.exists(newEffort)) {
            console.log("The new effort for VWSpeakAction cannot be null or undefined. The default effort will be used instead.");
        }
        else {
            VWSpeakAction.effort = newEffort;

            console.log("The effort of VWSpeakAction has been changed to " + newEffort + ".");
        }
    }
}
