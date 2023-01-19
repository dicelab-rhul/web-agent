import { VWMessageContent } from "../common/VWMessage";
import { VWCommunicativeAction } from "./VWCommunicativeAction";

export class VWBroadcastAction extends VWCommunicativeAction {
    public constructor(actorID: string, content: VWMessageContent) {
        super(actorID, content);
    }
}
