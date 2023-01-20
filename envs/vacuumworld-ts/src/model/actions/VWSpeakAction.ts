import { VWMessageContent } from "../common/VWMessage";
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

    public static overrideDefaultEffort(effort: bigint): void {
        if (effort === null || effort === undefined) {
            throw new Error("The effort cannot be null or undefined.");
        }
        else {
            VWSpeakAction.effort = effort;
        }
    }
}
