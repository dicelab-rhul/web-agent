import { VWMessageContent } from "../common/VWMessage";
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

    public static overrideDefaultEffort(effort: bigint): void {
        if (effort === null || effort === undefined) {
            throw new Error("The effort cannot be null or undefined.");
        }
        else {
            VWBroadcastAction.effort = effort;
        }
    }
}
